let res = [1, 2].concat([3, 4]);
console.log(res);

// concat 메서드는 스프레드 문법으로 대체가능하다.
res = [...[1, 2], ...[3, 4]];
console.log(res);
