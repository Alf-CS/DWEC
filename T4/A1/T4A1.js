'use strict';

/**
 * Apartado 1
 * Crea el método printLocation, que muestre por consola la URL, el protocolo, el host, el hostname, el puerto, la ruta, 
 * los parámetros y la sección de la página actual. Invoca la función.
 */

function printLocation() {
    const location = window.location;

    console.log("URL: " + location.href);
    console.log("Protocolo: " + location.protocol);
    console.log("Host: " + location.host);
    console.log("Hostname: " + location.hostname);
    console.log("Puerto: " + location.port);
    console.log("Ruta: " + location.pathname);
    console.log("Parámetros: " + location.search);
    console.log("Sección: " + location.hash);
}

printLocation();



/**
 * Apartado 2
 * Comprueba si en la URL hay parámetros -puedes documentarte y emplear la función URLSearchParams-, si los hay, muestra una única alerta con ***todos*** los parámetros existentes.
 * En caso contrario, emplea un dialogo para pedir el nombre y la edad al usuario, valida el nombre mediante expresiones regulares (solo letras, puede 
 * tener espacios p.ej: Maria del Mar). Tras ello, confirma que los parámetros son correctos mediante un diálogo y si lo son visita la página actual 
 * con los parámetros recibidos, en caso contrario, vuelve a pedir los parámetros.
 */

function pedirParametros() {
    let nombre, edad, esValido = false;

    while (!esValido) {
        nombre = prompt("Introduce tu nombre:");
        edad = prompt("Introduce tu edad:");

        // Validar el nombre (solo letras y espacios)
        const nombreValido = /^[a-zA-Z\s]+$/.test(nombre);
        // Validar la edad (uno o dos dígitos)
        const edadValida = /^\d{1,2}$/.test(edad);

        if (nombreValido && edadValida) {
            // Confirmar si los datos son correctos
            const confirmacion = confirm(`¿Son correctos estos datos?\nNombre: ${nombre}\nEdad: ${edad}`);
            if (confirmacion) {
                // Si el usuario confirma, redirigir con los parámetros en la URL
                window.location.href = `${window.location.pathname}?nombre=${encodeURIComponent(nombre)}&edad=${encodeURIComponent(edad)}`;
                esValido = true;
            }
        } else {
            alert("Por favor, introduce un nombre válido (solo letras y espacios) y una edad entre 1 y 99.");
        }
    }
}

function compruebaParametrosURL() {
    const params = new URLSearchParams(window.location.search);
    
    if (params.toString()) {
        // Si hay parámetros, muestra una alerta con todos ellos.
        let message = "Parámetros en la URL:\n";
        params.forEach((value, key) => {
            message += `${key}: ${value}\n`;
        });
        alert(message);
    } else {
        // Si no hay parámetros, pedimos  el nombre y la edad.
        pedirParametros();
    }
}

compruebaParametrosURL();
