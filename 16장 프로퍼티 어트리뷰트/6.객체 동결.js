const person = { name: "Jeon" };
console.log(Object.isFrozen(person));

Object.freeze(person);
console.log(Object.isFrozen(person));

delete person.name;
console.log(person);

person.name = "kim";
console.log(person);

console.log(Object.getOwnPropertyDescriptors(person));

// 결과
// false
// true
// { name: 'Jeon' }
// { name: 'Jeon' }
// {
//   name: {
//     value: 'Jeon',
//     writable: false,
//     enumerable: true,
//     configurable: false
//   }
// }