const countdownEl = document.getElementById("countdown");
const enterBtn = document.getElementById("enterBtn");
const adminBubble = document.getElementById("adminBubble");

function checkDrop() {
  const dropDate = localStorage.getItem("dropDate");
  if (!dropDate) {
    countdownEl.innerText = "DROP DATE NOT SET";
    return;
  }

  const now = new Date().getTime();
  const dropTime = new Date(dropDate).getTime();
  const diff = dropTime - now;

  if (diff <= 0) {
    countdownEl.innerText = "DROP LIVE";
    enterBtn.classList.remove("disabled");
    enterBtn.href = "store.html";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  countdownEl.innerText = `${d}d ${h}h ${m}m ${s}s`;
}

setInterval(checkDrop, 1000);
checkDrop();

adminBubble.onclick = () => {
  const pass = prompt("Admin password:");
  if (pass === "admin123") {
    window.location.href = "admin.html";
  } else {
    alert("Wrong password");
  }
};
