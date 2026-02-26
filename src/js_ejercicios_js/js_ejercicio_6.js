let segundos = 0;
let intervalo = null;

function actualizar() {
  const h = String(Math.floor(segundos / 3600)).padStart(2, "0");
  const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
  const s = String(segundos % 60).padStart(2, "0");
  document.getElementById("tiempo").textContent = `${h}:${m}:${s}`;
}

document.getElementById("start").onclick = () => {
  if (intervalo) return;
  intervalo = setInterval(() => {
    segundos++;
    actualizar();
  }, 1000);
};

document.getElementById("pause").onclick = () => {
  clearInterval(intervalo);
  intervalo = null;
};

document.getElementById("reset").onclick = () => {
  segundos = 0;
  actualizar();
};
