// 함수 참조
console.dir(add); // f add(x,y);
console.dir(sub); // undefined

// 함수 호출
console.log(add); // 7
console.log(sub); // TypeError: sub is not a function

// 함수 선언문
function add(x, y) {
    return x + y;
}

// 함수 표현식
var sub = function (x, y) {
    return x - y;
}