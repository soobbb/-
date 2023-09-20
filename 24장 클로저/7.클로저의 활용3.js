// 함수를 인수로 전달받고 함술르 반환하는 고차 함수
// 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를
// 기억하는 클로저를 반환한다.

function makeCounter(aux) {
  // 카운트 상태를 유지하기 위한 자유 변수
  let counter = 0;

  // 클로저를 반환
  return function () {
    // 인수로 전달받은 보조 함수에 상태 변경을 위임한다.
    counter = aux(counter);
    return counter;
  };
}

// 보조 함수
function increase(n) {
  return ++n;
}
function decrease(n) {
  return --n;
}

// 함수로 함수를 생성한다.
// makeCounter 함수는 보조 함수를 인수로 전달받아 함수를 반환한다.

const increaseer = makeCounter(increase);
console.log(increaseer()); // 1
console.log(increaseer()); // 2

const decreaseer = makeCounter(decrease);
console.log(decreaseer()); // -1
console.log(decreaseer()); // -2
