'use strict';

/**
 * Apartado 1
 * Crea un objeto anónimo con las siguientes propiedades y los valores a tu elección:
 * - nombre
 * - admin (booleano)
 * - salario, que a su vez tendrá las propiedades:
 *   - valor 
 *   - impuestos (un porcentaje, 40% por ejemplo)
 * - cargos (plural!)
 */

console.log('--------------- APARTADO 1 -----------------');

const obj = {
    nombre: 'Pepe',
    admin: true,
    salario: {
        valor: 1800,
        impuestos: 40,
    },
    cargo: [ 'Desarrollador', 'Diseñador'],
};

/**
 * Apartado 2
 * Añade las funciones:
 * calculaTotal: Calculará el coste total del trabajador
 * clon: Devolverá una copia del objeto
 * Muestra el coste total del trabajador llamando a la función calculaTotal.
 */

console.log('--------------- APARTADO 2 -----------------');

obj.calculaTotal = function () {
    return (1 + this.salario.impuestos / 100) * this.salario.valor;
};

obj.clon = function () {
    return structuredClone(this);
}

console.log(obj.calculaTotal());


/**
 * Apartado 3
 * Crea una función constructora parametrizable equivalente a los dos puntos anteriores. Tras ello:
 * - Crea un nuevo objeto
 * - Clonalo
 * - Modifica la propiedad valor del segundo objeto
 * - Imprime ambos objetos
 */

console.log('--------------- APARTADO 3 -----------------');


function Trabajador(n, a = false, valor, impuestos, cargos) {
    this.nombre = n;
    this.admin = a;
    this.salario = { valor, impuestos };
    this.cargos = cargos;
    this.clon = function() { 
        return new Trabajador(this.nombre, this.admin, this.salario.valor, this.salario.impuestos, Array.from(this.cargos));
    }
    this.calculaTotal = function () {
        return (1 + this.salario.impuestos / 100) * this.salario.valor;
    }
}

const t1 = new Trabajador('Pepe', true, 1000, 40, ['Desarrollador', 'Diseñador']);
const t2 = t1.clon();
t2.salario.valor = 800;
console.log(t1, t2);

/**
 * Apartado 4
 * Añade la propiedad vehiculo con los campos tipo y matricula solo al primer objeto del apartado 3. Muestra
 * la matrícula de ambos objetos del apartado 3 sin que el motor JS lance errores y sin usar control de flujo.
 */

console.log('--------------- APARTADO 4 -----------------');
t1.vehiculo = { tipo: 'moto', matricula: '1234' };
console.log(t1.vehiculo?.matricula, t2.vehiculo?.matricula);

/**
 * Apartado 5
 * Itera todas las propiedades del objeto y muestra las que sean de tipo numérico, texto o boleanas. Omite las
 * de los objetos anidados.
 */

console.log('--------------- APARTADO 5 -----------------');
for (const p in t1) {
    if (typeof t1[p] === 'number' || typeof t1[p] === 'string' || typeof t1[p] === 'boolean') {
        console.log(p, t1[p]);
    }
}

/**
 * Apartado 6
 * Crea una función que reciba un objeto con las propiedades: admin y cargos empleando desestrucuturación de objetos. 
 * La función debe devolver true si alguno de los cargos empieza por 'Jefe'.
 */

console.log('--------------- APARTADO 6 -----------------');

function func({admin, cargos}) {
    for (let i = 0; i < cargos.lenght; i++) {
        if (cargos[i].startsWith('Jefe')) return true
    }
    return false;
}

console.log(func(t1))