const API_URL = "https://YOUR_BACKEND_URL";

const cd = document.getElementById("countdown");
const enter = document.getElementById("enter");

async function tick() {
  const drop = await fetch(`${API_URL}/api/drop`).then(r => r.json());

  if (!drop) {
    cd.innerText = "DROP NOT SET";
    return;
  }

  const diff = new Date(drop.date) - new Date();

  if (diff <= 0) {
    cd.innerText = "DROP LIVE";
    enter.classList.remove("disabled");
    enter.href = "./store.html";
    return;
  }

  cd.innerText = Math.floor(diff / 1000) + "s";
}

setInterval(tick, 1000);
tick();
