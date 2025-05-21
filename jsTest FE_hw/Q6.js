// X

//Q. 좋아요 버튼 클릭 시 숫자가 1씩 증가하도록 합니다.

let count = 0; //count변수 초기화 (좋아요 횟수 저장!)

const button = document.querySelector("#likeBtn"); //버튼 변수; (querySelector) css선택자 방식(DOM 메서드), 하나만 선택; #likeBtn 은 찾고 싶은 요소(id값)
const display = document.querySelector("#likeCount"); //display 변수; likeCount 요소 찾아서 그 안의 값을 display에 저장한다.; 좋아요 숫자를 화면에 보여줄 요소소

//화살표 함수 사용해서 button 클릭하면 좋아요 수 늘어나도록
button.addEventListener("click", () => {
  // (addeventListener) 콜백함수 add라서 값이 "추가"됨
  count++; //위에서 0으로 초기화한 count 값 ++
  display.textContent = count; //화면에서 숫자가 올라가는것이 출력되어야함. ; (textContent)html내용 제어하는 Dom메서드, 요소안의 텍스트 읽기,쓰기(변경 가능)
}); //화면에서 보여질(변수).html 제어 메서드 = 변화할 변수;

/* 콜백함수 정의 안 하고 바로 사용
document.getElementById("likeBtn").addEventListener("click", (매개변수 자리 e) => ____ });
매개변수 자리에 event 를 넣으면 정보 제어 가능 (event) console.log(event.__) */
