const input = document.getElementById("busqueda");
const items = document.querySelectorAll("#lista li");

input.addEventListener("input", () => {
  const texto = input.value.toLowerCase();

  items.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(texto)
      ? "list-item"
      : "none";
  });
});
