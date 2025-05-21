function delayLog(num) {
  //delayLog에 1이 반환되기 때문에 num
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(num);
      resolve();
    }, 1000); //1초 간격이므로 1000
  });
}

delayLog(1) //.than을 사용해 순차적으로 실행되게
  .then(() => delayLog(2))
  .then(() => delayLog(3))
  .catch((error) => console.error(error));
