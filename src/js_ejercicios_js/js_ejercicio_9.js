const input = document.getElementById("tarea");
const lista = document.getElementById("lista");

function cargar() {
  const datos = JSON.parse(localStorage.getItem("tareas")) || [];
  lista.innerHTML = "";
  datos.forEach(t => agregarTarea(t.texto, t.completada));
}

function guardar() {
  const tareas = [...lista.children].map(li => ({
    texto: li.querySelector("span").textContent,
    completada: li.querySelector("input").checked
  }));
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function agregarTarea(texto, completada = false) {
  const li = document.createElement("li");

  const check = document.createElement("input");
  check.type = "checkbox";
  check.checked = completada;
  check.onchange = guardar;

  const span = document.createElement("span");
  span.textContent = texto;

  li.appendChild(check);
  li.appendChild(span);
  lista.appendChild(li);
}

document.getElementById("agregar").onclick = () => {
  if (input.value.trim() === "") return;
  agregarTarea(input.value);
  guardar();
  input.value = "";
};

document.getElementById("limpiar").onclick = () => {
  [...lista.children].forEach(li => {
    if (li.querySelector("input").checked) li.remove();
  });
  guardar();
};

cargar();
