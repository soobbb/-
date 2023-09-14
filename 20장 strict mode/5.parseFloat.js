// 문자열을 실수로 해석하여 반환한다.
console.log(parseFloat(3.14)); // 3.14

// 공백으로 구분된 문자열은 첫 번째 문자열만 반환한다.
console.log(parseFloat("34 45 66"));
console.log(parseFloat("40 years"));

// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다.
console.log(parseFloat("He was 40"));

// 앞뒤 공백은 무시된다.
console.log(parseFloat(" 60 "));