const arr = [3, 4];

// unshift와 push 메서드는 인수로 전달받은 배열을 그대로 원본 배열의 요소에 추가한다.
arr.unshift([1, 2]);
arr.push([5, 6]);
console.log(arr); // [ [ 1, 2 ], 3, 4, [ 5, 6 ] ]

// concat 메서드는 인수로 전달받은 배열을 해체하여 새로운 배열의 요소로 추가한다.
let res = [1, 2].concat([3, 4]);
res = res.concat([5, 6]);

console.log(res);
