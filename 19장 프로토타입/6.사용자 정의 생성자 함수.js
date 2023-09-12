// 함수 정의(constructor)가 평가되어 함수 객체를 생성하는 시점에
// 프로토타입도 더불어 생성된다.

console.log(Person.prototype); // {constructor}

// 생성자 함수
function Person(name) {
  this.name = name;
}

// 화살표 함수는 non-constructor다.
const Person1 = (name) => {
  this.name = name;
};
console.log(Person1.prototype); // undefined
