let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.querySelector("#encabezado2");
let listas = document.getElementsByTagName("ul");
let elementos = document.getElementsByClassName("list-group-item");
let otroElemento = document.querySelector("ul>li");
let otrosElementos = document.querySelectorAll("ul>li");
let btnMostrar = document.getElementById("btnMostrar");
let btnMostrar2 = document.getElementById("btnMostrar2");

console.log(listas.length);
console.log(listas[0]);
console.log(listas.item(1));
console.log(elementos.item(2));
console.log(elementos.length);
console.log("Otro elemento: ", otroElemento);
console.log("Otros elementos: ", otrosElementos);

function cambiar() {
  // encabezado1.innerText = "Encabezado #1";
  encabezado1.innerHTML = "<h2>Cambio de texto</h2>";
  encabezado2.innerText = "DOM exercise";
}

btnMostrar.addEventListener("click", (e) => {
  console.log("Boton btnModificar presionado");
});

const handleEvent = (e) => {
  e.preventDefault();
  console.log("Boton btnModificar2 presionado");
};

btnMostrar2.addEventListener("click", handleEvent);
