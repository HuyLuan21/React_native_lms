# BÁO CÁO CÂU HỎI ÔN TẬP LÝ THUYẾT - LUYỆN TẬP 8

**Học phần:** Lập trình React Native  
**Họ và tên sinh viên:** Nguyễn Huy Luân  
**Nội dung:** Ôn tập lý thuyết về Export/Import, Props, Tách Component, Mối liên hệ Props - State - Hooks và Controlled Component với TextInput.

---

## Câu 1. Sự khác nhau giữa default export và named export trong React Native
### Đề bài:
> Trình bày sự khác nhau giữa default export và named export trong React Native. Khi một file chỉ chứa một component chính thì nên sử dụng cách export nào? Hãy giải thích lý do và nêu ví dụ tình huống sử dụng phù hợp.

### Trả lời:

#### 1. Bảng so sánh chi tiết giữa Default Export và Named Export:

| Tiêu chí | Default Export (`export default`) | Named Export (`export ...`) |
| :--- | :--- | :--- |
| **Số lượng trong 1 file** | Chỉ được phép có **tối đa 1** default export duy nhất. | Có thể có **nhiều** named export trong cùng một file. |
| **Cú pháp Export** | `export default MyComponent;`<br>hoặc `export default function MyComponent() {}` | `export const MyComponent = () => {};`<br>hoặc `export { CompA, CompB };` |
| **Cú pháp Import** | `import MyComponent from './MyComponent';`<br>*(Không dùng dấu ngoặc nhọn `{}`)* | `import { MyComponent } from './MyComponent';`<br>*(Bắt buộc phải đặt trong `{}`)* |
| **Đặt tên khi Import** | Có thể đổi sang bất kỳ tên nào tùy ý mà không cần từ khóa phụ:<br>`import RenamedComp from './MyComponent';` | Phải import đúng tên gốc, nếu muốn đổi tên phải dùng từ khóa `as`:<br>`import { CompA as NewCompA } from './File';` |
| **Mục đích sử dụng phổ biến** | Đại diện cho thực thể chính, màn hình chính hoặc component chủ đạo của cả file. | Export các module phụ trợ, tập hợp hàm tiện ích (utils), bộ định nghĩa màu sắc/hằng số (constants). |

#### 2. Lựa chọn export khi file chỉ chứa một component chính:
- **Khuyến nghị chuẩn:** Nên sử dụng **Default Export** (`export default`).
- **Lý do:**
  1. **Tuân thủ nguyên lý Đơn nhiệm (Single Responsibility):** Mỗi file module đại diện cho một component độc lập duy nhất (ví dụ: `ProductCard.js`, `HomeScreen.js`). Tên file phản ánh trực tiếp nội dung component chính bên trong.
  2. **Cú pháp import ngắn gọn, tự nhiên:** Lập trình viên chỉ cần viết `import ProductCard from './ProductCard';`, không cần thêm dấu ngoặc nhọn `{}`.
  3. **Linh hoạt khi tái sử dụng:** Ở các màn hình khác nhau, nếu xảy ra tình trạng trùng lặp tên component giữa các thư viện hoặc module, component cha có thể dễ dàng đổi tên ngay lúc import mà không cần cú pháp `as`.

#### 3. Ví dụ tình huống sử dụng phù hợp:
- **Tình huống sử dụng Default Export:**
  ```javascript
  // File: screens/HomeScreen.js
  import React from 'react';
  import { View, Text } from 'react-native';

  export default function HomeScreen() {
    return <View><Text>Màn hình chính</Text></View>;
  }
  ```
  *Tại file khác chỉ cần gọi:*
  ```javascript
  import HomeScreen from './screens/HomeScreen';
  ```

- **Tình huống sử dụng Named Export:**
  ```javascript
  // File: utils/helpers.js
  export const formatCurrency = (amount) => amount.toLocaleString('vi-VN') + ' đ';
  export const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  export const APP_COLOR = '#0284C7';
  ```
  *Tại file khác import chính xác hàm cần dùng:*
  ```javascript
  import { formatCurrency, validateEmail } from './utils/helpers';
  ```

