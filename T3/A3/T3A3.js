'use strict';

/**
 * Apartado 1
 * Realiza los siguientes pasos (muestra por consola el resultado después de aplicar cada uno):
 * - Crea un array con 4 elementos
 * - Concatena 2 elementos más al final y 2 al principio
 * - Elimina las posiciones de la 3 a la 5 (ambas incluidas)
 * - Inserta 2 elementos más entre el penúltimo y el último
 * - Muestra el array del paso anterior, pero con los elementos separados por " ==> "
 */

console.log('--------------- APARTADO 1 -----------------');

let ejemploArray=["manzana", "pera", "plátano", "fresa"];
console.log(ejemploArray);
ejemploArray.push("piña","melón");
console.log(ejemploArray);
ejemploArray.splice(3,3);
console.log(ejemploArray);
ejemploArray.splice(ejemploArray.length - 1, 0, "mango", "albaricoque");
console.log(ejemploArray);
let cadena= ejemploArray.join (" ==> ");
console.log (cadena);


/**
 * Apartado 2
 * Crea una función que reciba como primer parámetro el nombre de un alumno, seguido
 * de un número indeterminado de notas (usa spread para agruparlas en un array).
 * Utiliza el método reduce para sumar las notas y calcula la media, que deberás mostrar por consola.
 * Posible llamada -> printMedia("Pepe", 4.25, 6, 8.5, 9)
 */

console.log('--------------- APARTADO 2 -----------------');

function printMedia(nombre, ...notas) {   // Todo lo que haya detrás de nombre será el array notas.
    let sumaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    
    // Calculamos la media
    let media = sumaNotas / notas.length;
    
    // Mostramos la media por consola
    console.log("La media de ", nombre,  " es: ", media);  // Falta formatear a 2 decimales.
}

// Probamos con el ejemplo:
printMedia("Pepe", 4.25, 6, 8.5, 9);



/**
 * Apartado 3
 * Crea un array de cadenas y ordénalo usando el método sort de mayor a menor longitud .
 * Imprime el array original (antes de ordenarlo) y el resultado.
 * Tras ello, utiliza el método toSorted y muestra las diferencias.
 */

console.log('--------------- APARTADO 3 -----------------');

let ejemploArray3 = ["manzana", "pera", "fresa", "melocotón", "plátano"];

console.log("Array original:", ejemploArray3);

// Definimos la función de ordenación según la longitud de la cadena
ejemploArray3.sort(function(a, b) {
  return b.length - a.length; // Compara la longitud de los elementos
});

console.log("Array ordenado por longitud (de mayor a menor):", ejemploArray3);
// vemos que el Array ha quedado ordenado

console.log('--------------- método toSorted() -----------------');
// si queremos conservar el Array original, es mejor utilizar el método toSorted, que hace una copia ordenada del Array de salida.
ejemploArray3 = ["manzana", "pera", "mango", "albaricoque", "plátano"];

console.log("Array original:", ejemploArray3);

// Usando toSorted() para crear una copia ordenada por longitud
let arrayOrdenado = ejemploArray.toSorted((a, b) => b.length - a.length);
console.log("Array original después de toSorted:", ejemploArray3);
console.log("Array ordenado por longitud (con toSorted):", arrayOrdenado);

/**
 * Apartado 4
 * Crea un array de números de más de una cifra. Mapea ese array en otro que sea la suma de las cifras de cada número. No puedes usar bucles.
 * Pista: Puedes convertir los números a cadena primero y después con Array.from(cadena) la transformas a array de caracteres (que puedes sumar)
 * Imprime el array original y el resultado
 */

console.log('--------------- APARTADO 4 -----------------');

let numeros = [23, 45, 57, 31, 54, 12];

console.log("Array original:", numeros);

// Mapear el array para obtener la suma de las cifras de cada número
let sumaCifras = numeros.map(num => {
  // Convertir el número en cadena y luego en array de caracteres
  let cifras = Array.from(num.toString());
  // Sumar los caracteres convertidos en números
  return cifras.reduce((acc, cifra) => acc + parseInt(cifra), 0);
});

console.log("Array con la suma de las cifras:", sumaCifras);


/**
 * Apartado 5
 * A partir del siguiente array que contiene productos con mensajes sobre los mismos:
 * - Filtra los mensajes que empiecen por ERROR (usa el método startsWith).
 * - Después recórrelos y mételos en un objeto Map cuya clave sea el nombre del producto
 * y cuyo valor sea un array con los mensajes de error asociados al producto.
 * - Recorre el objeto Map mostrando, para cada producto, que errores tiene asociados.
 */

