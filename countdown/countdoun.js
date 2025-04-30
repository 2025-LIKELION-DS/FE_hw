const statusText = document.getElementById("status");
const countdownText = document.getElementById("countdown");

const openTime = new Date();
openTime.setHours(14, 25, 0, 0);

const closeTime = new Date();
closeTime.setHours(14, 30, 0, 0);

function updateCountdown() {
  const now = new Date();

  if (now < openTime) {
    statusText.textContent = "금일 오픈까지 남은 시간";
    showTimeDifference(openTime - now);
  } else if (now >= openTime && now <= closeTime) {
    statusText.textContent = "금일 마감까지 남은 시간";
    showTimeDifference(closeTime - now);
  } else {
    statusText.textContent = "금일 마감";
    countdownText.textContent = "";
  }
}

function showTimeDifference(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  countdownText.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
