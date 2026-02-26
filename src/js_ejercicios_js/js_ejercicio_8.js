const area = document.getElementById("texto");
const chars = document.getElementById("caracteres");
const words = document.getElementById("palabras");

area.addEventListener("input", () => {
  const texto = area.value;

  const sinEspacios = texto.replace(/\s/g, "");
  chars.textContent = "Caracteres: " + sinEspacios.length;

  const listaPalabras = texto.trim().split(/\s+/).filter(p => p.length > 0);
  words.textContent = "Palabras: " + listaPalabras.length;
});
