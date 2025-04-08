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

const handleEventList = (e) => {
  e.preventDefault();
  let element = document.createElement("li");
  element.innerText = "Lista creada";
  element.classList.add("list-group-item");
  let element2 = element.cloneNode(true);

  // listas.item(0).before(element2)
  // listas.item(0).prepend(element)
  // listas.item(0).append(element);
  // listas.item(0).after(element2);

  // listas.item(1).insertAdjacentElement("afterbegin", element)
  // listas.item(1).insertAdjacentElement("beforeend", element2)

  listas
    .item(1)
    .insertAdjacentHTML(
      "beforebegin",
      `<li class="list-group-item">Before begin item</li>`
    );
  listas
    .item(1)
    .insertAdjacentHTML(
      "afterend",
      `<li class="list-group-item">After end item</li>`
    );
  listas
    .item(1)
    .insertAdjacentHTML(
      "afterbegin",
      `<li class="list-group-item">After begin item</li>`
    );
  listas
    .item(1)
    .insertAdjacentHTML(
      "beforeend",
      `<li class="list-group-item">Before end item</li>`
    );
};

btnMostrar2.addEventListener("click", handleEventList);
