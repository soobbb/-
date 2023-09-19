function Person(name, age) {
    this.name = name; // public
    let _age = age; // private

    // 인스턴스 메서드
    this.sayHi = function () {
        console.log(`Hi! My name is ${this.name}. I am ${_age}`)

    }
}

const me = new Person("Jeon", 30); // Hi! My name is Jeon. I am 30
me.sayHi()
console.log(me.name) // Jeon
console.log(me._age); // undefined


const you = new Person("Kim", 31); // Hi! My name is Kim. I am 31
you.sayHi()
console.log(you.name); // Kim
console.log(you._age); // undefined