const arr = [1, 2, 3];

// 인수로 전달받은 값 0을 배열의 처음부터 끝까지 요소를 채운다.
arr.fill(0);

// fill 메서드는 원본 배열을 직접 변경한다.
console.log(arr);

const arr1 = new Array(3)
console.log(arr1) // [ <3 empty items> ]

// 인수로 전달받은 값 1을 배열의 처음부터 끝까지 요소로 채운다.
const res = arr.fill(1)

// fill 메서드는 원본 배열을 직접 변경한다.
console.log(res) // [1,1,1]

//  fill 메서드는 원본 배열을 직접 반환한다.
console.log(res) // [1,1,1]