// 클래스 선언문
class Person1 {}

// 익명 클래스 표현식
const Person2 = class {};

// 기명 클래스 표현식
const person3 = class MyClass {};

// 클래스 선언문
class Person {
  // 생성자
  constructor(name) {
    this.name = name; // name 프로퍼티는 public이다.
  }
  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
  // 정적 메서드
  static sayHello() {
    console.log("Hello!");
  }
}
// 인스턴스 생성
const me = new Person("Jeon");

// 인스턴스의 프로퍼티 참조
console.log(me.name); //

// 프로토타입 메서드 호출
me.sayHi();

// 정적 메서드 호출
Person.sayHello();
