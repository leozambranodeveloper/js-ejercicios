document.getElementById("generar").addEventListener("click", () => {
  const len = parseInt(document.getElementById("longitud").value);
  const salida = document.getElementById("resultado");

  if (isNaN(len) || len < 4) {
    salida.textContent = "La longitud debe ser mayor o igual a 4";
    return;
  }

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let pass = "";

  for (let i = 0; i < len; i++) {
    pass += chars[Math.floor(Math.random() * chars.length)];
  }

  salida.textContent = pass;
});
