'use strict';

/**
 * Apartado 1
 * Completa la función para que extraiga hashtags y menciones de una cadena de texto empleando expresiones regulares.
 * La función devolverá un objeto con 2 arrays: hashtags y menciones. 
 */

console.log('--------------- APARTADO 1 -----------------');

const textoExtraer = '¡Hola @juan! ¿Viste el nuevo #tutorial de #JavaScript? #programacion @developer';

function extraerHashtagsMenciones(texto) {
    // Usamos expresiones regulares para hashtags y menciones
    const hashtags = texto.match(/#[\w]+/g) || [];   //match devuelve un array SIEMPRE. Si no encuentra nada-> NULL, devolvemos un array vacío.
    // #[\w]+: Encuentra cualquier cadena que empiece con # seguida de caracteres alfanuméricos (mayúsculas, minúsculas, números y _).
    // MODIFICADOR /g GLOBAL para que no se quede solo con la primera coincidencia.
    const menciones = texto.match(/@[\w]+/g) || [];
    // @[\w]+: Encuentra cualquier cadena que empiece con @ seguida de caracteres alfanuméricos (mayúsculas, minúsculas, números y _).
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
    
    // Tenemos tres formatos posibles de fecha que se corresponden con las expresiones regulares:
    const formato1 = /^(\d{2})\/(\d{2})\/(\d{4})$/;                     // DD/MM/AAAA
    const formato2 = /^(\d{2})-(\d{2})-(\d{4})$/;                       // MM-DD-AAAA
    const formato3 = /^(\d{4})\.(\d{2})\.(\d{2})$/;                     // AAAA.MM.DD
    // Es prácticamente lo mismo, pero solo se van a diferenciar por el separador (/ - .)
    // Hay que asociar cada grupo a lo que representa, DIA, MES o AÑO.

    let dia=1;
    let mes=0;
    let año=2024;      

    let fechaCompleta="";
    let d="";
    let m="";
    let a="";

    // Validar formato DD/MM/AAAA
    if (formato1.test(fecha)) {
        [fechaCompleta, d, m, a] = fecha.match(formato1);
                /* OJO AQUÍ, cuando se utiliza el método .match() con una expresión regular que contiene grupos de captura,
                el array que se devuelve incluye además de las coincidencias capturadas, 
                TAMBIÉN el patrón completo coincidente como el primer elemento del array.*/
    }
    // Validar formato MM-DD-AAAA
    else if (formato2.test(fecha)) {
        [fechaCompleta, m, d, a] = fecha.match(formato2);
    }
    // Validar formato AAAA.MM.DD
    else if (formato3.test(fecha)) {
        [fechaCompleta, a, m, d] = fecha.match(formato3);
    } else {
        return null; // Si no coincide con ninguno de los formatos, retorna NULL
    }
    // Si ha coincidido algún formato, pasamos a montar un objeto DATE. Pasamos d, m, a que son STRINGS a dia, mes, año, INTEGERS.
    

    dia = parseInt(d);
    mes = parseInt(m) - 1; // OJO -- Los meses van de 0 a 11 en JavaScript
    año = parseInt(a);

    // Creamos Objeto Date
    const fechaObj = new Date(año, mes, dia);                               // BORRAR // TEST; console.log(fechaObj);

    // Comprobar si la fecha es válida (si hay números incorrectos, habrá construido un objeto incorrecto, por "DESBORDAMIENTO"  45/27/2020 --> 14/04/2022 p.ej)
    if (fechaObj.getFullYear() === año && 
        fechaObj.getMonth() === mes && 
        fechaObj.getDate() === dia) {                                       //BORRAR    // TEST; console.log('fecha: '); console.log(fechaObj);
        return fechaObj; // Fecha válida

    }  else {
        return null;  // Si el objeto DATE construido es incorrecto, devolvemos un NULL
    }

    // SE PUEDE AÑADIR UN MÉTODO DE VALIDACION QUE COMPRUEBE ENTRE FECHAS, PARA TENER UN RANGO DE AÑOS --> PENDIENTE
}

console.log(validarFecha('23/09/2024')); // Salida: Date object
console.log(validarFecha('09-23-2024')); // Salida: Date object
console.log(validarFecha('2024.09.23')); // Salida: Date object
console.log(validarFecha('31/02/2024')); // Salida: null
// console.log(validarFecha('45/27/2020')); // Salida: null

/**
 * Apartado 3
 * Completa la función para que permita validar URL empleando expresiones regulares, 
 * el formato es: <PROTO>://<HOST>[:<PORT>]/[PATH][?PARAM1=VALOR1[&PARAM2=VALOR2]]
 */

console.log('--------------- APARTADO 3 -----------------');


function validarURLMareMagnum(url) {
    // Expresión regular para la URL
    const expReg= /^(https?:\/\/)?((([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})+)+(:\d+)?(\/[\w\-\/]*)?(\?([\w\-]+=[\w\-]+(&[\w\-]+=[\w\-]+)*)?)?$/;
    // const expReg = /(https?:\/\/)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(:\d+)?(\/[\w\-\/]*)?(\?([\w\-]+=[\w\-]+(&[\w\-]+=[\w\-]+)*)?)?/;
    // const expReg = /^(https?:\/\/)?([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+)(:\d+)?(\/[\w\-\/]*)?(\?([\w\-]+=[\w\-]+(&[\w\-]+=[\w\-]+)*)?)?$/;
    return expReg.test(url); // Retorna true si la URL coincide con la expresión regular
}


function validarURL(url) {
    // Definimos partes de la expresión regular como variables
    const proto = 'https?:\\/\\/'; // Protocolo (http o https)  //OJO - NECESITAMOS UN '\' PARA EL '\'; PATRON: http:// o https://
    const host = '[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+'; // Dominio (mínimo 2 partes)
    const puerto = '(\\:\\d+)?'; // Puerto (opcional)  -- El '\\' delante de ':' es para asegurarnos, aunque funciona sin este ESCAPE.
    const path = '(\\/[\\w\\-\\/]*)?'; // Path (opcional) ¿Tiene que ser siempre la palabra PATH?? --> Cambiar
    const parametros = '(\\?([\\w\\-]+=[\\w\\-]+(&[\\w\\-]+=[\\w\\-]+)*)?)?'; // Parámetros (opcional)

    // Crear la expresión regular completa utilizando las variables
    // el formato es: <PROTO>://<HOST>[:<PORT>]/[PATH][?PARAM1=VALOR1[&PARAM2=VALOR2]]
    const expRegString = `^(${proto})?(${host})(${puerto})(${path})(${parametros})?$`;
    // IMPORTANTE - PONER '^' al principio y '$' al final para que considere TODA LA CADENA y no coincidencias parciales dentro de ella.
    // protocolo puede estar o no estar --> ?
    // dominio con mínimo 2 partes --> mínimo tiene que tener un '.'

    const expReg = new RegExp(expRegString);                // Convertimos la cadena a una expresión regular con el constructor RegExp
    return expReg.test(url);                                // Retorna true si la URL coincide con la expresión regular
}

console.log(validarURL("https://example.com")); // Salida: true
console.log(validarURL("https://example.com:8080/")); // Salida: true
console.log(validarURL("https://example.com/path")); // Salida: true
console.log(validarURL("https://example.com/path?arg1=1")); // Salida: true
console.log(validarURL("https://example.com/path?arg1=1&arg2=2")); // Salida: true
console.log(validarURL("invalid-url")); // Salida: false
// console.log(validarURL("https://otro.ex?ample.com/path")); // Salida:false
// console.log(validarURL("https://good-example.com/path")); // Salida: true

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


function analizarLineaLog(log) {    // Expresión regular para extraer la información de UNA LINEA del log
    const regex = /^(\d+\.\d+\.\d+\.\d+) - - \[(.+)\] "(GET|POST|PUT|DELETE) (.+?) HTTP\/[0-9.]+" (\d{3}) (\d+|-)$/;
    const match = log.match(regex); // Vemos si la expresión regular coincide con el log
    
    if (match) {  // Si coincide, devolvemos un objeto con las propiedades extraídas
        return {  /* OJO, el número dentro de match[n] corresponde al orden de los paréntesis de captura en la expresión regular, no al contenido general de la expresión. */
            ip: match[1],                               // IP  (\d+\.\d+\.\d+\.\d+)
            hora: match[2],                             // Fecha y hora (.+)
            metodo: match[3],                           // El método HTTP (GET, POST, PUT, DELETE)  (GET|POST|PUT|DELETE)
            url: match[4],                              // URL  (.+?)
            código: parseInt(match[5]),                 // Código             (\d{3}) 
            tamaño: parseInt(match[6])                  // Tamaño (\d+|-)
        };
    } else {
        return null; // Si no coincide con el formato esperado, devuelve null
    }
}

function analizarLogs(logs) {               // return { ip: '', hora: '', metodo: '', url: '', status: 0, tamano: 0 };
    let returnObj = [];                         // Inicializamos array para almacenar los resultados
    logs.forEach(log => {                       // Recorremos cada log en el array 'logs'
        returnObj.push(analizarLineaLog(log));  // Añadimos el resultado de analizar cada línea del log
    });

    return returnObj;
}
/*
const resultado = analizarLogs(logs);

console.log(resultado);*/

const logObj = analizarLogs(logs);

console.log(logObj);



