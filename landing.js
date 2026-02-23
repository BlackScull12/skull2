const countdown = document.getElementById("countdown");
const timeEl = document.getElementById("time");
const enterBtn = document.getElementById("enterBtn");

const dropDate = localStorage.getItem("dropDate");

function dropLive() {
  if (!dropDate) return true;
  return new Date() >= new Date(dropDate);
}

function startCountdown() {
  countdown.classList.remove("hidden");

  setInterval(() => {
    const diff = new Date(dropDate) - new Date();

    if (diff <= 0) {
      countdown.classList.add("hidden");
      enterBtn.classList.remove("hidden");
      return;
    }

    const h = Math.floor(diff / 1000 / 60 / 60);
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    timeEl.textContent = `${h}H ${m}M ${s}S`;
  }, 1000);
}

if (dropLive()) {
  enterBtn.classList.remove("hidden");
} else {
  startCountdown();
}
