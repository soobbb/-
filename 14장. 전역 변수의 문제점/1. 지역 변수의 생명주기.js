function foo() {
  var x = "local";
  console.log(x); // local
  return x;
}

foo();
console.log(x); // ReferenceError: x is not defined

var x = "global";

function foo1() {
  console.log(x); // 
  return x;
}

foo1();
console.log(x); // global
