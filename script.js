let time = 18;
const timer = document.getElementById("timer");

const countdown = setInterval(() => {
  time--;
  timer.innerText = "Redirecting in " + time + "s";

  if (time <= 0) {
    clearInterval(countdown);
    window.location.href = "https://t.me/+ZKnGAfdlie42MzI1";
  }
}, 1000);
