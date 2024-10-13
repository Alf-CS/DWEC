'use strict';

/**
 * Apartado 1
 * Crea el método printWindowInfo, que muestre por consola:
 * - Orientación
 * - Resolución pantalla completa
 * - Resolución de pantalla útil
 * - Resolución de la ventana del navegador
 * - Posición de la ventana del navegador
 * - Resolución de la zona de renderizado
 * - Desplazamiento de las barras horizontal y vertical
 * Tras ello, utilizalo.
 */

function printWindowInfo() {
    // Orientación de la pantalla (si está disponible)
    const orientation = screen.orientation || {};
    console.log("Orientación:", orientation.type || "No disponible");

    // Resolución de la pantalla completa
    console.log("Resolución de pantalla completa:", screen.width + "x" + screen.height);

    // Resolución de la pantalla útil (excluyendo barras del sistema)
    console.log("Resolución de pantalla útil:", screen.availWidth + "x" + screen.availHeight);

    // Resolución de la ventana del navegador
    console.log("Resolución de la ventana del navegador:", window.outerWidth + "x" + window.outerHeight);

    // Posición de la ventana del navegador en la pantalla
    console.log("Posición de la ventana en la pantalla:", window.screenX + ", " + window.screenY);

    // Resolución de la zona de renderizado (área interna del navegador)
    console.log("Resolución de la zona de renderizado:", window.innerWidth + "x" + window.innerHeight);

    // Desplazamiento de las barras de scroll
    console.log("Desplazamiento horizontal:", window.scrollX);
    console.log("Desplazamiento vertical:", window.scrollY);
}

printWindowInfo();



/**
 * Apartado 4
 * Crea un temporizador de 500ms que emita un mensaje de log con las propiedades de ventana que han cambiado 
 * (solo las que han cambiado, solo si han cambiado):
 * - Resolución de la ventana del navegador
 * - Posición de la ventana del navegador
 * - Resolución de la zona de renderizado
 * - Desplazamiento de las barras horizontal y vertical
 * Adjunta un pdf con imágenes con las pruebas realizadas y las conclusiones ¿Cuándo crece/decrece cada valor?
 */

// Variables para almacenar los valores actuales de las propiedades
let prevOuterWidth = window.outerWidth;
let prevOuterHeight = window.outerHeight;
let prevScreenX = window.screenX;
let prevScreenY = window.screenY;
let prevInnerWidth = window.innerWidth;
let prevInnerHeight = window.innerHeight;
let prevScrollX = window.scrollX;
let prevScrollY = window.scrollY;

// Función para comparar y loggear solo los cambios
function checkWindowChanges() {
    let changes = [];

    // Comprobar resolución de la ventana del navegador
    if (window.outerWidth !== prevOuterWidth || window.outerHeight !== prevOuterHeight) {
        changes.push(`Resolución del navegador cambió a: ${window.outerWidth}x${window.outerHeight}`);
        prevOuterWidth = window.outerWidth;
        prevOuterHeight = window.outerHeight;
    }

    // Comprobar posición de la ventana del navegador
    if (window.screenX !== prevScreenX || window.screenY !== prevScreenY) {
        changes.push(`Posición del navegador cambió a: ${window.screenX}, ${window.screenY}`);
        prevScreenX = window.screenX;
        prevScreenY = window.screenY;
    }

    // Comprobar resolución de la zona de renderizado
    if (window.innerWidth !== prevInnerWidth || window.innerHeight !== prevInnerHeight) {
        changes.push(`Resolución de la zona de renderizado cambió a: ${window.innerWidth}x${window.innerHeight}`);
        prevInnerWidth = window.innerWidth;
        prevInnerHeight = window.innerHeight;
    }

    // Comprobar desplazamiento de las barras de scroll
    if (window.scrollX !== prevScrollX || window.scrollY !== prevScrollY) {
        changes.push(`Desplazamiento cambió a: Horizontal=${window.scrollX}, Vertical=${window.scrollY}`);
        prevScrollX = window.scrollX;
        prevScrollY = window.scrollY;
    }

    // Mostrar los cambios si hay alguno
    if (changes.length > 0) {
        console.log("-------------------CAMBIOS DETECTADOS:");
        changes.forEach(change => console.log(change));
    }
}

// Temporizador para comprobar cambios cada 500ms
setInterval(checkWindowChanges, 500);
