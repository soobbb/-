// 브라우저 환경에서 실행해보기 Sources를 보면 스코프안에 로컬, 클로저, 글로벌로 나와있음
let l0 = "l0";

function fn1() {
  function fn2() {
    function fn3() {
      let l3 = "l3";
      console.log(l0, l1, l2, l3);
    }
    let l2 = "l2";
    console.log(l0, l1, l2);
    fn3();
  }
  let l1 = "l1";
  console.log(l0, l1);
  fn2();
}
fn1();
