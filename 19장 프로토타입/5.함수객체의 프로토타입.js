// 생성자 함수
function Person(name) {
  this.name = name;
}
const me = new Person("Jeon");

// 결국 Person.prototype 과 me.__proto__는 결국 동일한 프로토타입을 가리킨다.
console.log(Person.prototype === me.__proto__);
console.log(me.constructor === Person);
