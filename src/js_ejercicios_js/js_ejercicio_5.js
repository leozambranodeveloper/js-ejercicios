const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const resultado = document.getElementById("resultado");

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const a = parseFloat(n1.value);
    const b = parseFloat(n2.value);

    if (isNaN(a) || isNaN(b)) {
      resultado.textContent = "Introduce números válidos";
      return;
    }

    let r;
    switch (btn.dataset.op) {
      case "sumar": r = a + b; break;
      case "restar": r = a - b; break;
      case "multiplicar": r = a * b; break;
      case "dividir":
        if (b === 0) return resultado.textContent = "No se puede dividir por cero";
        r = a / b;
        break;
    }

    resultado.textContent = "Resultado: " + r;
  });
});
