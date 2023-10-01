const arr = [1];

// push 메서드는 원본 배열을 직접 변경한다.
arr.push(2);
console.log(arr); // [1, 2]

// concat 메서드는 원본 배열을 직접 변경하지 않고 새로운 배열을 생성한다.
const res = arr.concat(3);
console.log(arr); // [1, 2]
console.log(res); // [1, 2, 3]
