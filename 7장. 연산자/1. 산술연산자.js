var x = 1, res;

res = x++;
console.log(res, x); // 1, 2

res = ++x;
console.log(res, x); // 2, 2

res = x--;
console.log(res, x); // 1, 0

res = --x;
console.log(res, x); // 0, 0