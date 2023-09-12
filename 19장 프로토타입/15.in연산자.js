const person = {
  name: "Jeon",
  address: "Seoul",
};

// person 객체에 name 프로퍼티가 존재한다.
console.log("name" in person); // true
// person 객체 address 프로퍼티 존재한다.
console.log("address" in person); // true
// person 객체 age 프로퍼티가 존재하지 않는다.
console.log("age" in person); // false

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("age")); // false
