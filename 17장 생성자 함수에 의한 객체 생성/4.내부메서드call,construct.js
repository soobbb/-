function foo() {}
// 일반적으로 함수로서 호출: [[Call]]이 호출
foo();

// 생성자 함수로서 호출: [[Construct]]이 호출
new foo();