console.log('--------------- APARTADO 5 -----------------');

let mensajes = [
    ['Silla', 'ERROR: Stock no coincide'],
    ['Mesa', 'Pedido de 2 unidades'],
    ['Silla', 'ERROR: El precio no puede ser menor a 1'],
    ['Mesa', 'ERROR: No se pueden enviar 0 unidades'],
    ['Cama', 'ERROR: El fabricante no tiene ese modelo'],
    ['Silla', 'Se ha borrado el producto de la base de datos'],
    ['Mesa', 'ERROR: El stock no puede ser negativo']
];

// Filtrar solo los mensajes con "ERROR"
let mensajesError = mensajes.filter(linea => linea[1].startsWith('ERROR'));

console.log("Mensajes de error:");
console.log(mensajesError);


// Crear un Map para agrupar los mensajes por producto
let erroresMap = new Map();

mensajesError.forEach(([producto, error]) => {
    if (!erroresMap.has(producto)) {
        erroresMap.set(producto, []);  // la primera vez que encontramos un producto, lo metemos en el Map
    }
    // Añadimos el error al array del producto
    erroresMap.get(producto).push(error);
});

// Imprimir el Map
erroresMap.forEach((errores, producto) => {
    console.log("Producto: ", producto);
    let listaErrores=errores.join(', ');
    console.log("Mensajes de error: ", listaErrores);
});



/**
 * Apartado 6
 * Crea una función calcule el área de un triángulo. Esta función recibirá 3 parámetros:
 * 2 lados del triángulo, y el ańgulo entre ellos (en grados).
 * Para calcular el área con estos datos debemos aplicar la fórmula: (1/2)*lado1*lado2*seno(ángulo).
 * Debes tener en cuenta que para aplicar la fórmula, el ángulo debe estar en radianes. Para pasarlo
 * a radianes lo multiplicamos por PI y dividimos entre 180.
 */

console.log('--------------- APARTADO 6 -----------------');


function calcularAreaTriangulo(lado1, lado2, anguloGrados) {
    // Pasamos el ángulo de grados a radianes
    let anguloRadianes=convertirGradosRadianes(anguloGrados);
    // Calculamos el área usando la fórmula
    const area = (1 / 2) * lado1 * lado2 * Math.sin(anguloRadianes);
    return area;
}

function convertirGradosRadianes(anguloGrados){
    return anguloGrados * Math.PI / 180;
}

// Prueba de código
const lado1 = 5;
const lado2 = 7;
const angulo = 30; // en grados

const area = calcularAreaTriangulo(lado1, lado2, angulo);
console.log("`El área del triángulo es: ",  area);         // Falta redondear a 2 decimales.


/**
 * Apartado 7
 * Crea una función que reciba una cadena con una fecha en formato "YYYY-MM-DD". Muestra la fecha (ej: 2019-02-28) con
 * el siguiente formato: Jueves, 28 de Febrero de 2019.
 * Debes formatear la fecha usando los métodos de la clase Date para obtener, día de la semana, día del mes, mes, y año.
 * No puedes usar librerías como moment.js para ayudarte.
 * Para mostrar el nombre del mes o del día de la semana, puedes crearte un array que los contenga (los días de la semana empiezan por domingo -> 0)
 * Métodos de la clase Date: https://www.w3schools.com/jsref/jsref_obj_date.asp
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 7 -----------------');

function formatearFecha(fechaStr) {
    // Crear un objeto Date a partir de la cadena
    const fecha = new Date(fechaStr);

    // Verificar si la fecha es válida
    if (isNaN(fecha)) {
        return "Fecha inválida";
    }

    // Obtener los componentes de la fecha
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]; //Días de la semana empiezan en Domingo
    const diaSemana = diasSemana[fecha.getDay()];
    const dia = fecha.getDate();
    const mes = fecha.toLocaleString('default', { month: 'long' }); // Obtener el nombre del mes
    const año = fecha.getFullYear();

    // Formatear y devolver la fecha
    return `${diaSemana}, ${dia} de ${mes} de ${año}`;
}

// Ejemplo de uso
let fechaInput = "2024-09-29";
console.log(formatearFecha(fechaInput));

fechaInput = "1970-02-03";
console.log(formatearFecha(fechaInput));

fechaInput = "2024-12-31";
console.log(formatearFecha(fechaInput));

fechaInput = "2012-07-23";
console.log(formatearFecha(fechaInput));