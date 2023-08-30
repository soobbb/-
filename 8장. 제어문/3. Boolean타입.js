// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 불리언 타입
Boolean("x") // true
Boolean("") // false
// 숫자 타입 => 불리언 타입
Boolean(0) // false
Boolean(1) // true

// 2. !부정 논리 연산자 두 번 사용 방법
// 문자열 타입
!!'x'; // true
!!''; // false
// 숫자 타입
!!0; // false
!!1; // true
