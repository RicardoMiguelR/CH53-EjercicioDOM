let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.querySelector("#encabezado2");
let listas = document.getElementsByTagName("ul");
let elementos = document.getElementsByClassName("list-group-item");
let otroElemento = document.querySelector("ul>li");
let otrosElementos = document.querySelectorAll("ul>li");
let btnMostrar = document.getElementById("btnMostrar");
let btnMostrar2 = document.getElementById("btnMostrar2");
let txtRFC = document.getElementById("txtRFC");
let txtTelefono = document.getElementById("txtTelefono");
let txtCURP = document.getElementById("txtCURP");

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

// Cuando se terminan de cargar lo elementos la pagina
window.addEventListener("load", (e) => {
  console.log("Se termino de cargar la pagina");
});

// Funcion para convertir a toUpperCase()
const txtToUpper = (e) => {
  e.preventDefault();
  e.target.value = e.target.value.trim().toUpperCase();
};

// Funcion para cortar hasta 10 caractereres
const telefonoSlice = (e) => {
  e.preventDefault();
  e.target.value = e.target.value.slice(0, 10);
};

txtRFC.addEventListener("blur", txtToUpper);
txtCURP.addEventListener("blur", txtToUpper);
txtTelefono.addEventListener("blur", telefonoSlice);

// // blur - cuando se sale del campo
// txtRFC.addEventListener("blur", (e) => {
//   e.preventDefault()
//   // txtRFC.value = txtRFC.value.toUpperCase()
// })

// txtTelefono.addEventListener("blur", (e) => {
//   e.preventDefault()
//   txtTelefono.value = txtTelefono.value.slice(0, 10)
// })

// txtCURP.addEventListener("blur", (e) => {
//   e.preventDefault()
//   txtCURP.value = txtCURP.value.toUpperCase()
// })
