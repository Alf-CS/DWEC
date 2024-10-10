'use strict';

/**
 * Apartado 1
 * Completa la función para que extraiga hashtags y menciones de una cadena de texto empleando expresiones regulares.
 * La función devolverá un objeto con 2 arrays: hashtags y meciones. 
 */

console.log('--------------- APARTADO 1 -----------------');

const textoExtraer = '¡Hola @juan! ¿Viste el nuevo #tutorial de #JavaScript? #programacion @developer';

function extraerHashtagsMenciones(texto) {
    // Usamos expresiones regulares para hashtags y menciones
    const hashtags = texto.match(/#[\w]+/g) || [];   //match devuelve un array SIEMPRE. Si no encuentra nada-> NULL, devolvemos un array vacío.
    // #[\w]+: Encuentra cualquier cadena que empiece con # seguida de caracteres alfanuméricos (mayúsculas, minúsculas, números y _).
    // MODIFICADOR /g GLOBAL para que no se quede solo con la primera coincidencia.
    const menciones = texto.match(/@[\w]+/g) || [];
    // @[\w]+: Encuentra cualquier cadena que empiece con # seguida de caracteres alfanuméricos (mayúsculas, minúsculas, números y _).
    return { hashtags, menciones };
}

console.log(extraerHashtagsMenciones(textoExtraer));

/**
 * Apartado 2
 * Crea una función que valida fechas en diferentes formatos y comprueba si son válidas:
 * DD/MM/AAAA
 * MM-DD-AAAA
 * AAAA.MM.DD
 * La función devolverá un objeto Date o null dependiendo de si la fecha es válida o no.
 */

console.log('--------------- APARTADO 2 -----------------');

function validarFecha(fecha) {
    
    return null;
}

console.log(validarFecha('23/09/2024')); // Salida: Date object
console.log(validarFecha('09-23-2024')); // Salida: Date object
console.log(validarFecha('2024.09.23')); // Salida: Date object
console.log(validarFecha('31/02/2024')); // Salida: null


/**
 * Apartado 3
 * Completa la función para que permita validar URL empleando expresiones regulares, 
 * el formato es: <PROTO>://<HOST>[:<PORT>]/[PATH][?PARAM1=VALOR1[&PARAM2=VALOR2]]
 */

console.log('--------------- APARTADO 3 -----------------');

function validarURL(url) {
    return false;
}

console.log(validarURL("https://example.com")); // Salida: true
console.log(validarURL("https://example.com:8080/")); // Salida: true
console.log(validarURL("https://example.com/path")); // Salida: true
console.log(validarURL("https://example.com/path?arg1=1")); // Salida: true
console.log(validarURL("https://example.com/path?arg1=1&arg2=2")); // Salida: true
console.log(validarURL("invalid-url")); // Salida: false

/**
 * Apartado 4
 * Crea una función para analizar logs del servidor y extraer la información como objetos con las siguientes propiedades:
 * - ip
 * - hora
 * - metodo (GET/POST/PUT/DELETE)
 * - url
 * - status
 * - tamaño
 * 
 * Transforma el array de cadena de logs en un array de objetos.
 */

console.log('--------------- APARTADO 4 -----------------');

const logs = [
    '127.0.0.1 - - [23/Sep/2024:10:29:04 +0000] "GET /index.html HTTP/1.1" 200 2326',
    '192.168.1.1 - - [23/Sep/2024:10:30:15 +0000] "POST /login HTTP/1.1" 302 1234',
    '203.0.113.5 - - [23/Sep/2024:10:31:22 +0000] "GET /about.html HTTP/1.1" 200 1024',
    '198.51.100.7 - - [23/Sep/2024:10:32:45 +0000] "PUT /api/data HTTP/1.1" 201 2048',
    '192.0.2.8 - - [23/Sep/2024:10:33:59 +0000] "DELETE /api/user/123 HTTP/1.1" 204 0'
];

function analizarLogs(log) {
    return { ip: '', hora: '', metodo: '', url: '', status: 0, tamano: 0 };
}

const logObj = [];

console.log(logObj);