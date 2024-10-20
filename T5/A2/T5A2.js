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
let h1Text = document.createTextNode("Javascript: ");    // Crear el texto (nodo) para el h1
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

// AÑADIR ELEMENTO <p>

let paragElement = document.createElement('p');  // Creamos el elemento <p>

let paragText=document.createTextNode("Estamos aprendiendo ");
paragElement.appendChild(paragText);

// Creamos el elemento <strong> para "Javascript"
let strongElement = document.createElement('strong');   
let strongText = document.createTextNode("Javascript");
strongElement.appendChild(strongText);
    // Añadimos elemento <strong> al párrafo paragElement
paragElement.appendChild(strongElement);

let paragText2=document.createTextNode(", en concreto a manipular el ");
paragElement.appendChild(paragText2);

// elemento DOM en span
let spanElement = document.createElement('span');
let spanText = document.createTextNode("DOM");
spanElement.appendChild(spanText);
    // Añadimos elemento <span> al párrafo paragElement
paragElement.appendChild(spanElement);

        // Añadimos clases al elemento <span>  --Más rápido que repetir y anidar toda la estructura que hemos estamos usando hasta ahora.
spanElement.classList.add('highlight', 'underline', 'size-120');

// Añadir el <span> al párrafo
paragElement.appendChild(spanElement);

// Añadimos la última parte de [["creando elemento, por ejemplo:"]]
let paragText3=document.createTextNode(" creando elementos, por ejemplo:");
paragElement.appendChild(paragText3);

//añadimos el elemento <p> a la sección "intro" (con TODO lo que tiene dentro)
sectionIntro.appendChild(paragElement);


// AÑADIR ELEMENTO <code>.

let codeElement = document.createElement('code');  // Creamos el elemento <code>
let codeText = document.createTextNode("const myElemento = document.createElement(<etiqueta>); // el parámetro sin <> y como cadena de texto");
codeElement.appendChild(codeText);
sectionIntro.appendChild(codeElement);

// TERMINADA section "intro"

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

// Crear la SECCION "lista-compra"
let listaCompraSectionElement = document.createElement('section');  // Crear el elemento <section>
listaCompraSectionElement.setAttribute('id', 'lista-compra');       // Añadir id="lista-compra"

// Crear el h1 dentro de la sección "lista-compra"
let h1Element2 = document.createElement('h1');                      // Crear el elemento <h1>
let h1Text2 = document.createTextNode("Lista de la compra");         // Crear el nodo de texto "Lista de la compra"
h1Element2.appendChild(h1Text2);                                    // Añadir el texto al <h1>

// Añadir el <h1> dentro de la sección "lista-compra"
listaCompraSectionElement.appendChild(h1Element2); 

// Crear <ul> para la lista de compra
let ulElement = document.createElement('ul');  // Crear el elemento <ul>

// Iterando sobre los productos en listaCompra y crear <li> con checkbox e información
listaCompra.forEach(item => {
    let liElement = document.createElement('li');            // Crear el elemento <li>
    let labelElement = document.createElement('label');       // Crear el elemento <label>
    let checkboxElement = document.createElement('input');    // Crear el checkbox
    checkboxElement.setAttribute('type', 'checkbox');         // Establecer tipo checkbox
    checkboxElement.checked = item.comprado;                  // Marcar si el producto ya está comprado

    let labelText = document.createTextNode(item.producto);   // Crear el texto del producto

    labelElement.appendChild(checkboxElement);                // Añadir el checkbox dentro del label
    labelElement.appendChild(labelText);                      // Añadir el nombre del producto al label

    liElement.appendChild(labelElement);                      // Añadir el label al <li>
    ulElement.appendChild(liElement);                         // Añadir el <li> a la <ul>
});

// Añadir la lista <ul> a la sección "lista-compra"
listaCompraSectionElement.appendChild(ulElement);  // Añadir <ul> a la sección

// Añadir la sección "lista-compra" dentro de <main> como hija de la sección anterior
mainElement.appendChild(listaCompraSectionElement); // Insertar dentro de <main>
  //sectionIntro.parentElement.appendChild (listaCompraSectionElement); //un poco demasiado enrevesado pero funcionaba.


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


// Crear la sección "notas-alumnos"
let notasAlumnosSectionElement = document.createElement('section');    // Crear el elemento <section>
notasAlumnosSectionElement.setAttribute('id', 'notas-alumnos');        // Añadir id="lista-compra"

    let h1NotasElement = document.createElement('h1');                      // Crear el elemento <h1>
    let h1NotasText = document.createTextNode("Tabla de alumnos");         // Crear el nodo de texto "Lista de la compra"
    h1NotasElement.appendChild(h1NotasText);

    notasAlumnosSectionElement.appendChild (h1NotasElement);


            // Añadir la sección "notas-alumnos" dentro de <main> como hija
            mainElement.appendChild(notasAlumnosSectionElement);
            


    // Obtener la referencia del elemento section id='notas-alumnos'
    let sectionNotasAlumnos = document.querySelector('#notas-alumnos');

    let tableNotasAlumnosElement = document.createElement('table');                      // Crear el elemento <table>
        let tblBody = document.createElement("tbody");
            
            // Creamos la primera fila
            const encabezadoTabla=['Alumno', 'DAW', 'DIW', 'DWEC','DWES', 'EIE','IT2','FCT','PROYECTO']
            let hileraEncabezado =document.createElement("tr");
            encabezadoTabla.forEach (item =>{
                let celdaEncabezado = document.createElement("th");
                let textoCeldaEncabezado=document.createTextNode(item);
                celdaEncabezado.appendChild(textoCeldaEncabezado);
                hileraEncabezado.appendChild(celdaEncabezado);
            });
            tblBody.appendChild(hileraEncabezado);

            // Crea resto de filas/hileras.
            notasAlumnos.forEach(item =>{
                let hilera =document.createElement("tr");
                let celda1 =document.createElement("td");
                let textoCelda1 =document.createTextNode(item.nombre);
                celda1.appendChild(textoCelda1);
                hilera.appendChild(celda1);
                for(let i=0; i<item.notas.length; i++){
                    //Vamos a ir creando cada fila
                    let celda =document.createElement("td");
                    
                    
                    
                    if (typeof(item.notas[i]) === 'boolean'){  // Verificamos si el tipo es booleano
                        let textoCelda =document.createTextNode(item.notas[i]? 'Apto' : 'No apto');
                        celda.appendChild(textoCelda);
                    } else{
                        //let textoCelda =document.createTextNode(item.notas[i]);   //Quita el decimal cuando es .0
                        // let textoCelda = document.createTextNode(item.notas[i].toFixed ? item.notas[i].toFixed(1) : item.notas[i]); // Comprobamos si item.notas[i] tiene el método toFixed.
                        let textoCelda = document.createTextNode(item.notas[i].toFixed(1));
                        celda.appendChild(textoCelda);
                    }              



                    //celda.appendChild(textoCelda);  //aquí no funciona porque está fuera del ambito del if donde se define textoCelda
                    hilera.appendChild(celda);
                }
                tblBody.appendChild(hilera);
            })
            
            
        
        tableNotasAlumnosElement.appendChild(tblBody);     // posiciona el <tbody> como hijo del elemento <table>
            
    sectionNotasAlumnos.appendChild( tableNotasAlumnosElement); // añadimos <table> dentro de <section id='notas-alumnos'
            
    tableNotasAlumnosElement.setAttribute("border", "2"); // modifica el atributo "border" de la tabla y lo fija a "2";

notasAlumnosSectionElement.appendChild(tableNotasAlumnosElement);
