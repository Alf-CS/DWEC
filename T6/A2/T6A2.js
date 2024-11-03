document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("user-form");
    const usersList = document.getElementById("users-list").querySelector("tbody");

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

        nombreCompleto.addEventListener("blur", validarNombre); // ESTO SI QUE FUNCIONA - SIN PARENTESIS EN LA FUNCION  -- Funciona a ratos ????

       
       validarNombre();
       /*
       validarDNI();
       validarTelefono();
       validarGenero();
       */
       validarEMail();
       /*
       validarNombreUsuario();
       verificarCoincidenciaEmail(); //-- CASI lo manejamos mediante el input, pero hace falta para coger la tecla ENTER o la pulsacion sobre "REGISTRAR"
       */
       
       
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
    

        function validarNombreUsuario() {
            const nombreUsuarioValue = nombreUsuario.value.trim();
            const nombreUsuarioPattern = /^[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]$/;
        
            if (!nombreUsuarioPattern.test(nombreUsuarioValue)) {
                mostrarError(nombreUsuario, "El nombre de usuario debe comenzar y terminar con letras o números, y solo puede contener '.', '-', '_'.");
            } else {
                limpiarError(nombreUsuario);
            }
        }
        // nombreUsuario.addEventListener("blur", validarNombreUsuario);
        
        function verificarCoincidenciaEmail() {
            if (emailInput.value !== repeatEmailInput.value) {
                mostrarError(repeatEmailInput, "Los correos electrónicos no coinciden.");
                repeatEmailInput.classList.add("error");
                formIsValid=false;
            } else {
                limpiarError(repeatEmailInput);
                console.log("emails coinciden");
                //repeatEmailInput.classList.remove("error");
            }
        }

        function muestraFormIsValid(mensaje){    //Función auxiliar para DEPURACION                             // BORRAR
            console.log(mensaje);
            console.log("formIsValid se ha establecido a: ", formIsValid);
        }
        function muestraVariables(mensaje){    //Función auxiliar para DEPURACION                             // BORRAR
            console.log(mensaje);
            console.log("formIsValid:", formIsValid);
        }
    }

    function mostrarError(input, mensaje) {
        const errorText = input.nextElementSibling;         // seleccionamos el span siguiente  - Con los botones radio esto se complica
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




