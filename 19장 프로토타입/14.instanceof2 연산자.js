// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person("Jeon");

// 프로토타입으로 교체할 객체
const parent = {}

// 프로토타입 교체
Object.setPrototypeOf(me, parent);

console.log(me instanceof Person); // false
console.log(me instanceof Object); // true
