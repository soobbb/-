// 세율을 의미하는 0.1은 변경할 수 없는 상수
// 변수 이름을 대문자 + 언더스코어 사용
const TAX_RATE = 0.1;

// 세전 가격
let preTaxPrice = 100;

// 세후 가격
let afterTaxPrice = preTaxPrice + preTaxPrice * TAX_RATE;

console.log(afterTaxPrice); // 110
