const x = 1;

function foo() {
  const x = 10;
  bar();
  console.log(x);
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1
