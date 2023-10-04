const arr1 = [3, 4];

// unshift 메서드는 원본 배열을 직접 변경한다.
// 따라서 원본 배열을 변수에 저장해 두지 않으면 배열을 사용할 수 없다.
arr1.unshift(1, 2); // [ 1, 2, 3, 4 ]
// unshift 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해야 결과를 확인할 수 있다.
console.log(arr1);

// push 메서드는 원본 배열을 직접 변경한다.
// 따라서 원본 배열을 변수에 저장해 두지 않으면 배열을 사용할 수 없다.
arr1.push(5, 6);
// push 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해야 결과를 확인할 수 있다.
console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]

// unshift와 push 메서드는 concat 메서드 대체할 수 있다.
const arr2 = [3, 4];

// concat 메서드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다.
// arr1.unshift(1,2) 다음과 같이 대체할 수 있다.
let res = [1, 2].concat(arr2);
console.log(res); // [ 1, 2, 3, 4 ]

// arr1.push(5,6)를 다음과 같이 대체할 수 있다.
res = res.concat(5, 6);
console.log(res); // [ 1, 2, 3, 4, 5, 6 ]
