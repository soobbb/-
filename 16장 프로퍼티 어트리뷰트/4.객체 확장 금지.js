const person = { name: "Jeon" };
console.log(Object.isExtensible(person));

Object.preventExtensions(person);
console.log(Object.isExtensible(person));

person.job = "programmer";
console.log(person);

// 결과
true;
false;
{
  name: "Jeon";
}
