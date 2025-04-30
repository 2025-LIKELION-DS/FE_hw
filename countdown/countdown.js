function timecul() {
  const content = document.getElementById("content");
  const now = new Date();
  const open = new Date();
  open.setHours(7, 0, 0, 0);

  const close = new Date();
  close.setHours(23, 0, 0, 0);
  const mid = new Date();
  mid.setHours(24, 0, 0, 0);

  //오픈, 마감 시간 설정 끝
  let Time;

  if (now >= close && now < mid) {
    content.textContent = "금일 마감";
    return;
  } else if (now >= open && now < close) {
    Time = close - now;
    const hours = Math.floor(Time / (1000 * 60 * 60));
    const minutes = Math.floor((Time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((Time % (1000 * 60)) / 1000);
    content.textContent = `금일 마감까지 남은 시간: ${hours}시간 ${minutes}분 ${seconds}초`;
  } else if (now < open && mid >= now) {
    Time = open - now;
    const hours = Math.floor(Time / (1000 * 60 * 60));
    const minutes = Math.floor((Time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((Time % (1000 * 60)) / 1000);
    content.textContent = `금일 오픈까지 남은 시간: ${hours}시간 ${minutes}분 ${seconds}초`;
  }
}
window.onload = () => {
  timecul();
};
