const formulario = document.getElementById('formulario');
const lista = document.getElementById('lista');
const contenido = document.getElementById('contenido');
const btnContenido = document.getElementById('btnContenido');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    let comida = document.getElementById('comida');
    if (comida.value !== "") {
        addElemtToList(comida.value);
    } else {
        alert("Ingrese un alimento");
    }
});

function addElemtToList(texto) {
    let elem = document.createElement('li');
    let conten = document.createTextNode(texto);
    elem.appendChild(conten);
    lista.appendChild(elem);
}

contenido.addEventListener('mouseover', function () {
    contenido.style.backgroundColor = '#f9c2f6';
});

contenido.addEventListener('mouseout', function () {
    contenido.style.backgroundColor = "#c2f7f9";
});

btnContenido.addEventListener('click', () => {
    if (contenido.className === "mostrar") {
        contenido.className = "ocultar";
        btnContenido.textContent = "Mostrar contenido";
    } else if (contenido.className === "ocultar") {
        contenido.className = "mostrar";
        btnContenido.textContent = "Ocultar contenido";
    }


})