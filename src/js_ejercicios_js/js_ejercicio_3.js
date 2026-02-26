const input = document.getElementById("texto");
const lista = document.getElementById("lista");

document.getElementById("agregar").addEventListener("click", () => {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.onclick = () => li.remove();

  li.appendChild(btnEliminar);
  lista.appendChild(li);

  input.value = "";
});
