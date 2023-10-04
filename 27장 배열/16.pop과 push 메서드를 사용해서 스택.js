const Stack = (function () {
  function Stack(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.array = array;
  }
  Stack.prototype = {
    // 프로토 타입 교체
    constructor: Stack,
    // 스택의 가장 마지막에 데이터를 넣는다.
    push(value) {
      return this.array.push(value);
    },
    // 스택의 가장 마지막 데이터, 즉 가장 나중에 밀어 넣은 최신 데이터를 꺼낸다.
    pop() {
      return this.array.pop();
    },
    // 스택의 복사본 배열을 반환한다.
    entrise() {
      return [...this.array];
    },
  };
  return Stack;
})();

const stack = new Stack([1, 2]);
console.log(stack.entrise()); // [ 1, 2 ]

stack.push(3)
console.log(stack.entrise()) // [ 1, 2, 3 ]

stack.pop();
console.log(stack.entrise()) // [ 1, 2 ]