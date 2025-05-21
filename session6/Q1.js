/* function fetchData(callback) {
    setTimeout(() => {
        console.log("1단계 완료");
        callback();
    }, 1000);
}

fetchData(() => {
  setTimeout(() => {
    console.log("2단계 완료");
  }, 1000);
});   //이 코드는 콜백 지옥 구조. setTimeout으로 비동기 작업을 처리하는 콜백 함수가 중첩되어 가독성이 떨어짐*/

//Promise 리팩토링을 통해 해결하기

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1단계 완료");
      resolve();
    }, 1000);
  });
}

function fetchNext() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2단계 완료");
      resolve();
    }, 1000);
  });
}

fetchData;
