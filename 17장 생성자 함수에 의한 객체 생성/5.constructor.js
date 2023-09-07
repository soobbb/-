// constructor
function foo() {}

const bar = function () {};

console.log(new foo()); // foo {}
console.log(new bar()); // bar {}


// non - constructor
const arrow = () => { };

console.log(new arrow()); // TypeError: arrow is not a constructor