---

## Câu 2. Khái niệm props và tính chất "Read-Only" trong React Native
### Đề bài:
> Giải thích khái niệm props trong React Native. Vì sao props được xem là cách truyền dữ liệu từ component cha xuống component con? Hãy phân tích đặc điểm “read-only” của props và cho biết điều gì có thể xảy ra nếu component con cố gắng thay đổi trực tiếp giá trị props nhận được.

### Trả lời:

#### 1. Khái niệm props trong React Native:
- `props` (viết tắt của **properties**) là một đối tượng (object) đặc biệt trong React/React Native dùng để truyền dữ liệu và các hàm xử lý từ component cha sang component con.
- Về bản chất lập trình, props tương tự như các đối số (arguments) được truyền vào một hàm (function) trong JavaScript, giúp tùy biến nội dung và trạng thái hiển thị của component mà không làm thay đổi logic mã nguồn bên trong.

#### 2. Vì sao props là cách truyền dữ liệu từ cha xuống con:
- React áp dụng kiến trúc **Luồng dữ liệu một chiều (Unidirectional Data Flow / Top-Down Data Flow)**.
- Dữ liệu luôn di chuyển theo hướng từ gốc của cây component đi xuống các nhánh con:
  - Component cha gọi component con trong JSX và gán giá trị thuộc tính: `<ProductCard name="iPhone 15" price={29990000} />`.
  - Component con nhận các giá trị này qua tham số đầu vào `props` (hoặc destructuring `{ name, price }`).
- Component con không thể tự ý gửi dữ liệu trực tiếp ngược lên cha thông qua props thông thường. Muốn tương tác ngược lên, con phải kích hoạt hàm callback do cha truyền xuống.

#### 3. Phân tích đặc điểm "Read-Only" (Chỉ đọc) của props:
- Trong tư tưởng thiết kế của React, component là một **Hàm thuần khiết (Pure Function)** đối với props của nó: nhận vào cùng một bộ props thì luôn phải trả về cùng một kết quả JSX giao diện, không được gây ra tác dụng phụ (side effects) làm thay đổi giá trị của props.
- Props là **bất biến (immutable)** trong suốt vòng đời của component nhận nó. Chỉ có component cha sở hữu dữ liệu mới có quyền thay đổi dữ liệu đó.

#### 4. Điều gì xảy ra nếu component con cố gắng thay đổi trực tiếp props:
Nếu component con viết mã dạng: `props.price = 100000;` hoặc `name = "Tên mới"`:
1. **Lỗi Runtime / TypeError:** Trong chế độ Strict Mode của React hoặc khi object props bị đóng băng (`Object.freeze`), việc gán lại thuộc tính sẽ ném ra ngoại lệ `TypeError: Cannot assign to read only property`.
2. **Không kích hoạt Re-render:** React theo dõi sự thay đổi của `state` để cập nhật lại giao diện. Việc can thiệp trực tiếp vào `props` không kích hoạt cơ chế Virtual DOM diffing, dẫn đến giao diện không được cập nhật hoặc hiển thị chập chờn, sai lệch.
3. **Phá vỡ tính toàn vẹn của ứng dụng:** Component cha vẫn lưu giữ giá trị cũ trong khi con nắm giữ giá trị đã bị sửa lén lút, gây mất đồng bộ dữ liệu nghiêm trọng và tạo ra các lỗi logic (bugs) cực kỳ khó truy vết.
- **Giải pháp chuẩn:** Nếu component con cần thay đổi giá trị nội bộ, hãy sao chép props vào một biến `state` riêng của con (`const [currentPrice, setCurrentPrice] = useState(props.price)`) hoặc gọi hàm callback từ cha (`onPriceChange(newPrice)`) để cha cập nhật state của cha.

