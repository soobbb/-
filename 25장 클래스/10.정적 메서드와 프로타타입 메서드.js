class Square {
  // 정적 메서드
  static area(width, height) {
    return width * height;
  }
}

console.log(Square.area(10, 10));

//-------------------------------------------------
class Square1 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  // 프로토타입 메서드
  area() {
    return this.width * this.height;
  }
}

const square = new Square1(10, 10);
console.log(square.area());

// 메서드 내부의 this는 메서드를 소유한 객체가 아니라 메서드를 호출한
// 객체, 즉 메서드 이름 앞의 마침표(.) 연산자 앞에 기술한 객체에 바인딩된다.
