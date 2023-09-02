// 함수 선언문
function add(a, b) {
  return a + b;
}

// 함수 표현식
const subtract = function (a, b) {
  return a - b;
};

// 화살표 함수
const multiply = (a, b) => a * b;

//  Function 생성자 함수
const divide = new Function("a", "b", "return a / b");
