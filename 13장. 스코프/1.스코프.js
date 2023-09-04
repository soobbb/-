function add(x, y) {
  // 매개변수의 스코프는 함수 몸체 내부다.
  console.log(x, y);
  return x + y;
}

add(2, 5);

// 매개변수는 함수 몸체 내부에서만 참조가능하다

console.log(x, y); // ReferenceError: x is not defined

var x = "global";

function foo() {
  var x = "local";
  console.log(x);
}

foo();

console.log(x);
