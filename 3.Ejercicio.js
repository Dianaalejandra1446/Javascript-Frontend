let cont = 1; //contador
// Función para agregar un nuevo campo (etiqueta y caja de texto) al formulario
function agregarCampo() {
  const formulario = document.getElementById('miFormulario');

  // Crear una nueva etiqueta <label>
  const label = document.createElement('label');
  label.textContent = 'Etiqueta ' + (cont) + ': ';

  // Crear una nueva caja de texto <input>
  const input = document.createElement('textArea');
    input.type = 'text';
    input.style.height = '50px';
    input.name = 'campo' + (cont);
    input.color = 'white'

  // Agregar la etiqueta y la caja de texto al formulario
  formulario.appendChild(label);
  formulario.appendChild(input);
  
  const color = input.style.backgroundColor = "hotpink"
  const botonCambiarcolor = document.getElementById('cambiarcolor');
  botonCambiarcolor.addEventListener('click', color );


  cont=cont+1;
}

// Obtener el botón de "Agregar Campo" y agregar un manejador de eventos 
const botonAgregarCampo = document.getElementById('agregarCampo');
botonAgregarCampo.addEventListener('click', agregarCampo);



