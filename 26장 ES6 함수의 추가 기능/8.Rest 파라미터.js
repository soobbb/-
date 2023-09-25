function foo(...rest) {
  // 매개변수 rest는 인수들의 목록을 배열로 전달받는 Rest 파라미터다.
  console.log(rest); // [1,2,3,4,5]
}
foo(1, 2, 3, 4, 5);

function foo2(param, ...rest) {
  // 매개변수 rest는 인수들의 목록을 배열로 전달받는 Rest 파라미터다.
  console.log(param);
  console.log(rest); // [1,2,3,4,5]
}
foo2(1, 2, 3, 4, 5);

// function foo3(...rest, param1) {
//   // 매개변수 rest는 인수들의 목록을 배열로 전달받는 Rest 파라미터다.
//   console.log(rest); // [1,2,3,4,5]
// }
// foo(1, 2, 3, 4, 5);
