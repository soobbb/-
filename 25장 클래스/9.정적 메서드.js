function Person(name) {
  this.name = name;
}
// 정적 메서드
Person.sayHi = function () {
  console.log("Hi!");
};
// 정적 메서드 호출
Person.sayHi();

class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }
  // 정적 메서드
  static sayHi() {
    console.log("Hi");
  }
}
