var person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 'Jeon'
  name: "Jeon",
  // 프로퍼티 키는 age, 프로퍼티 값은 20
  age: 20,
};

var person1 = {
  firstname: "Soo-bin", // 네이밍 규칙 준수
  "last-name": "Jeon",  // 네이밍 규칙 미준수
};
console.log(person1);
