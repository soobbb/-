const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 },
];

// 프로퍼티 값을 합산
const priceSum = products.reduce(function (pre, cur) {
  console.log(pre, cur.price);
  return pre + cur.price;
});

console.log(priceSum); // 600
