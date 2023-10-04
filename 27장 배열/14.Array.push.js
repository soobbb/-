const arr = [1, 2];

let res = arr.push(3, 4);
console.log(res); // 4

console.log(arr); // [ 1, 2, 3, 4 ]

const arr1 = [1, 2];

arr1[arr1.length] = 3;
console.log(arr1); // [1,2,3]
