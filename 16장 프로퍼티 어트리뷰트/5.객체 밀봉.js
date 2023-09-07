const person = { name: "Jeon" };
console.log(Object.isSealed(person));

Object.seal(person);
console.log(Object.isSealed(person));

delete person.name;
console.log(person);

person.name = "KIM";
console.log(person);

// 결과
false;
true;
{
  name: "Jeon";
}
{
  name: "kim";
}
