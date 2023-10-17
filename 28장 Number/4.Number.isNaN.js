// 인수가 NaN이면 true를 반환한다.
Number.isNaN(Nan); // true


// Number.isNaN 인수를 숫자로 암묵적 타입으로 변환하지 않는다.
Number.isNaN(undefined); // false
