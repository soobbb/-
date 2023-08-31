var person = {
  name: "Jeon",
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}`);
  },
};

console.log(typeof person);
console.log(person);
