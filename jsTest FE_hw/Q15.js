/*Q. 조건에 맞춰 함수를 선언하고 alert창을 띄워주세요
조건 1 : 이름과 나이, "안녕, (나이)살 (이름) !!"를 출력하는 함수를 키(key)로 갖는 객체 person을 선언해주세요.
조건 2 : 입력창을 띄워 나이와 이름을 각각 받아주세요.
조건 3 : 알림창을 통해 함수에 있는 문자열을 출력해주세요.
*/

let myName = prompt("이름을 입력하세요."); //이름을 입력받는 prompt 창을 띄우고, 입력값을 myName 변수에 저장
let age = prompt("나이를 입력하세요."); //나이를 입력받는 prompt 창을 띄우고, 입력값을 age 변수에 저장

let person = {
  //person 객체 선언
  greeting: function () {
    // greeting이라는 key에 함수 값을 할당한다.
    return `안녕, ${age}살 ${myName}!!`;
  },
};
alert(person.greeting()); //함수를 알림창으로 출력
