// 빈 객체 생성
const person = new Object();

// 프로퍼티 추가
person.name = "Jeon";
person.sayHello = function () {
  console.log("HI! My name is " + this.name);
};

console.log(person); // { name: 'Jeon', sayHello: [Function (anonymous)] }
person.sayHello(); // HI! My name is Jeon


// String 생성자 함수에 의한 String 객체 생성
const strObj = new String("Jeon");
console.log(typeof strObj)
console.log(strObj);

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1,2,3);
console.log(typeof arr);
console.log(arr);

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof date)
console.log(date);