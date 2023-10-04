let number = document.getElementById('number');
const buttonDuplicar = document.getElementById('duplicar');
let resultado = document.getElementById('resultado');

function duplicar() {
    n = parseFloat(number.value);
    let doble = n*2;
    resultado.textContent = 'Resultado = '+ doble;
    if (!isNaN(n)) { //si n es diferente a vacio entonces...
        alert('funciona');
    }else{
        alert('Ingrese')
    }
}
buttonDuplicar.addEventListener('click',duplicar);