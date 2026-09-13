const products = [
  {
    id: 'SP01',
    name: 'Laptop',
    price: 15000000,
    inStock: true,
  },
  {
    id: 'SP02',
    name: 'Chuột không dây',
    price: 350000,
    inStock: true,
  },
  {
    id: 'SP03',
    name: 'Bàn phím cơ',
    price: 1200000,
    inStock: false,
  },
  {
    id: 'SP04',
    name: 'Màn hình',
    price: 4500000,
    inStock: true,
  },
  {
    id: 'SP05',
    name: 'Tai nghe',
    price: 800000,
    inStock: false,
  },
];

// 1. Lấy danh sách tên sản phẩm bằng map()
const productNames = products.map((product) => product.name);

// 2. Lọc các sản phẩm còn hàng bằng filter()
const availableProducts = products.filter((product) => product.inStock);

// 3. Tính tổng giá trị sản phẩm bằng reduce()
const totalPrice = products.reduce(
  (total, product) => total + product.price,
  0,
);

console.log('Danh sách tên sản phẩm:');
console.log(productNames);

console.log('\nCác sản phẩm còn hàng:');
console.log(availableProducts);

console.log('\nTổng giá trị sản phẩm:');
console.log(totalPrice);
