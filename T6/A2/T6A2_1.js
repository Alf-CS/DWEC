// T6A2.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("user-form");
    const usersList = document.getElementById("users-list").querySelector("tbody");

    // Form submission event handler
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevents form from submitting traditionally

        // Capture form data
        const name = form.querySelector("input[placeholder='Nombre Apellido Apellido']").value;
        const dni = form.querySelector("input[placeholder='00000000-A']").value;
        const phone = form.querySelector("input[placeholder='000-00-00-00']").value;
        const username = form.querySelector("input[placeholder='nombre-usuario']").value;
        const email = form.querySelector("input[placeholder='example@mail.com']").value;
        const repeatEmail = form.querySelector("input[placeholder='example@mail.com']:nth-of-type(2)").value;
        const termsAccepted = form.querySelector("input[type='checkbox']:last-of-type").checked;

        // Simple validation checks
        let valid = true;
        const errors = form.querySelectorAll(".error-text");
        errors.forEach(error => error.textContent = ""); // Clear previous errors

        if (!name) {
            form.querySelector("input[placeholder='Nombre Apellido Apellido']").nextElementSibling.textContent = "Nombre requerido";
            valid = false;
        }
        if (!/^\d{8}-[A-Z]$/.test(dni)) {
            form.querySelector("input[placeholder='00000000-A']").nextElementSibling.textContent = "DNI inválido";
            valid = false;
        }
        if (!/^\d{3}-\d{2}-\d{2}-\d{2}$/.test(phone)) {
            form.querySelector("input[placeholder='000-00-00-00']").nextElementSibling.textContent = "Teléfono inválido";
            valid = false;
        }
        if (!username) {
            form.querySelector("input[placeholder='nombre-usuario']").nextElementSibling.textContent = "Usuario requerido";
            valid = false;
        }
       /*
        if (email !== repeatEmail) {
            form.querySelector("input[placeholder='example@mail.com']:nth-of-type(2)").nextElementSibling.textContent = "Emails no coinciden";
            valid = false;
        }
            */
        if (!termsAccepted) {
            form.querySelector("input[type='checkbox']:last-of-type").nextElementSibling.textContent = "Debe aceptar los términos";
            valid = false;
        }

        // If all validations pass, add the user to the table
        if (valid) {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${name}</td>
                <td>${dni}</td>
                <td>${username}</td>
                <td>${email}</td>
            `;
            usersList.appendChild(newRow);
            form.reset(); // Clear the form
        }
    });

    // Optional: reset form on "Reiniciar" click
    form.querySelector("input[value='Reiniciar']").addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form reset action
        form.reset();
        const errors = form.querySelectorAll(".error-text");
        errors.forEach(error => error.textContent = ""); // Clear error messages
    });
});
