const d = document
let titulo = d.getElementById('title');
let autor = d.getElementById('autor');
let año = d.getElementById('year');
let disponible = d.getElementById('available');
let prestado = d.getElementById('borrowed');
let button = d.getElementById('button');
let añadido = d.getElementById('añadido');

let libros = []

function agregarLibro(){
    añadirtitulo = titulo.value;
    añadirautor = autor.value;
    añadiraño = año.value;
    if (añadirtitulo == '' || añadirautor == ''){
        alert('Ingresa un valor valido');
    }
    
    let libroAñadido = {
        titulo:añadirtitulo,
        autor:añadirautor,
        año:añadiraño
    }
    libros.push(libroAñadido)
    console.log(libros)
};
function mostrar(){
    for (let i = 0; i < array.length; i++) {
    añadido.textContent = 'Titulo: ' +  {array[i].titulo} ;
        
    }

}
button.addEventListener('click',agregarLibro)