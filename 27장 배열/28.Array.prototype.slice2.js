const todos = [
  { id: 1, content: "HTML" },
  { id: 2, content: "CSS" },
  { id: 3, content: "JS" },
];

// 얕은 복사
const _todos = todos.slice();
// const _todos = [...todos];

// _todos와 todos는 참조 값이 다른 별개의 객체
console.log(_todos === todos); // false

// 배열 요소의 참조값이 같다. 즉, 얕은 복사
console.log(_todos[0] === todos[0]); // true

