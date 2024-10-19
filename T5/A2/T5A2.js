'use strict;'
/**
 * General
 * Crea los elementos de manera dinámica sin usar innerHTML/outerHTML: todo elemento debe ser creado con createElement o createTextNode.
 * Debes incluir los atributos y clases que hay en la página original.
 * No emplees métodos anticuados o de la vieja escuela para construir el árbol.
 */


/**
 * Apartado 1
 * Cambia el título de la página.
 */

// Cambiar el título de la página
// document.title = "Creación: DOM"; ¿old-style?

let titleElement = document.querySelector('title');             // Primero, buscar el elemento <title> que ya existe.
let nuevoTitulo = document.createTextNode("Creación: DOM");     // Creamos el nodo de texto con el nuevo título
titleElement.textContent = '';                                      // Ahora podemos reemplazar el contenido del título
titleElement.appendChild(nuevoTitulo);                              // y añadimos como elemento hijo el nodo de texto


/**
 * Apartado 2
 * Crea la estructura header
 */

let headerElement = document.createElement('header');       // Creamos un nuevo <header>
let mainElement = document.querySelector('main');           // Buscamos el <main>
document.body.insertBefore(headerElement, mainElement);     // Insertamos el <header> justo antes de <main>


/**
 * Apartado 3
 * Completa la sección con id "intro"
 */

// Añadimos el <h1> dentro de <section id="intro">
let sectionIntro = document.querySelector('#intro');        // Buscar la sección con id="intro"
let h1Element = document.createElement('h1');               // Crear un nuevo elemento <h1>
let h1Text = document.createTextNode("Bienvenidos al ");    // Crear el texto (nodo) para el h1
let abbrElement = document.createElement('abbr');               // Crear el elemento <abbr> con el texto "DOM"
abbrElement.setAttribute('title', 'Document Object Model');         // Establecemos el atributo
let abbrText = document.createTextNode("DOM");                      // Creamos el texto (nodo) "DOM"
abbrElement.appendChild(abbrText);                                  // Y lo ponemos como hijo del elemento abbr
h1Element.appendChild(h1Text);                              // Añadimos el texto "Bienvenidos al " al <h1>
h1Element.appendChild(abbrElement);                         // Añadimos el <abbr> al <h1>
sectionIntro.appendChild(h1Element);                    // Añadimos el <h1> dentro de <section id="intro">




// AÑADIR ELEMENTO <img>
let imgElement = document.createElement('img');  // Crear el elemento <img>
        // Asignamos los atributos src y alt
imgElement.setAttribute('src', 'https://desarrolloweb.com/storage/tag_images/actual/3BpUDBsC3ofBy4torT1ZiUF6hdonqpRH841MeMDM.png');
imgElement.setAttribute('alt', 'Imagen de javascript');

sectionIntro.appendChild(imgElement); // Añadir la imagen después del <h1>














/**
 * Apartado 4
 * Crea la sección con id "lista-compra". Crea los productos de manera dinámica mediante un bucle.
 */

const listaCompra = [
    { producto: 'Leche', comprado: false },
    { producto: 'Carne', comprado: true },
    { producto: 'Patatas', comprado: false },
    { producto: 'Cebolla', comprado: true },
    { producto: 'Zanahoria', comprado: false },
    { producto: 'Coliflor', comprado: true },
]


/**
 * Apartado 5
 * Crea la sección con id "notas-alumnos". Crea las filas de la tabla de manera dinámica usando bucles.
 */

const notasAlumnos = [
    { nombre: 'Alumno 1', notas: [ 8.5, 9, 7, 8, 7, 9, true, 8.5 ] },
    { nombre: 'Alumno 2', notas: [ 7, 8, 8.5, 9, 6.5, 8, true, 9 ] },
    { nombre: 'Alumno 3', notas: [ 9.5, 7.5, 9, 9.5, 8, 9.5, false, 9 ] },
    { nombre: 'Alumno 4', notas: [ 6, 7, 6.5, 7, 6, 7.5, true, 7 ] },
]