let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let x2 = document.getElementById('x2');
let x1 = document.getElementById('x1');
let ingresar = document.getElementById('ingresar');
let ingresarx2 = document.getElementById('ingresarx2');

const estiloSelector = document.getElementById('estiloSelector');
const botonGuardar = document.getElementById('guardarEstilo');
const estiloscss = document.getElementById('estiloscss')

function ejercicio() {
    console.log("This is a test");
    numeroa = parseFloat(a.value);
    numerob = parseFloat(b.value);
    numeroc = parseFloat(c.value);
    let resultado1 = -(numerob) + Math.sqrt(Math.pow(numerob, 2) - 4 * numeroa * numeroc);
    let resultado2=(resultado1)/(2*numeroa);
    x1.textContent = ` X1 = ${resultado2}`;
}
function ejercicio2() {
    numeroa = parseFloat(a.value);
    numerob = parseFloat(b.value);
    numeroc = parseFloat(c.value);
    let result1 = -(numerob)-Math.sqrt((numerob**numerob -4*(numeroa)*(numeroc)));
    result2=(result1)/(2*numeroa);
    console.log(result2);

    let res2 = document.createElement('p');
    x2.appendChild(res2);
    res2.textContent = "X2 = " + result2;
}
ingresar.addEventListener('click',ejercicio);
ingresarx2.addEventListener('click',ejercicio2)


//Guardar estilos en el localstorage//
botonGuardar.addEventListener('click', function(){
    const estiloSeleccionado = estiloSelector.value;
    if (estiloSeleccionado){
        //Guardar el estilo en el localStorage
        localStorage.setItem('Estilo', estiloSeleccionado);

        //Aplicar el estilo seleccionado
        estiloscss.setAttribute('href', estiloSeleccionado + '.css');
    }
});
// Verificar si hay un estilo almacenado en Local Storage al cargar la página
window.addEventListener('load', function () {
    const estiloAlmacenado = localStorage.getItem('estilo');

    if (estiloAlmacenado) {
        // Aplicar el estilo almacenado
        estiloscss.setAttribute('href', estiloAlmacenado + '.css');
        estiloSelector.value = estiloAlmacenado;
    }
});
