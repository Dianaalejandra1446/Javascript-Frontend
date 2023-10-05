const inputCantidad = document.getElementById('cantidad');
const btnGenerar = document.getElementById('generar');
const listaNum = document.getElementById('lista');

function generarFibonacci() {
    listaNum.innerHTML= "";
    let n=parseInt(inputCantidad.value);//Convertir a entero
    let a=0; b=1;
    while(n > 0){
        const nuevoElement = document.createElement('li');
        nuevoElement.textContent = a;
        listaNum.appendChild(nuevoElement)
        let  temp = a;
        a = b;
        b = temp + b;
        n-- 
    }

}
btnGenerar.addEventListener('click',generarFibonacci);