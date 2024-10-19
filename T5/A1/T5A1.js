'use strict';

/**
 * Instrucciones generales.
 * No se puede editar/modificar el fichero html, solo el fichero js.
 */

/**
 * Apartado 1 
 * Asigna las URL de los enlaces de la sección header a los valores indicados en el diccionario, obten el enlace a partir de su textContent.
 * Para acceder a las etiquetas del documento parte desde document.body y emplea únicamente los métodos y propiedades:
 * - firstElementChild
 * - nextElementSibling
 * - children
 * - textContent
 * - href
 * Repite el proceso empleado empleado únicamente:
 * - firstChild
 * - nextSibling
 * - childNodes
 * - textContent
 * - href
 */

console.log('--------------- APARTADO 1 -----------------');
const enlaces = new Map([
    ['inicio', '#cabecera-busqueda'],
    ['clase', '#busqueda-por-clase'],
    ['id', '#busqueda-por-id'],
    ['etiqueta', '#busqueda-por-etiqueta'],
    ['selector', '#busqueda-por-selector'],

]);

// logs "First (1)"


// Acceder al primer hijo del body, que es el header


const header = document.body.firstElementChild;

// Acceder al primer <ul> dentro del header usando firstElementChild y nextElementSibling
const listaEnlaces = header.firstElementChild.nextElementSibling.firstElementChild;

// Iterar sobre los elementos <li> de la lista
for (let li of listaEnlaces.children) {
    // Obtener el elemento <a> dentro del <li>
    const enlace = li.children[0]; // El primer hijo es el <a>

    // Verificar si el texto del enlace existe en el Map
    if (enlaces.has(enlace.textContent)) {
        // Asignar el href del enlace al valor correspondiente en el Map
        enlace.href = enlaces.get(enlace.textContent);
    }
}

/*    NO TERMINA DE FUNCIONAR
const header = document.body.firstChild;

// Acceder al primer <ul> dentro del header usando firstElementChild y nextElementSibling
const listaEnlaces = header.firstChild.nextSibling.firstChild;

// Iterar sobre los elementos <li> de la lista
for (let li of listaEnlaces.childNodes) {
    // Obtener el elemento <a> dentro del <li>
    const enlace = li.children[0]; // El primer hijo es el <a>

    // Verificar si el texto del enlace existe en el Map
    if (enlaces.has(enlace.textContent)) {
        // Asignar el href del enlace al valor correspondiente en el Map
        enlace.href = enlaces.get(enlace.textContent);
    }
}
*/



/**
 * Apartado 2
 * Realiza una búsqueda por ID para localizar los elementos con id "cliente-nif" y "cliente-nombre". Agregales la clase bold.
 * A partir de cualquiera de estos elementos, accede a la cabecera h2 que los precede y añade al atributo data-title el valor contrato.
 */

console.log('--------------- APARTADO 2 -----------------');


const elemClienteNombre = document.getElementById("cliente-nombre");
elemClienteNombre.classList.add("bold");

const elemClienteNif = document.getElementById("cliente-nif");
elemClienteNif.classList.add("bold");
const elemH2 = elemClienteNif.parentElement.previousElementSibling;
elemH2.setAttribute("data-title", "contrato");
console.log (elemH2);


/**
 * Apartado 3
 * Realiza una búsqueda por clase para localizar los elementos con la clase pista, muestra la concatenación de su texto interno y añadeles
 * el estilo color rojo.
 */

console.log('--------------- APARTADO 3 -----------------');

/*
const elementosPista = document.querySelectorAll(".pista"); // Selecciona todos los elementos con la clase "pista"
let textoConcatenado="";
elementosPista.forEach(elemento => {
    elemento.style.color = "red"; // Aplica el color rojo al texto
    textoConcatenado += elemento.textContent + " "; 
});
console.log(textoConcatenado.replace(/\s+/g, '');

*/

const elementosPista = document.getElementsByClassName("pista"); // Selecciona todos los elementos con la clase "pista"
let textoConcatenado = ""; // Inicializa una variable vacía para almacenar el texto concatenado
Array.from(elementosPista).forEach(elemento => {  // OJO, HAY QUE CONVERTIR la colección HTML a un array para poder usar forEach
    elemento.style.color ="red"
    textoConcatenado += elemento.textContent + " "; // Concatenar el texto de cada elemento, separado por un espacio
});

const textoSinEspaciosIntermedios = textoConcatenado.replace(/\s+/g, ''); // Elimina los espacios intermedios
console.log(textoSinEspaciosIntermedios); // Muestra el texto



/**
 * Apartado 4
 * Realzia una búsqueda por tipo de elemento para localizar los elementos de tipo input hijos del elemento con id lista-compra.
 * Asigna el atributo checked a true a aquellos donde su estructura contenga un texto que empiece por 'C', por ejemplo, 'Cebolla' o 'Coliflor'.
 */

console.log('--------------- APARTADO 4 -----------------');
const elementoListaCompra = document.getElementById("lista-compra");
const inputsHijos = elementoListaCompra.querySelectorAll("input"); // Selecciona todos los elementos input que son hijos de "lista-compra"
Array.from(inputsHijos).forEach(elemento => {
    // Apuntamos al texto en el label padre en el que está el input
    const textoLabel = elemento.parentElement.textContent.trim();    
    // Si el texto del label empieza con 'C', marca el checkbox como seleccionado
    if (textoLabel.startsWith('C')) {
        elemento.checked = true;
    }
});



/**
 * Apartado 5
 * Realzia una búsqueda por selector CSS del elemento que contenga el atributo type con valor 'tel'.
 * Asígnale el valor 666112233
 */

console.log('--------------- APARTADO 5 -----------------');
const inputTel = document.querySelector('input[type="tel"]'); // Selecciona el primer input con type="tel"
if (inputTel) {
    inputTel.value = "666112233"; // Asignamos el valor al input
}




/**
 * Apartado 6
 * Realzia una búsqueda por selector CSS de los elementos de la clase seleccionados (selected?) que pertenezcan a la tabla. Modifica su contenido aumentando
 * 1 punto donde sea posible.
 */

console.log('--------------- APARTADO 6 -----------------');


// Selecciona todos los elementos con clase 'selected' dentro de una tabla(da igual si es td o th)
const elementosSelected = document.querySelectorAll('table .selected');

elementosSelected.forEach(elemento => {
    let numero = parseFloat(elemento.textContent); // Convertimos el contenido a número
    if (!isNaN(numero)) { // Verifica que se ha convertido un número. Un texto dará NaN
        numero = numero +1;   // Sumamos 1 si es un número
        if (numero>10) {numero=10};   //Máxima nota es un 10
        elemento.textContent = numero; //actualización en el DOM
    }
});

