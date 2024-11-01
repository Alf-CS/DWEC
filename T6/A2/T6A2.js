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
        const email = form.querySelector("input[placeholder='example@mail.com']");
        
        let formIsValid = true;

        const errors = form.querySelectorAll(".error-text");
        errors.forEach(error => error.textContent = "");

        
        // Validación del campo Nombre y apellidos
        const nombreRegex = /^(?=.{4,})([A-Za-zÁÉÍÓÚáéíóúüÜñÑ]+(?: [A-Za-zÁÉÍÓÚáéíóúüÜñÑ]+){1,4})$/;  // faltan vocales abiertas  --> opción alfabeto europeo
        if (!nombreRegex.test(nombreCompleto.value.trim())) {
            formIsValid = false;
            mostrarError(nombreCompleto, "Por favor, introduce un nombre válido con entre 2 y 5 palabras y sin caracteres especiales.");
        }
        

        // Validación del campo DNI
        
        const dniRegex = /^\d{8}-[A-Z]$/;  
        if (!dniRegex.test(dni.value.trim())) {
            formIsValid = false;
            mostrarError(dni, "Por favor, introduce un DNI VALIDO: [8 cifras]-[letra].");
        }
        

        const telefonoRegeX = /^\d{3}-\d{2}-\d{2}-\d{2}$/;
        if (!telefonoRegeX.test(telefono.value.trim())) {
            // formIsValid = false;
            mostrarError(telefono, "El telefono introducido no es válido. El formato es 000-00-00-00");
        }

        if (formIsValid) {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${nombreCompleto.value}</td>
                <td>${dni.value}</td>
                <td>${nombreUsuario.value}</td>
                <td>${email.value}</td>
            `;
            usersList.appendChild(newRow);
            form.reset(); 
        }
    }

    function mostrarError(input, mensaje) {
        const errorText = input.nextElementSibling; //seleccionamos el span siguiente
        errorText.textContent = mensaje;
        // errorText.style.color = "red";  El CSS hace básicamente esto, aparte del tamaño de letra.
    }

    form.querySelector("input[value='Reiniciar']").addEventListener("click", (event) => {
        event.preventDefault(); 
        form.reset();
        const errors = form.querySelectorAll(".error-text");
        errors.forEach(error => error.textContent = "");
    });
});
