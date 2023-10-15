// 1부터 4까지 누적을 구한다.

const sum = [1, 2, 3, 4].reduce(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  0
);

console.log(sum.length);

const values = [1, 2, 3, 4, 5, 6];

const avg = values.reduce((acc, cur, i, { length }) => {
  return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);
console.log(avg);


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
