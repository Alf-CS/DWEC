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
 
const empleado = {
    nombre: "Juan Pérez",  
    admin: true,           
	salario : {
		valor: 100,
		impuestos: 40,       //40 %
	},
	cargos:[]    // plural es que hay más de uno?  --> hacemos un array
};

console.log(empleado);


/**
 * Apartado 2
 * Añade al objeto las funciones:
 * calculaTotal: Calculará el coste total del trabajador
 * clon: Devolverá una copia del objeto
 * Muestra el coste total del trabajador llamando a la función calculaTotal.
 */
console.log('--------------- APARTADO 2 -----------------');

empleado.calculaTotal= function(){
	return (this.salario.valor)*(1+this.salario.impuestos/100);
}

/*
empleado.clon = function() {
    return { ...this };  // Utilizando el operador de propagación para clonar el objeto
	// pero esto sólo hace una COPIA SUPERFICIAL. Las referencias al objeto salario y al método calculaTotal son las mismas.
	// Se ha comprobado con unas "cuantas" pruebas que salario y calculaTotal son siempre las del objeto "empleado" original
};
*/

// Necesitamos clonar los objetos y funciones dentro del objeto.
empleado.clonar = function() {
    const clon = {
        ...this,  // Clona las propiedades de nivel superior
        salario: { ...this.salario },  // Ahora "reasignamos" o "movemos" la referencia a una nueva copia del objeto anidado "salario"
        calculaTotal: this.calculaTotal  // Cambiamos referencia a una copia (en posición de memoria distinta) de "calculaTotal"
		//No sería mejor NO CLONAR las funciones o métodos? - Se suponen que son iguales para todos los objetos de la "clase"
    };
    return clon;
};

//Clonamos un empleado2
const empleado2=empleado.clonar();
empleado2.salario.valor = 200;     // Vamos a cambiar el salario del empleado2 para distinguirlos en la salida.
// OJO con hacer empleado2.salario=200, que cambiamos el objeto por un valor numérico y SE LÍA PARDA.

let costeTotal=empleado.calculaTotal();
//costeTotal=empleado.calculaTotal();
console.log("Coste total del empleado 1: " + costeTotal);


// let costeTotal2=empleado2.calculaTotal();
console.log("Coste total del empleado 2: " + empleado2.calculaTotal());
// Pero también puedo hacer ahora:
// costeTotal=empleado2.calculaTotal();
// console.log("Coste total del empleado 2 : " + costeTotal);



/**
 * Apartado 3
 * Crea una función constructora parametrizable que creen objetos equivalentes a los dos puntos anteriores. Tras ello:
 * - Crea un nuevo objeto
 * - Clonalo
 * - Modifica la propiedad valor del segundo objeto
 * - Imprime ambos objetos
 */

console.log('--------------- APARTADO 3 -----------------');

function empleadoParametros(nombre, admin, salarioValor, salarioImpuestos) {
    this.nombre = nombre;
    this.admin = admin;
    this.salario = {                 // Asignamos "salario" como un objeto con dos propiedades: valor e impuestos
        valor: salarioValor,         // Valor del salario
        impuestos: salarioImpuestos  // Porcentaje de impuestos
    };
    
    // Método para calcular el salario con impuestos
    this.calculaTotal = function() {
        return(( this.salario.valor) * (1 + this.salario.impuestos / 100));
    };
  
    this.clonar = function() { // Función de clonación
        // Clonamos las propiedades del objeto y su salario
        const clon = new empleadoParametros(
            this.nombre,
			this.admin,
            this.salario.valor,
            this.salario.impuestos
        );  
		// Como estamos llamando a una funcion parametrizable con los parámetros que queremos clonar
		// y esta función parametrizable ya incluye las funciones calculaTotal y clonar
		// NO ES NECESARIO que las clonemos. ??
		// pero ahora cada objeto va a tener sus funciones "propias" --> copias de lo mismo para cada uno
		// Es una especie de FUNCIÓN RECURSIVA.
		       
        return clon; // Devolvemos el objeto clonado.
    };
}

// Creación de objetos usando la función constructora
const empleadoA = new empleadoParametros("Antonio Gómez", true, 1000, 21);

// Clonamos el objeto
const empleadoB = empleadoA.clonar();
empleadoB.salario.valor=2000;


console.log("Empleado por parametros original:", empleadoA, empleadoA.calculaTotal());  // Calcula salario con 21% de impuestos
console.log("Empleado clonado por parametros", empleadoB, empleadoB.calculaTotal());  // Salario con el nuevo valor en el clonado.




/**
 * Apartado 4
 * Añade la propiedad vehiculo con los campos tipo y matricula solo al primer objeto del apartado 3. Muestra
 * la matrícula de ambos objetos del apartado 3 sin que el motor JS lance errores y sin usar control de flujo.
 */

console.log('--------------- APARTADO 4 -----------------');

empleadoA.vehiculo={"tipo":"coche", "matricula":"1234BCD"};
empleadoB.vehiculo={"tipo":"", "matricula":""};
console.log("El vehículo que conduce ", empleadoA.nombre, " es un ", empleadoA.vehiculo["tipo"], " con matrícula: ",empleadoA.vehiculo["matricula"]);
console.log("El vehículo que conduce ", empleadoB.nombre, " es un ", (empleadoB.vehiculo["tipo"]&& (empleadoB.vehiculo)), " con matrícula: ",empleadoB.vehiculo["matricula"]);


/**
 * Apartado 5
 * Itera todas las propiedades del objeto y muestra las que sean de tipo numérico, texto o boleanas. Omite las
 * de los objetos anidados.
 */

console.log('--------------- APARTADO 5 -----------------');

function muestraPropiedadesSimples(varEmpleado){
	for (const clave in varEmpleado){
		// if ( (typeof(varEmpleado[clave])!=="function") && (typeof(varEmpleado[clave])!=="object")){
		if 	( 	(typeof(varEmpleado[clave])=="string") || 
				(typeof(varEmpleado[clave])=="num")  ||
			 	(typeof(varEmpleado[clave])=="boolean") ){
					console.log(clave, varEmpleado[clave], typeof(varEmpleado[clave]));	
		}
	}
}

muestraPropiedadesSimples(empleadoA);



