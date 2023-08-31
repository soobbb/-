// ES5
// let x = 1,
//   y = 2;

// const obj = {
//   x: x,
//   y: y,
// };
// console.log(obj); // {x:1, y:2}

// ES6
let x = 1,
  y = 2;

// 프로퍼티 축약 표현
const obj1 = { x, y };

console.log(obj); // {x:1, y:2}

// ES5
var obj = {
	name: "Lee",
	sayHi: function() {
		console.log("HI" + this.name);
	}
}

obj.sayHi(); // HI! LEE
// ES6
var obj = {
	name: "Lee",
	sayHi() {
		console.log("HI" + this.name);
	}
}

obj.sayHi(); // HI! LEE