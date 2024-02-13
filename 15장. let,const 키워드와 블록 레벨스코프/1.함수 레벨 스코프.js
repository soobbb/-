var x = 1;

if (true) {
  // x는 전역 변수이다. 위에서 1을 선언 했는데 if문 안에서 x를 중복 선언을 하게되면
  // 의도치 않게 변수값이 변경되는 부작용이 발생한다.
  var x = 10;
}

console.log(x); // 10

function myFunction() {
  if (true) {
    var localVar = "지역 변수";
    console.log(localVar); // "지역 변수" 출력
  }
  var localVar = "지역 변수 변경!"
  console.log(localVar); // "지역 변수" 출력
}

myFunction();
// console.log(localVar); // 에러: localVar는 정의되지 않았습니다.
