'use strict';

/**
 * Apartado 1
 * Crea una función que reciba 2 cadenas por parámetro. Dicha función imprimirá por consola qué cadena
 * tiene mayor longitud. Si el tipo de algún parámetro no es string (typeof param !== "string"),
 * debes imprimir un error.
 * Llama a la función 3 veces con diferentes parámetros. En una de esas llamadas pásale por parámetro un valor que no sea string.
 */

console.log('--------------- APARTADO 1 -----------------');

function apartado1(s, t) {
    if (typeof s !== 'string' || typeof t !== 'string') {
        console.error('Los parámetros no son strings');
    } else if (s.length >= t.length) {
        console.log(s);
    } else {
        console.log(t);
    }
}

apartado1('hola', 'adios');
apartado1('igual', 'adios');
apartado1(3, 'hola');


/**
 * Apartado 2
 * Crea una función que reciba 2 números por parámetro, el primer número indicará cuantas veces debemos imprimir el segundo
 * por pantalla, pero en cada iteración muéstra el valor anterior multiplicado por 2.
 * Ejemplo: Si recibimos 4 y 6 imprimiremos: 6 12 24 48
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 2 -----------------');

function apartado2(num1, num2) {
    for (let i = 0; i < num1; i++) {
        console.log(num2);
        num2 *= 2;
    }
}

apartado2(4, 6);
apartado2(8, 1);

/**
 * Apartado 3
 * Crea una función que reciba 2 parámetros. El primero será una cadena y el segundo otra cadena que contendrá un caracter.
 * Convierte ambos parámetros a cadena y comprueba que efectivamente, el segundo parámetro tiene una longitud de 1.
 * Debes mostrar cuantas veces aparece el caracter recibido en la cadena.
 * Ejemple: Si recibimos "carcasa" y "a", debemos indicar que aparece 3 veces dicha letra en la cadena.
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 3 -----------------');

function apartado3(s, c) {
    const str = '' + s;
    const chr = String(c);

    if (chr.length !== 1) {
        console.error('El segundo parámetro debe tener una longitud de 1');
    } else {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === chr) count++;
        }
        console.log(count);
    }
}

apartado3('carcasa', 'a');
apartado3('barbudo', 'b');
apartado3('Capataz', 'z');
apartado3('hola', 'x')

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

function apartado4(n, p = 100, i = 21) {
    n = String(n);
    p = +p;
    i = +i;
    if (isNaN(p) || isNaN(i)) {
        console.error('El precio o el impuesto no son válidos');
    } else {
        console.log(`El nombre del producto es ${n} y el precio final es ${(p * (1 + i / 100)).toFixed(2)}`);
    }
}

apartado4()
apartado4('Cama', 200);
apartado4('Mesa', 130, 10);
apartado4('Mesa', 130, 'hola');

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

const apartado5 = (str, sub) => {
    if (str.toLowerCase().includes(sub.toLowerCase())) {
        console.log('Coincide');
    } else {
        console.log('No coincide');
    }
}

apartado5('Santiago de Compostela', 'COMPO');
apartado5('Santiago de Compostela', 'compo');
apartado5('Santiago de Compostela', 'Compo');
apartado5('Santiago de Compostela', 'COMPOO');