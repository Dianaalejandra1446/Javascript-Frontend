let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let x2 = document.getElementById('x2');
const ingresar = document.getElementById('ingresar')

function ejercicio() {
    numeroa = parseFloat(a.value);
    numerob = parseFloat(b.value);
    numeroc = parseFloat(c.value);
    let resultado1 = -(numerob) + Math.sqrt(Math.pow(numerob, 2) - 4 * numeroa * numeroc);
    resultado2=(resultado1)/(2*numeroa);
    let x1 = document.getElementById('x1')
    x1.textContent = ` X1 = ${resultado2}`;
}
function ejercicio2() {
    numeroa = parseFloat(a.value);
    numerob = parseFloat(b.value);
    numeroc = parseFloat(c.value);
    let result1 = -(numerob)-Math.sqrt((numerob**numerob -4*(numeroa)*(numeroc)))
    result2=(result1)/(2*numeroa);
    console.log(result2);
}
ingresar.addEventListener('click',ejercicio,ejercicio2);