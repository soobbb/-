const arr = [1, 2];

// 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 변환한다.
let res = arr.pop();
console.log(res); // 2

// pop 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [ 1 ]