---

## Câu 3. Vai trò của việc tách component nhỏ trong React Native
### Đề bài:
> Phân tích vai trò của việc tách component nhỏ trong quá trình xây dựng ứng dụng React Native. Theo em, việc tách các thành phần như Header, Button, InputField, Card thành các component riêng giúp ích như thế nào cho việc tái sử dụng, bảo trì và mở rộng ứng dụng?

### Trả lời:

#### 1. Vai trò của việc chia nhỏ component:
Việc chia nhỏ giao diện thành các component độc lập (Component-Driven Architecture) là triết lý cốt lõi của React. Thay vì viết toàn bộ màn hình dài hàng nghìn dòng mã trong một file duy nhất, ta phân rã giao diện thành các mảnh ghép độc lập, có cấu trúc phân cấp rõ ràng theo nguyên lý Đơn nhiệm (Single Responsibility Principle).

#### 2. Lợi ích cụ thể:

1. **Khả năng tái sử dụng mã nguồn vượt trội (Reusability):**
   - Viết một lần, sử dụng ở bất kỳ đâu trong toàn bộ ứng dụng (nguyên tắc DRY - Don't Repeat Yourself).
   - *Ví dụ:* Một component `Button` chuẩn thiết kế với đầy đủ hiệu ứng bấm, màu sắc, font chữ có thể dùng lại ở màn hình Đăng nhập, Đăng ký, Mua hàng, Giỏ hàng,... mà không cần phải copy lại hàng chục dòng JSX và StyleSheet.
   - Component `ProductCard` chỉ cần viết một lần nhưng có thể hiển thị hàng trăm sản phẩm khác nhau chỉ bằng cách truyền props tương ứng.

2. **Dễ dàng bảo trì và sửa lỗi (Maintainability):**
   - Khi có lỗi phát sinh hoặc cần chỉnh sửa giao diện, lập trình viên biết chính xác file cần mở (ví dụ: lỗi nút bấm thì mở `Button.js`, lỗi ô nhập liệu thì mở `InputField.js`).
   - Mỗi file component ngắn gọn, tập trung từ 30-80 dòng code, giúp việc đọc hiểu mã nguồn nhanh chóng, giảm thiểu tối đa rủi ro sửa chỗ này làm hỏng chỗ khác (tính đóng gói cao).

3. **Thuận tiện cho việc mở rộng tính năng (Scalability):**
   - Dễ dàng nâng cấp các thuộc tính mới mà không làm vỡ các màn hình cũ. Ví dụ: khi muốn bổ sung tính năng trạng thái `loading` (hiển thị ActivityIndicator xoay tròn) hoặc `disabled` cho `Button`, ta chỉ cần thêm prop vào component `Button.js`. Tất cả các màn hình đang sử dụng nút này lập tức sở hữu tính năng mới mà không phải viết lại code.
   - Hỗ trợ xây dựng Design System (hệ thống thiết kế) nhất quán cho cả doanh nghiệp hoặc dự án lớn.

4. **Nâng cao hiệu quả làm việc nhóm và Kiểm thử (Teamwork & Testing):**
   - Các thành viên trong nhóm có thể phân chia công việc độc lập: một người làm `Header`, người làm `Card`, người làm `InputField` mà không bị xung đột mã nguồn khi ghép code (merge conflict).
   - Rất dễ viết Unit Test độc lập cho từng component để kiểm tra hành vi đầu vào (props) và kết quả hiển thị (render) tương ứng.

---

## Câu 4. Mối liên hệ giữa Props, State và Hooks trong giao diện nhập liệu
### Đề bài:
> Trình bày mối liên hệ giữa props, state và hooks khi xây dựng một giao diện có nhập liệu. Trong trường hợp tạo form đăng ký gồm tên, email và mật khẩu, dữ liệu nào nên được quản lý bằng state, dữ liệu nào có thể truyền qua props, và vì sao?

### Trả lời:

#### 1. Mối liên hệ chặt chẽ giữa Props, State và Hooks:
Ba khái niệm này kết hợp tạo thành vòng lặp vận hành hoàn chỉnh của một ứng dụng React Native:
- **`Hooks` (chủ đạo là `useState`):** Cung cấp khả năng khai báo và quản lý trạng thái động bên trong các Functional Component.
- **`State`:** Là dữ liệu nội bộ của component, có tính chất biến động theo tương tác của người dùng (gõ phím, bấm chọn). Mỗi khi `state` được cập nhật thông qua hàm setter do Hook cung cấp, React sẽ kích hoạt chu kỳ render lại giao diện tương ứng.
- **`Props`:** Đóng vai trò là "cây cầu vận chuyển" để component cha mang giá trị từ `state` cùng các hàm xử lý sự kiện (handlers/setters) chuyển tiếp xuống các component con.

```
       ┌────────────────────────────────────────────────────────┐
       │ Component Cha (Form Đăng Ký)                           │
       │  const [email, setEmail] = useState(''); (Hook)        │
       └──────────────┬───────────────────────────▲─────────────┘
                      │                           │
          Props truyền xuống                onChangeText
       (value, onChangeText,...)            kích hoạt setEmail
                      │                           │
       ┌──────────────▼───────────────────────────┴─────────────┐
       │ Component Con (InputField)                             │
       │  <TextInput value={props.value} ... />                 │
       └────────────────────────────────────────────────────────┘
```

#### 2. Phân loại dữ liệu trong Form đăng ký (Tên, Email, Mật khẩu):

##### A. Dữ liệu quản lý bằng `state` (State-driven):
- **Bao gồm:**
  - `fullName`: Chuỗi họ và tên người dùng đang nhập.
  - `email`: Chuỗi email người dùng đang nhập.
  - `password`: Chuỗi mật khẩu người dùng đang nhập.
  - `errors`: Đối tượng chứa thông báo lỗi xác thực (ví dụ: `emailError`, `passwordError`).
  - `isSubmitting` / `isLoading`: Trạng thái boolean kiểm soát khi form đang gửi dữ liệu lên server.
- **Vì sao:**
  - Đây là dữ liệu thay đổi liên tục theo từng lần gõ phím của người dùng.
  - Cần kích hoạt component re-render ngay lập tức để: hiển thị ký tự mới trên màn hình, bật/tắt nút Đăng ký, hiển thị hoặc ẩn các dòng cảnh báo lỗi màu đỏ theo thời gian thực.

##### B. Dữ liệu truyền qua `props` (Props-driven):
- **Bao gồm:**
  - Các thuộc tính cấu hình giao diện ô nhập: `placeholder` ("Nhập họ tên...", "Nhập email..."), `label` ("Họ và tên"), `icon` minh họa, `secureTextEntry={true}` (đối với ô mật khẩu), `keyboardType="email-address"`.
  - Giá trị hiện tại được trích xuất từ state của cha: `value={fullName}`.
  - Các hàm lắng nghe sự kiện: `onChangeText={(text) => setFullName(text)}`, hàm `onSubmit={handleSubmit}` truyền cho nút Đăng ký.
- **Vì sao:**
  - Các dữ liệu này được component cha quyết định và truyền vào component con (`InputField`, `SubmitButton`) để quy định cách component con hiển thị và hành xử. Component con không cần tự sở hữu hay sửa đổi các cấu hình này.

---

## Câu 5. Khái niệm Controlled Component và sự cần thiết của Form Validation
### Đề bài:
> Giải thích khái niệm controlled component với TextInput trong React Native. Vì sao khi xây dựng form nhập liệu cần quản lý giá trị ô nhập bằng state và thực hiện validate như kiểm tra rỗng, email có ký tự “@”, mật khẩu có độ dài tối thiểu?

### Trả lời:

#### 1. Khái niệm Controlled Component với TextInput:
- **Controlled Component** (Component được kiểm soát) là cơ chế mà trong đó giá trị dữ liệu hiển thị bên trong `TextInput` không được lưu trữ độc lập bởi chính hệ thống native của thiết bị, mà bị **kiểm soát hoàn toàn và trực tiếp bởi State của React**.
- Được thiết lập thông qua sự kết hợp của 2 thuộc tính bắt buộc:
  ```jsx
  const [email, setEmail] = useState('');

  <TextInput
    value={email}                // 1. Giá trị hiển thị luôn bằng state
    onChangeText={setEmail}      // 2. Khi gõ phím -> gọi hàm cập nhật state
  />
  ```
- **Nguyên lý hoạt động:**
  1. Người dùng gõ một ký tự vào ô nhập.
  2. Sự kiện `onChangeText` được kích hoạt và truyền chuỗi mới vào hàm setter (`setEmail`).
  3. Hook cập nhật lại biến `email` trong state.
  4. React tự động re-render component, truyền giá trị mới từ state vào thuộc tính `value` của `TextInput` để hiển thị trên màn hình.
  - Nhờ cơ chế này, State chính là **"Nguồn sự thật duy nhất" (Single Source of Truth)**.

#### 2. Vì sao cần quản lý giá trị ô nhập bằng State:
1. **Đồng bộ hóa dữ liệu tuyệt đối:** Giá trị trong giao diện và giá trị trong bộ nhớ ứng dụng luôn luôn ăn khớp 100%. Bất kỳ vị trí nào khác trên màn hình (dòng chữ xem trước, nút bấm gửi) đều đọc được dữ liệu mới nhất ngay lập tức.
2. **Khả năng can thiệp và chuẩn hóa tức thì:** Lập trình viên có thể lọc hoặc biến đổi dữ liệu trước khi lưu vào state, ví dụ: tự động viết hoa chữ cái đầu, tự động loại bỏ khoảng trắng thừa hoặc hạn chế chỉ cho nhập số.
3. **Tiện lợi khi gửi dữ liệu (Submit):** Khi người dùng nhấn nút Đăng ký, toàn bộ dữ liệu đã nằm sẵn trong các biến state, lập trình viên chỉ việc đóng gói gửi qua API mà không cần dùng `ref` hay truy xuất thủ công vào từng ô nhập.

#### 3. Vì sao phải thực hiện Validate (Kiểm tra dữ liệu đầu vào):
1. **Bảo đảm tính toàn vẹn và chính xác của dữ liệu:**
   - *Kiểm tra rỗng (Required fields):* Ngăn chặn người dùng bỏ quên các trường thông tin bắt buộc, tránh việc gửi dữ liệu trống rỗng lên hệ thống backend gây lỗi cơ sở dữ liệu (Database Constraint Violation).
   - *Kiểm tra ký tự "@" và định dạng email:* Đảm bảo địa chỉ liên lạc là hợp lệ, có thể gửi email xác thực tài khoản, kích hoạt mã OTP hoặc gửi hóa đơn điện tử thành công.
2. **Bảo mật hệ thống (Security):**
   - *Độ dài mật khẩu tối thiểu (ví dụ ≥ 6 hoặc 8 ký tự):* Ngăn chặn việc đặt mật khẩu quá ngắn hoặc quá đơn giản, giúp bảo vệ tài khoản người dùng trước các cuộc tấn công quét mật khẩu tự động (Brute-Force Attack, Dictionary Attack).
3. **Tối ưu hóa Trải nghiệm người dùng (UX - User Experience):**
   - Thông báo lỗi ngay tại chỗ giúp người dùng nhận biết sai sót tức thì và sửa lại dễ dàng, thay vì phải bấm nút gửi, chờ mạng gửi lên server rồi mới nhận về thông báo lỗi gây ức chế và tốn tài nguyên băng thông mạng.
