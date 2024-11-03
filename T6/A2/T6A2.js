import { comunidades } from './T6A2-comunidades.js';        // Importa el array de comunidades
import { provincias } from './T6A2-provincias.js';        // Importa el array de provincias
import { municipios } from './T6A2-municipios.js';        // Importa el array de municipios

     
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("user-form");
    const usersList = document.getElementById("users-list").querySelector("tbody");
    
    // Selecciona el elemento id="comunidad" en el formulario
    const comunidadSelect= document.getElementById("comunidad");
  
    // Llamamos a la función cargarComunidades al cargar la página
    cargarComunidades();     

    // Selecciona el elemento id="provincias en el formulario
    const provinciaSelect= document.getElementById("provincia");
  
    // Llamamos a la función cargarProvinicas al seleccionar Comunidad
    comunidadSelect.addEventListener("change", (event) => {
    const comunidadCodigo = event.target.value;
    cargarProvincias(comunidadCodigo); // Carga las provincias según la comunidad seleccionada
    });

    // Selecciona el elemento id="municipio" en el formulario
    const municipioSelect= document.getElementById("municipio");
  
    // Llamamos a la función cargarMunicipios al seleccionar Provincia
    provinciaSelect.addEventListener("change", (event) => {
    const provinciaCodigo = event.target.value;
    cargarMunicipios(provinciaCodigo); // Carga los municipios según la Provincia seleccionada
    });




    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        validarFormulario();
    });

    function validarFormulario() {
        const nombreCompleto = form.querySelector("input[placeholder='Nombre Apellido Apellido']");
        const dni = form.querySelector("input[placeholder='00000000-A']");
        const telefono = form.querySelector("input[placeholder='000-00-00-00']");
        const nombreUsuario = form.querySelector("input[placeholder='nombre-usuario']");
        // const email = form.querySelector("input[placeholder='example@mail.com']");   --Por aquí NO HE CONSEGUIDO HACERLO.
        const emailInput = document.getElementById("email");
        const repeatEmailInput = document.getElementById("repeat-email");
        

        let formIsValid = true;  // false??                                     //INICIALMENTE, el formulario es VÁLIDO, HASTA QUE ALGO FALLE
        
        muestraFormIsValid("Establecemos a TRUE al iniciar validarFormulario");                                 //BORRAR

        const errors = form.querySelectorAll(".error-text");
        errors.forEach(error => error.textContent = "");     // Esto se puede quitar si dejamos las funciones limpiarError, que se necesitan en las comprobaciones

        // Evitar pegado en el campo "Repetir email"
        repeatEmailInput.addEventListener("paste", (event) => {
            event.preventDefault(); // Evita pegar contenido
            mostrarError(repeatEmailInput, "No se permite pegar en este campo.");
        });

        // Validación en tiempo real
        repeatEmailInput.addEventListener("input", verificarCoincidenciaEmail);

        // nombreCompleto.addEventListener("blur", validarNombre); // ESTO SI QUE FUNCIONA - SIN PARENTESIS EN LA FUNCION  -- Funciona a ratos ????

       
       validarNombre();
       /*
       validarDNI();
       validarTelefono();
       validarGenero();
       validarNombreUsuario();
       validarEMail();    
       verificarCoincidenciaEmail(); //-- CASI lo manejamos mediante el input, pero hace falta para coger la tecla ENTER o la pulsacion sobre "REGISTRAR"
       */
       validarCodigoPostal();
       validarIntereses();
       validarTerminos();
       
       
       
       agregarUsuario();

        function agregarUsuario(){
            console.log("valor de formIsValid es: ", formIsValid,  " ¿entrando?");                                          // BORRAR
            if (formIsValid) {
                console.log("valor de formIsValid es: ", formIsValid,  " entrando en if creación de fila");                 // BORRAR
                const newRow = document.createElement("tr");
                newRow.innerHTML = `
                    <td>${nombreCompleto.value}</td>
                    <td>${dni.value}</td>
                    <td>${nombreUsuario.value}</td>
                    <td>${email.value}</td>
                    `;
                usersList.appendChild(newRow);
                console.log("usuario creado");
                // form.reset(); 
                const errors = form.querySelectorAll(".error-text");
                errors.forEach(error => error.textContent = "");
                const inputs =form.querySelectorAll("input");
                inputs.forEach(input => input.classList.remove("error"));
                form.reset() //¿mejor aquí?
            }
        }

        function validarNombre(){                     // Validación del campo Nombre y apellidos - casi OK
            const nombreRegex = /^(?=.{4,})([A-Za-zÁÉÍÓÚáéíóúüÜñÑ]+(?: [A-Za-zÁÉÍÓÚáéíóúüÜñÑ]+){1,4})$/;  // faltan vocales abiertas  --> opción alfabeto europeo
            if (!nombreRegex.test(nombreCompleto.value.trim())) {
                formIsValid = false;
                muestraFormIsValid("Nombre no cumple");                                                             //BORRAR
                mostrarError(nombreCompleto, "Por favor, introduce un nombre válido, que tenga entre 2 y 5 palabras y sin caracteres especiales.");
            } else{
                limpiarError(nombreCompleto);
            }
        }

        function validarDNI(){                        // Validación del campo DNI - OK
            const dniRegex = /^\d{8}-[A-Z]$/;  
            if (!dniRegex.test(dni.value.trim())) {
                formIsValid = false;
                muestraFormIsValid("DNI no cumple");                                                            //BORRAR
                mostrarError(dni, "Por favor, introduce un DNI VALIDO: [8 cifras]-[letra].");
            } else{
                limpiarError(dni);                              //¿Hace falta? Los errores se limpian al principio
            }
        }

        function validarTelefono(){
            // Validación del campo telefono
            const telefonoRegeX = /^\d{3}-\d{2}-\d{2}-\d{2}$/;
            if (!telefonoRegeX.test(telefono.value.trim())) {
                // formIsValid = false;  -- ya que no es obligatorio, NO NOS IMPORTA SI EL TELEFONO ESTA MAL
                mostrarError(telefono, "El telefono introducido no es válido. El formato es 000-00-00-00");
            } else{
                limpiarError(telefono);
            }
        }

        function validarGeneroNOFUNCIONA(){ // Si lo hago con input[type='radio'], estoy referenciando al mismo botón --> masculino
            // Validación de campo Género
                const generoMasculino = form.querySelector("input[type='radio']:first-of-type");
                const generoFemenino = form.querySelector("input[type='radio']:last-of-type");    
                const generoErrorText = document.getElementById("genero-error");
                // const generoSeleccionado = form.querySelector("input[name='genero']:checked"); // ASÍ NO ME HA FUNCIONADO     
                if ((!generoMasculino.checked) && (!generoFemenino.checked)) {  //if (!generoSeleccionado) {  esto tampoco funciona
                    // generoMasculino.checked=true;
                    // console.log("genero masculino checked: ", generoMasculino.checked);
                    // console.log("genero femenino checked: ", generoFemenino.checked);
                    generoErrorText.textContent = "Selecciona un género";
                    generoErrorText.classList.add("error");
                    formIsValid = false;
                } else {
                        generoErrorText.textContent = ""; // Limpia el mensaje si está seleccionado
                        generoErrorText.classList.remove("error");
                        // quitamos clase "error"  ¿cómo la ponemos primero??
                    };
        }

        function validarGenero(){                                                       // Validación de campo Género
                const generoMasculino = document.getElementById("genero-masculino");
                const generoFemenino = document.getElementById("genero-femenino");
                const generoErrorText = document.getElementById("genero-error");
                console.log("genero masculino checked: ", generoMasculino.checked);
                console.log("genero femenino checked: ", generoFemenino.checked);
                if ((!generoMasculino.checked) && (!generoFemenino.checked)) {    
                    generoErrorText.textContent = "Selecciona un género";
                    generoErrorText.classList.add("error");
                    formIsValid = false;
                } else {
                        generoErrorText.textContent = ""; // Limpia el mensaje si está seleccionado
                        generoErrorText.classList.remove("error");
                        // quitamos clase "error"  ¿cómo la ponemos primero??
                    };
        }


        

        function validarNombreUsuario() {
            const nombreUsuarioValue = nombreUsuario.value.trim();
            const nombreUsuarioPattern = /^[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]$/;
            if (!nombreUsuarioPattern.test(nombreUsuarioValue)) {
                mostrarError(nombreUsuario, "Debe comenzar y terminar con letras o números. Puede contener '.', '-', '_'");
                formIsValid=false;
                muestraFormIsValid ("Nombre de usuario incorrecto");
            } else {
                limpiarError(nombreUsuario);
            }
        }
        // nombreUsuario.addEventListener("blur", validarNombreUsuario);

        function validarEMail() {
            const emailValue = emailInput.value.trim();
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(emailValue)) {
                mostrarError(email, "Introduce un correo electrónico válido.");
                formIsValid=false;
                muestraFormIsValid("Falla la comprobación de email");       //BORRAR
            } else {
                limpiarError(email);
            }
        }
        // email.addEventListener("blur", validarEMail);  // no funcionaba con parentesis

        
        function verificarCoincidenciaEmail() {
            if (emailInput.value !== repeatEmailInput.value) {
                mostrarError(repeatEmailInput, "Los correos electrónicos no coinciden.");
                repeatEmailInput.classList.add("error");
                formIsValid=false;
                muestraFormIsValid ("No hay coincidencia en la verificación de email")  // BORRAR
            } else {
                limpiarError(repeatEmailInput);
                muestraFormIsValid ("emails coinciden");                                        // BORRAR
                //repeatEmailInput.classList.remove("error");
            }
        }

        
        function validarCodigoPostal() {
            const cpInput = form.querySelector("input[placeholder='00000']");
            //const cpInput = document.getElementById("codigo-postal");
            // const errorText = cpInput.nextElementSibling; -- Aquí no tenemos un <span> a continuación
            const cpPattern = /^\d{5}$/; // Expresión regular para cinco dígitos
        
            // Verifica si el valor del campo CP coincide con el patrón
            console.log ("codigo postal: ", cpInput.value);   // TEST - BORRAR
            if (!cpPattern.test(cpInput.value.trim())) {
                cpInput.classList.add("error");    //Añade la clase error 
                muestraFormIsValid("El código postal es erróneo");
                formIsValid=false;
                // Vamos a añadir un elemento <span> a continuación para poner el mensaje de error.
                let errorSpan = cpInput.nextElementSibling;
                if (errorSpan) {
                    cpInput.nextElementSibling.remove();
                }
                errorSpan=cpInput.nextElementSibling;
                if (!errorSpan) {
                    // Crea el elemento <span> si no existe
                    errorSpan = document.createElement("span");
                    //errorSpan.textContent = "El código postal debe tener exactamente 5 cifras.";
                    cpInput.parentNode.appendChild(errorSpan); // Inserta después del input
                    //cpInput.parentNode.insertBefore(errorSpan, cpInput.nextSibling);
                    
                    //cpInput.classList.add("error");
                    errorSpan.classList.add("error-text");
                    mostrarError(cpInput, "El código postal TIENE que tener exactamente 5 cifras");
                }
            } else {
                // Remueve el mensaje de error si existe
                let errorSpan = cpInput.nextElementSibling;
                cpInput.classList.remove("error"); // Quita la clase "error"  cuando el CP sea válido
                if (errorSpan){
                    errorSpan.remove();
                }
                
            }
        }








        function validarIntereses() {
            // Selecciona todos los checkboxes dentro del fieldset de intereses
            const intereses = document.querySelectorAll("fieldset[name='interests'] input[type='checkbox']");
            const errorText = document.querySelector("fieldset[name='interests'] .error-text");
        
            // Filtra los checkboxes seleccionados
            const seleccionados = Array.from(intereses).filter(checkbox => checkbox.checked);
            
            // Verifica si el número de seleccionados es menor a 3
            if (seleccionados.length < 3) {
                errorText.textContent = "Selecciona al menos 3 intereses.";
                formIsValid=false;
                muestraFormIsValid("Intereses son menos de 3");                         //BORRAR
            } else {
                errorText.textContent = ""; // Borramos el mensaje de error si se cumple la condición
            }
        }
            
       
        function validarTerminos() {
            const terminosCheckbox = document.getElementById("terminos");
            // const errorText = terminosCheckbox.nextElementSibling; no es necesario
        
            // Verifica si el checkbox no está marcado
            if (!terminosCheckbox.checked) {
                formIsValid=false;                                              // NO PASA la verificación
                mostrarError(terminosCheckbox, "Debe aceptar los TERMINOS del servicio"); // errorText.textContent = "Debes aceptar los términos del servicio.";

            } else {
                limpiarError(terminosCheckbox)   //errorText.textContent = ""; // Limpia el mensaje de error si está marcado
            }
        }
        
        



        // funciones AUXILIARES PARA DEPURACION Y TESTs

        function muestraFormIsValid(mensaje){    //Función auxiliar para DEPURACION                             // BORRAR
            console.log(mensaje);
            console.log("formIsValid se ha establecido a: ", formIsValid);
        }
        function muestraVariables(mensaje){    //Función auxiliar para DEPURACION                             // BORRAR
            console.log(mensaje);
            console.log("formIsValid:", formIsValid);
        }
    }



    // FUNCIONES DE CARGA DE LAS OPCIONES CONTEMPLADAS para los desplegables en los selects  EN OTROS MODULOS JS 
        
        // Función para cargar las opciones en el <select>
        function cargarComunidades() {
            // Agregamos una opción en blanco al inicio
            const emptyOption = document.createElement("option");
            emptyOption.value = "";  // Valor vacío
            emptyOption.textContent = "";  // Texto vacío
            comunidadSelect.appendChild(emptyOption);  // Añade al <select>
        
            // Añadimos las opciones de comunidades
            comunidades.forEach(comunidad => {
                const option = document.createElement("option");
                option.value = comunidad.codigo;
                option.textContent = comunidad.nombre;
                comunidadSelect.appendChild(option);
            });
        }

        
        function cargarProvincias(comunidadCodigo) {
            // Borramos las que hay de antes.
            provinciaSelect.innerHTML = '<option value="">Seleccione una provincia</option>';  // Al cambiar de comunidad, hay que eliminar las provincias anteriores.
                // Agregamos una opción en blanco al inicio?
                    /*
                    const emptyOption = document.createElement("option");
                    emptyOption.value = "";  // Valor vacío
                    emptyOption.textContent = "";  // Texto vacío
                    provinciaSelect.appendChild(emptyOption);  // Añade al <select>
                    */
            // Añadimos las opciones de la Comunidad Seleccionada
            const provinciasFiltradas = provincias.filter(provincia => provincia.comunidad === comunidadCodigo);
            provinciasFiltradas.forEach(provincia => {
                const option = document.createElement("option");
                option.value = provincia.codigo;
                option.textContent = provincia.nombre;
                provinciaSelect.appendChild(option);
            });
        }
         
        
        function cargarMunicipios(provinciaCodigo) {
            // Borramos las que hay de antes.
            municipioSelect.innerHTML = '<option value="">Seleccione un municipio</option>';  // Al cambiar de comunidad, hay que eliminar las provincias anteriores.
                // Agregamos una opción en blanco al inicio?
                    /*
                    const emptyOption = document.createElement("option");
                    emptyOption.value = "";  // Valor vacío
                    emptyOption.textContent = "";  // Texto vacío
                    provinciaSelect.appendChild(emptyOption);  // Añade al <select>
                    */
            // Añadimos las opciones de la Comunidad Seleccionada
            const municipiosFiltrados = municipios.filter(municipio => municipio.provincia === provinciaCodigo);
            municipiosFiltrados.forEach(municipio => {
                const option = document.createElement("option");
                option.value = municipio.codigo;
                option.textContent = municipio.nombre;
                municipioSelect.appendChild(option);
            });
        }
         
        





    function mostrarError(input, mensaje) {
        const errorText = input.nextElementSibling;         // seleccionamos el span siguiente  - Con los botones radio esto se complica --> añadimos ids
        errorText.textContent = mensaje;                    // Añade el mensaje de error al span
        input.classList.add("error");                       // Añadir la clase 'error' al input para aplicar el estilo
    }
    function limpiarError(input) {                              // Limpiamos errores. Texto="" y fondo en blanco de nuevo.
        const errorText = input.nextElementSibling;
        errorText.textContent = "";                                 // Limpia el mensaje de error
        input.classList.remove("error");                            // Quitar la clase 'error' del input si los datos son correctos
    }
    form.querySelector("input[value='Reiniciar']").addEventListener("click", (event) => {
        event.preventDefault(); 
        form.reset();
        const errors = form.querySelectorAll(".error-text");
        errors.forEach(error => error.textContent = "");
    });


});




