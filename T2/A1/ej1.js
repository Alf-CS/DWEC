'use strict';

/**
 * Apartado 1
 * Crea una función que reciba 2 cadenas por parámetro. Dicha función imprimirá por consola qué cadena
 * tiene mayor longitud. Si el tipo de algún parámetro no es string (typeof param !== "string"),
 * debes imprimir un error.
 * Llama a la función 3 veces con diferentes parámetros. En una de esas llamadas pásale por parámetro un valor que no sea string.
 */

console.log('--------------- APARTADO 1 -----------------');

function tieneMayorLongitud (string1, string2) {
    var error=false;
    
    if (typeof string1 !=="string") {
        console.error (string1 + " no es del tipo string");
        error=true;
        }
    if (typeof string2!=="string") {
        console.error (string2 + " no es del tipo string");
        error=true;
        }
    if (error==true) return;

    if (string1.length  > string2.length) {
        console.log(string1 + " es la más larga") 
    } else if (string2.length > string1.length){
        console.log(string2 + " es la más larga")}    
        else {console.log ("las dos cadenas son iguales")};
}

tieneMayorLongitud ("hola", "adios");
tieneMayorLongitud ("Hola", 1234);
tieneMayorLongitud ("hasta luego", "adios");
// tieneMayorLongitud ("Sayonara, baby", "hasta luego");


/**
 * Apartado 2
 * Crea una función que reciba 2 números por parámetro, el primer número indicará cuantas veces debemos imprimir el segundo
 * por pantalla, pero en cada iteración muéstra el valor anterior multiplicado por 2.
 * Ejemplo: Si recibimos 4 y 6 imprimiremos: 6 12 24 48
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 2 -----------------');

function por2_n_veces (veces, num){
    let i = 0; 
    let salida="";
    while (i < veces) { 
        salida= salida + num + " ";
        num=num*2;
        i++
    }
		console.log (salida);
}
console.log ("por2_n_veces(4,6)");
por2_n_veces (4,6);
console.log ("por2_n_veces(3,7)");
por2_n_veces (3,7);
console.log ("por2_n_veces(7,3)");
por2_n_veces (7,3);


/**
 * Apartado 3
 * Crea una función que reciba 2 parámetros. El primero será una cadena y el segundo otra cadena que contendrá un caracter.
 * Convierte ambos parámetros a cadena y comprueba que efectivamente, el segundo parámetro tiene una longitud de 1.
 * Debes mostrar cuantas veces aparece el caracter recibido en la cadena.
 * Ejemple: Si recibimos "carcasa" y "a", debemos indicar que aparece 3 veces dicha letra en la cadena.
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 3 -----------------');

function estaEn (cadena, char){
    cadena= cadena.toString();  //  es mejor haciendo un "cast" ?? cadena =String(cadena);
    char=String(char);                                       // char =String (char);


    if (char.length !== 1) {
        console.error (char + " tiene que ser un único carácter");
        return;
        }
   // Contamos cuántas veces aparece el caracter en la cadena
    let veces = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == char) {
            veces++;
        }
    }

    console.log("El caracter '" + char + "' aparece " + veces+ " veces en la cadena '"+ cadena+"'");
}

// Llamadas a la función con diferentes ejemplos
estaEn ("carcasa", "a");  // Debe indicar que aparece 3 veces
estaEn ("Hola Mundo", "o");  // Debe indicar que aparece 2 veces
estaEn ("errores de código", "o");  // Debe indicar que aparece 2 veces - la acentuada no cuenta 






/**
 * Apartado 4
 * Crea una función que reciba 3 parámetros (nombre de producto, precio e impuesto en porcentaje sobre 100).
 * Dicha función hará lo siguiente:
 * - Los parámetros deberán tener un valor por defecto por si no los recibe que deben ser: "Producto genérico", 100 y 21.
 * - Convierte el nombre de producto a string (por si acaso) y los otros 2 a número. Si el precio o el impuesto no son
 *   numéros válidos (NaN) muestra un error. Si son válidos, muestra por consola el nombre del producto y el precio final contando impuestos.
 * - Llama a la función varias veces, omitiendo parámetros, con todos los parámetros, y pasándo algún valor no númerico en el precio o impuesto.
 */

console.log('--------------- APARTADO 4 -----------------');

function calcularPrecioIVA(nombreProducto = "Producto genérico", precio = 100, impuesto = 21) {

    // Convertimos el nombre a cadena y los otros parámetros a número
    nombreProducto = nombreProducto.toString();
    precio = Number(precio);
    impuesto = Number(impuesto);

    // Comprobación de que se han pasado números.
    if (isNaN(precio) || isNaN(impuesto)) {
        console.error("Error: El precio y el impuesto tienen que ser valores numéricos.");
        return;
    }
    

    // Calculamos el precio final incluyendo el impuesto
    let precioIVA = precio + (precio * (impuesto / 100));

    // Mostramos el resultado por consola
    console.log(nombreProducto+ " tiene un precio final de "+ precioIVA.toFixed(2)+ " € (incluyendo un IVA del " + impuesto + " %");
}

// Llamadas a la función
calcularPrecioIVA();  // Usará los valores por defecto
calcularPrecioIVA("Horno", 1000, "iva10");
calcularPrecioIVA("Laptop", 1000, 10);  // Pasa todos los parámetros


/**
 * Apartado 5
 * Crea una función de tipo flecha (arrow function) que reciba 2 parámetros. Una cadena completa y un trozo de cadena a buscar.
 * La función debe comprobar si el trozo de cadena de búsqueda se encuentra dentro de la cadena completa e imprimir
 * por consola un mensaje indicando si ha encontrado coincidencia o no.
 * La búsqueda no debe ser sensible a mayúsculas o minúsculas, por lo que debes comparar ambas cadenas previa transformación
 * a minúsculas (o a mayúsculas). Ej: La cadena "Santiago de Compostela" contiene la cadena de búsqueda "COMPO".
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 5 -----------------');

const verificarCadena = (cadena, fragmento) => {
    // Convertimos ambas cadenas a minúsculas para que la búsqueda no sea sensible a mayúsculas o minúsculas
    const cadenaMinusculas = cadena.toLowerCase();
    const fragmentoMinusculas = fragmento.toLowerCase();

    // Comprobamos si el trozo de cadena está dentro de la cadena completa
    if (cadenaMinusculas.includes(fragmentoMinusculas)) {
        console.log("La cadena "+ cadena + " contiene el fragmento "+ fragmento);
    } else {
        console.log(fragmento + " NO APARECE eN "+ "la cadena "+ cadena);
    }
};

// Llamadas a la función con diferentes ejemplos
verificarCadena("Santiago de Compostela", "COMPO");  // Tiene que encontrar coincidencia
verificarCadena("Hola Mundo", "mundo");  // tiene que haber coincidencia
verificarCadena("En un lugar de la Mancha", "sitio");  // No hay coincidencia


