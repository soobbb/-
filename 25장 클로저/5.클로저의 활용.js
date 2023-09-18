// // 카운트 상태 변수
// let num = 0;

// // 카운트 상태 변경 함수
// const increase = function () {
//   // 카운트 상태를 1만큼 증가시킨다.
//   return ++num;
// };

// console.log(increase());
// console.log(increase());
// console.log(increase());
// console.log(increase());
// 카운트 상태 변수

// 카운트 상태 변경 함수
const increase = (function () {
  // 카운트 상태 변수
    let num = 0;
    // 클로저
    return function () {
      // 카운터 상태를 1만큼 증가시킨다.
    return ++num;
  };
})();

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3
console.log(increase()); // 4
