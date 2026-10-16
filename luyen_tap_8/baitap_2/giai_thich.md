# GIẢI THÍCH BÀI TẬP 2 - LUYỆN TẬP 8

## Đề bài:
> Tạo “Product List” mock data (10 sản phẩm) + màn hình Detail:
> - List dùng FlatList
> - Bấm 1 item → sang Detail và truyền props/params (id, name, price)
> - Nộp: repo + ảnh list + ảnh detail.

---

## 1. Cấu trúc và Kiến trúc Triển khai:
Ứng dụng được thiết kế phân tầng với các module rõ ràng:
1. **`mockData.js`**: Chứa danh sách mảng dữ liệu mẫu `MOCK_PRODUCTS` gồm 10 sản phẩm công nghệ thực tế (Điện thoại, Laptop, Tai nghe, Smartwatch, Loa,...). Mỗi đối tượng gồm các trường: `id`, `name`, `price`, `category`, `rating`, `image`, `description`.
2. **`ProductItem.js`**: Component hiển thị một phần tử trong danh sách `FlatList`, bao gồm ảnh thumbnail, danh mục, đánh giá sao, tên sản phẩm, giá tiền và nút điều hướng "Chi tiết →".
3. **`ProductDetail.js`**: Màn hình xem thông tin chi tiết một sản phẩm, nhận các props/params (`id`, `name`, `price`, `description`, `image`, `rating`, `category`) và hàm callback `onBack` để quay lại danh sách.
4. **`App.js`**: Quản lý trạng thái màn hình hiện tại thông qua state `selectedProduct`.

---

## 2. Vì sao sử dụng `FlatList` cho danh sách sản phẩm?
- **Tối ưu hóa hiệu năng và bộ nhớ:**
  - Khác với `ScrollView` (vốn nạp và render toàn bộ các phần tử cùng lúc vào bộ nhớ bất kể có hiển thị trên màn hình hay không), `FlatList` là một component dạng **Virtual List (danh sách ảo)**.
  - `FlatList` chỉ thực sự render các item đang hiển thị trong tầm nhìn của người dùng (viewport) và một lượng nhỏ item đệm xung quanh. Khi người dùng cuộn, các item ra khỏi màn hình sẽ được thu hồi bộ nhớ, giúp ứng dụng mượt mà ngay cả khi danh sách có hàng trăm, hàng nghìn sản phẩm.
- **Tích hợp sẵn các thuộc tính hữu ích:**
  - `data`: Mảng dữ liệu nguồn (`MOCK_PRODUCTS`).
  - `keyExtractor`: Trích xuất khóa duy nhất cho mỗi item (dùng `item.id`), giúp React định danh chính xác phần tử cần re-render.
  - `renderItem`: Hàm trả về JSX hiển thị từng item (`ProductItem`).

---

## 3. Cơ chế truyền dữ liệu và chuyển màn hình (Navigation Flow):
1. **Tại `ProductItem`:**
   - Mỗi item được bao bọc bởi thẻ `TouchableOpacity`. Khi người dùng chạm vào:
     ```jsx
     <TouchableOpacity onPress={() => onPress(item)}>
     ```
   - Sự kiện kích hoạt hàm `handleSelectProduct(item)` truyền ngược lên component cha.
2. **Tại `App.js`:**
   - Component cha lưu sản phẩm được chọn vào state:
     ```javascript
     const [selectedProduct, setSelectedProduct] = useState(null);
     const handleSelectProduct = (product) => {
       setSelectedProduct(product);
     };
     ```
   - Khi `selectedProduct !== null`, React sẽ render màn hình `ProductDetail` thay cho `FlatList` và truyền toàn bộ dữ liệu qua props:
     ```jsx
     <ProductDetail
       id={selectedProduct.id}
       name={selectedProduct.name}
       price={selectedProduct.price}
       description={selectedProduct.description}
       image={selectedProduct.image}
       rating={selectedProduct.rating}
       category={selectedProduct.category}
       onBack={() => setSelectedProduct(null)}
     />
     ```
3. **Tại `ProductDetail`:**
   - Nhận đầy đủ các props `id`, `name`, `price`, v.v. và hiển thị chi tiết lên giao diện người dùng.
   - Khi bấm nút `← Quay lại`, hàm `onBack` kích hoạt đặt lại `selectedProduct = null`, màn hình tự động quay về danh sách `FlatList` với vị trí xem ban đầu.

---

## 4. Hình ảnh minh chứng kết quả:
- **`anh_list.png`**: Ảnh chụp giao diện màn hình danh sách 10 sản phẩm sử dụng FlatList.
- **`anh_detail.png`**: Ảnh chụp giao diện màn hình chi tiết sản phẩm nhận props/params (id, name, price, ...).
