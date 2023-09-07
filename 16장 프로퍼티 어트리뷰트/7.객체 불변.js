const person = {
  name: "Jeon",
  address: { city: "seoul" },
};

function freeze(obj) {
  Object.keys(obj).forEach((key) =>
    typeof obj[key] === "object" ? freeze(obj[key]) : Object.freeze(obj)
  );
}
freeze(person);

console.log(Object.isFrozen(person.name));
console.log(Object.isFrozen(person.address.city));

person.name = "Jeon";
person.address.city = "busan";
console.log(person);

// 결과
// true
// true
// { name: 'Lee', address: { city: 'seoul' }}