// X

/* Q. 삼항연산자를 사용해 isLogin 값에 따라 다른 내용을 담은 알람창 띄우기 
const isLogin = true; => 환영합니다! alert창
const isLogin = false; => 접근 권한이 없습니다.
*/

/* 삼항연산자
(변수선언자) (연산자의 결과값을 저장하기 위한 변수) = (조건문) ? true할때 출력할 값 : false할 때 출력할 값; 
*/

let isLogin = true; //true, fales 값은 이 구문을 통해 구별
let msg = isLogin ? "환영합니다!" : "접근 권한이 없습니다."; //삼항연산식의 문자열이 msg 변수에 저장됨
alert(msg); //msg에 저장된 문자열을 alert창을 통해 출력
