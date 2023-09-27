let cont = 1; //contador
// Función para agregar un nuevo campo (etiqueta y caja de texto) al formulario
function agregarCampo() {
  const formulario = document.getElementById('miFormulario');

  // Crear una nueva etiqueta <label>
  const label = document.createElement('label');
  label.textContent = 'Etiqueta ' + (cont) + ': ';

  // Crear una nueva caja de texto <input>
  const input = document.createElement('textarea');
    input.type = 'text';
    input.style.height = '50px';
    input.name = 'campo' + (cont);
    input.color = 'white'

  // Agregar la etiqueta y la caja de texto al formulario
  formulario.appendChild(label);
  formulario.appendChild(input);

  cont=cont+1;
}
function cambiarColor(){
  const cambiar = document.getElementsByTagName('textarea');

  for (let i = 0; i < cambiar.length; i++) {
    cambiar[i].style.backgroundColor = 'hotpink'  
  }
}

// Obtener el botón de "Agregar Campo" y agregar un manejador de eventos 
const botonAgregarCampo = document.getElementById('agregarCampo');
botonAgregarCampo.addEventListener('click', agregarCampo);

const botonCambiarColor = document.getElementById('colorsitos');
botonCambiarColor.addEventListener('click', cambiarColor);

