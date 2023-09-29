// Obtener elementos HTML
const inputDescuento = document.getElementById('descuento'); // el input donde el usuario ingresa el descuento.
const botonCalcular = document.getElementById('calcular'); //el botón que se utiliza para calcular los precios con descuento.
const resultados = document.getElementById('resultados'); //el elemento donde se mostrarán los resultados.
const agregarProducto =  document.getElementById('producto');
const Ingresar = document.getElementById('ingresar')
let agregarPrecio = document.getElementById('precio');

// Lista de precios
const precios = [];
Ingresar.addEventListener('click',()=>{
    precios.push(agregarPrecio.value)
    console.log(precios)
})
//Funcion para calcular precios con descuento
function calcularDescuento(){
    const descuento = parseFloat(inputDescuento.value);//Valor del descuento
    const preciosConDescuento = precios.map(function(precio){
        const precioConDescuento = precio -(precio *(descuento /100));
        return precioConDescuento.toFixed(2); //Redondear a  2 decimales
    });
    resultados.innerHTML = '<h2>Precios con Descuento:</h2>';
    preciosConDescuento.forEach((precio, index) => {
        resultados.innerHTML += `<p>Producto ${index + 1}: $${precio}</p>`;
    });
}

// Agregar evento al boton "Calcular"
botonCalcular.addEventListener('click', calcularDescuento)