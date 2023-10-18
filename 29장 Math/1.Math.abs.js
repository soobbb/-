// console.log(Math.abs
console.log(Math.abs(-1)); // 1
console.log(Math.abs("1")); // 1
console.log(Math.abs("")); // 0
console.log(Math.abs([])); // 0 객체는 NaN을 반환하네?
console.log(Math.abs(null)); // 0
console.log(Math.abs(undefined)); // NaN
console.log(Math.abs({})); // NaN 배열은 0을 반환
console.log(Math.abs("string")); // NaN
console.log(Math.abs()); // NaN
