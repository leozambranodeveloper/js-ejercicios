let contador = 0;

document.getElementById("btnContar").addEventListener("click", () => {
  contador++;
  document.getElementById("contador").textContent = `Clics: ${contador}`;
});
