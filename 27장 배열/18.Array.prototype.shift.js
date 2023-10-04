const arr = [1, 2];

// 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다.
let res = arr.shift();
console.log(res); // 1

// shift 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [2]
