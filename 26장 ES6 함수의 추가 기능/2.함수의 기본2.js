var foo = function () {};

// ES6 이전의 모든 함수는 callable이면서 constructor이다.
foo(); // undefined
new foo(); // foo{}
