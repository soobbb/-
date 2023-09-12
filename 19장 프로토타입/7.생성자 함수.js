function Person(name) {
    this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function () {
    console.log(`HI! My name is ${this.name}`);
}

const me = new Person("Jeon");
const you = new Person("Kim");

me.sayHello(); // HI! My name is Jeon
you.sayHello(); // HI! My name is Kim
