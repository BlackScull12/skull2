function enterStore() {
  const drop = localStorage.getItem("dropDate");
  if (!drop || new Date(drop) > new Date()) {
    alert("Drop not live yet");
    return;
  }
  window.location.href = "store.html";
}

function updateCountdown() {
  const el = document.getElementById("countdown");
  const drop = localStorage.getItem("dropDate");

  if (!drop) {
    el.innerText = "NO DROP SET";
    return;
  }

  const diff = new Date(drop) - new Date();

  if (diff <= 0) {
    el.innerText = "DROP LIVE";
    return;
  }

  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  el.innerText = `DROP IN ${h}h ${m}m ${s}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
