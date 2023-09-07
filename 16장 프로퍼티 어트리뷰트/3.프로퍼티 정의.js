const person = {};

Object.defineProperty(person, "year", {
  value: 2023,
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person, "age", {
  value: "30",
});

let descriptor = Object.getOwnPropertyDescriptor(person, "year");
console.log("year", descriptor);


descriptor = Object.getOwnPropertyDescriptor(person, 'age');
console.log('age', descriptor);

// 결과 
// year { value: 2023, writable: true, enumerable: true, configurable: true }
// age {
//   value: '30',
//   writable: false,
//   enumerable: false,
//   configurable: false
// }