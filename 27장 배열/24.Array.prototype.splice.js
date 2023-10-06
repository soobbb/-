const arr = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에
// 새로운 요소 20, 30을 삽입한다.

const res = arr.splice(1, 2, 20, 30);

// 제거 요소가 배열로 반환된다.
console.log(res); // [2,3]
// splice 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [ 1, 20, 30, 4 ]

const arr1 = [1, 2, 3, 4];
// 원본 배열의 인덱스 1부터 2개의 요소를 제거한다.
const res1 = arr1.splice(1, 2);

// 원본 배열이 변경
console.log(arr1); // [ 1, 4 ]

// 제거한 요소가 배열로 리턴
console.log(res1); // [ 2, 3 ]
