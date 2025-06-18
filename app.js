window.addEventListener('load',()=>{
    //referencias a los elementos del DOM
     const formCrear = document.getElementById('form-crear')
     const listaTareas = document.getElementById('lista-tareas')
     const inputCrear = document.getElementById('crear')
     const inputBuscar = document.getElementById('buscar')
     // Procedimiento para agergar tareas
     formCrear.addEventListener('submit',(e)=>{
        e.preventDefault()
        capturarValor()
        
     })

      const capturarValor =()=>{
         // Para eliminar espacio en blanco con method trim()
        const nombreTarea = inputCrear.value.trim();
        //si se ingrese un valor crearemos una function de control
        (nombreTarea.length) ? mostrarTareaHtml(nombreTarea) : alert('Debe ingresar una tarea');
      }
      const mostrarTareaHtml =  (tarea)=>{
        const liHtml =`<li><strong>${tarea}</strong> <i class="fas fa-minus-circle borrar"></i></li>`;
        alert('Tarea ingresada una tarea');
        listaTareas.innerHTML += liHtml
    
    };

    //Procedimiento para buscar
    inputBuscar.addEventListener('keyup',()=>{
       const caracter =  inputBuscar.value.trim();
       busquedaTarea(caracter);

    });
    const busquedaTarea =(cadena)=>{
        /* console.log(listaTareas.children) */
        //Para llamar el arreglo de hijos de la lista de tareas
        let arreglo =Array.from(listaTareas.children)
        /* console.log(arreglo); */
        //filtrar los elementos que contengan la cadena ingresada
        arreglo
        .filter(texto => !texto.textContent.toLowerCase().includes(cadena))
        .forEach(cadenaFiltarda =>{
        cadenaFiltarda.classList.add('textFiltrado');
        })
        // remover los filtros
        arreglo
        .filter(texto => texto.textContent.toLowerCase().includes(cadena))
        .forEach(cadenaFiltarda =>{
        cadenaFiltarda.classList.remove('textFiltrado');
        })
        //Borrar las tareas
        listaTareas.addEventListener('click', (e)=>{
        //para mostrar el evento en el click en la consola
        /* console.log(e.target.classList) */
        if (e.target.classList.contains('borrar')) {
            // para eliminar la tarea
            e.target.parentElement.remove();
            
        }
        // limpiar el input buscar
        inputBuscar.value ='';
        })

    }
})