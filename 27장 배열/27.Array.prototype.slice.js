const arr = [1, 2, 3];

// arr[0]부터 arr[1] 이전(arr[1] 미포함)까지 복사하여 반환한다.
arr.slice(0, 1);
// arr[1]부터 arr[2] 이전(arr[2] 미포함)까지 복사하여 반환한다.
arr.slice(1, 2);

// 원본은 변경되지 않는다.
console.log(arr); // [ 1, 2, 3 ]

console.log(arr.slice(1)); // [2,3]
console.log(arr.slice(-1)); // [3] 배열 끝에서 한 개 복사

const copy = arr.slice();
console.log(copy);
console.log(copy === arr); // 얕은 복사라 false
