# GIẢI THÍCH BÀI TẬP 1 - LUYỆN TẬP 8

## Đề bài:
> Hãy tạo một component `ProductCard` trong React Native dùng để hiển thị thông tin sản phẩm. Component này nhận props gồm `name` và `price`, sau đó hiển thị tên sản phẩm và giá sản phẩm theo bố cục dạng thẻ đơn giản. Sinh viên cần tạo file component riêng, export component đó, import vào màn hình chính và sử dụng ít nhất ba lần với ba bộ dữ liệu sản phẩm khác nhau. Sau khi hoàn thành, hãy viết một đoạn ngắn giải thích cách props được truyền từ component cha xuống component con và vì sao component ProductCard có thể tái sử dụng nhiều lần.

---

## 1. Cách props được truyền từ component cha xuống component con:
- **Tại Component Cha (`App.js`):**
  - Component `App` đóng vai trò là component cha, nắm giữ và quản lý dữ liệu cần hiển thị (các sản phẩm khác nhau).
  - Khi gọi component con `ProductCard`, cha truyền dữ liệu vào qua cú pháp thuộc tính giống như thuộc tính HTML trong JSX:
    ```jsx
    <ProductCard 
      name="Điện thoại iPhone 15 Pro Max 256GB" 
      price={29990000} 
    />
    ```
  - Ở đây, `name` và `price` chính là các thuộc tính (props) được gán giá trị cụ thể.

- **Tại Component Con (`ProductCard.js`):**
  - Component `ProductCard` khai báo nhận tham số đầu vào là một đối tượng `props`. Bằng cú pháp destructuring `{ name, price }`, component con trích xuất trực tiếp 2 giá trị này:
    ```javascript
    export default function ProductCard({ name, price }) { ... }
    ```
  - Dữ liệu nhận được từ props sau đó được gán vào các thẻ giao diện như `<Text>{name}</Text>` và hiển thị giá tiền đã được format.
  - Quá trình này tuân theo nguyên lý **One-way Data Binding (luồng dữ liệu một chiều)**: dữ liệu chỉ truyền từ cha xuống con, component con chỉ đọc (`read-only`) và không thể thay đổi trực tiếp giá trị props nhận được.

---

## 2. Vì sao component `ProductCard` có thể tái sử dụng nhiều lần:
1. **Tách biệt giữa Giao diện (Template) và Dữ liệu (Data):**
   - `ProductCard` chỉ định nghĩa bộ khung cấu trúc hiển thị (layout dạng thẻ, viền, bóng đổ, kiểu chữ, định dạng giá tiền).
   - Component không cố định (hardcode) bất kỳ dữ liệu cụ thể nào. Nội dung hiển thị hoàn toàn phụ thuộc vào giá trị của props `name` và `price` được truyền vào từ bên ngoài.
2. **Tính độc lập và đóng gói cao (Encapsulation):**
   - `ProductCard` được viết ở một file riêng biệt, có stylesheet riêng và export độc lập. Bất kỳ màn hình hay component cha nào cần hiển thị thẻ sản phẩm chỉ cần `import` và truyền props phù hợp.
3. **Tiết kiệm mã nguồn và dễ bảo trì:**
   - Thay vì phải viết lại 10-20 dòng code JSX và CSS cho từng sản phẩm, lập trình viên chỉ cần gọi `<ProductCard name={...} price={...} />`.
   - Khi cần đổi kiểu dáng (ví dụ: thay đổi màu chữ, đổi độ bo góc thẻ, thêm hiệu ứng đổ bóng), ta chỉ cần chỉnh sửa một lần duy nhất trong `ProductCard.js`, toàn bộ các nơi sử dụng component này trong ứng dụng sẽ tự động được cập nhật đồng bộ.
