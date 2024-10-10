/**
 * Apartado 1
 * Crea una clase Usuario con los atributos:
 * - usuario
 * - contraseña
 * - curso
 * El método: 
 * - cambiarPassword: Recibirá la contraseña vieja y una nueva. Si la contraseña vieja coincide y la nueva es segura, será cambiada. Devolverá un boleano informando de si ha tenido éxito.
 * Y el método estático y privado:
 * - passwordSegura: Recibirá una contraseña y devolverá true si la contraseña tiene al menos 8 caracteres, 1 mayúscula, 1 minúscula, 1 número, sin espacios.
 */

class Usuario {
    // Constructor de la clase
    constructor(usuario, contraseña, curso) {
        this.usuario = usuario;       // Nombre de usuario
        this.contraseña = contraseña; // Contraseña del usuario
        this.curso = curso;           // Curso en el que está inscrito
    }

    // Método para mostrar la información del usuario (sin la contraseña por seguridad)
    mostrarInfo() {
        console.log(`Usuario: ${this.usuario}, Curso: ${this.curso}`);
    }

    cambiarPassword(contraseñaVieja, nuevaContraseña) {
        // Verificar si la contraseña vieja es correcta
        if (this.contraseña !== contraseñaVieja) {
            console.log("Error: La contraseña antigua no coincide.");
            return false;
        }

        /* Validar que la nueva contraseña sea segura (ejemplo: al menos 8 caracteres)
        if (nuevaContraseña.length < 6) {
            console.log("Error: La nueva contraseña no es segura. Debe tener al menos 6 caracteres.");
            return false;
        } */

        // Validar que la nueva contraseña sea segura usando el método passwordSegura
        if (Usuario.passwordSegura(nuevaContraseña)) {  // (método estático de la clase Usuario y privado (tenemos que usar #)
            
            //  Si la contraseña es segura - cumple todas las validaciones: cambiamos contraseña
            this.contraseña = nuevaContraseña;
            console.log("La contraseña ha sido actualizada correctamente.");
            return true;}
        else{
                console.log(
                    "Error: La nueva contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula, un número y no debe contener espacios."
                );
                return false;
        }
    }

    // APARTADO 1 HA FUNCIONADO CORRECTAMENTE CON LA LÍNEA SIGUIENTE
    // static #passwordSegura(nuevaContraseña) {  // static hace al método de la clase; # lo hace privado.
    
    // PARA EL APARTADO 2 HAY QUE QUITAR EL "#" para que sea accesible por la clase 'Controlador'
    static passwordSegura(nuevaContraseña) {  // static hace al método de la clase; como no está "#" lo hace público.
        // Suponemos que NO se cumplen las condiciones hasta que veamos que sí.
        let tieneMayuscula = false;     
        let tieneMinuscula = false;
        let tieneNumero = false;
        let tieneEspacios = false;

        // Comprobamos que la contraseña tenga al menos 8 caracteres para seguir con el resto de comprobaciones.
        if (nuevaContraseña.length < 8) {
            return false;
        }

        // Iteramos sobre cada carácter de la contraseña nueva
        for (let i = 0; i < nuevaContraseña.length; i++) {
            const char = nuevaContraseña[i];

            // Comprobar si hay una mayúscula, comprobación de valor por código ASCII.
            if (char >= 'A' && char <= 'Z') {
                tieneMayuscula = true;
            }
            // Es más efectivo que montar un array [A..Z] y comprobar sobre la cadena

            // Comprobar si hay una minúscula
            if (char >= 'a' && char <= 'z') {
                tieneMinuscula = true;
            }

            // Comprobar si hay un número
            if (char >= '0' && char <= '9') {
                tieneNumero = true;
            }

            // Comprobar si el carácter es un espacio
            if (char == ' ') {
                tieneEspacios = true;
            }

        }

        // Devolvemos true solo si se cumplen todas las condiciones
        return tieneMayuscula && tieneMinuscula && tieneNumero && (!tieneEspacios);
    }
}



// Creación de un nuevo objeto Usuario
const usuario1 = new Usuario("Juan Pérez", "12345", "DWEC");

// Pruebas de código
console.log ("---------MOSTRAMOS INFORMACION DEL USUARIO----------");
usuario1.mostrarInfo();
console.log ("---------COMPROBAMOS CAMBIO DE CONTRASEÑA----------");
console.log ("---------NUEVA CONTRASEÑA 'abcde' no funciona----------");
usuario1.cambiarPassword("12345", "abcde");

console.log ("---------NUEVA CONTRASEÑA 'A1bcde' no funciona----------");
usuario1.cambiarPassword("12345", "A1bcde");

console.log ("---------NUEVA CONTRASEÑA 'Abcdefghi' no funciona----------");
usuario1.cambiarPassword("12345", "Abcdefghi");

console.log ("---------NUEVA CONTRASEÑA 'Abc 1defghi' no funciona----------");
usuario1.cambiarPassword("12345", "Abc 1defghi");

console.log ("---------NUEVA CONTRASEÑA '1Abcdefghi' FUNCIONA----------");
usuario1.cambiarPassword("12345", "1Abcdefghi");



/**
 * Apartado 2
 * Crea la clase Controlador que extienda la clase Usuarios añadiendo la propiedad:
 * - email
 * Y el método:
 * - restablecerPassword: Recibirá un usuario y la nueva contraseña. No puede modificar contraseñas de controladores. Devolverá un boleano informando de si ha tenido éxito.
 */

class Controlador extends Usuario {
    constructor(usuario, contraseña, curso, email) {
        // Llamada al constructor de la clase padre (Usuario)
        super(usuario, contraseña, curso);
        this.email = email; // Añadimos valor a la propiedad email
    }

    // Método para restablecer la contraseña de usuarios no controladores
    restablecerPassword(usuario, nuevaContraseña) {
        // Verificar si el usuario pasado es una instancia de la clase Controlador
        if (usuario instanceof Controlador) {
            console.log("Error: No se puede modificar la contraseña de un controlador.");
            return false;
        }

        // Si la contraseña a cambiar no es de un Controlador, verificamos la nueva contraseña.

        if (Usuario.passwordSegura(nuevaContraseña)) {
            usuario.contraseña = nuevaContraseña;
            console.log(`Se ha modificado la contraseña de ${usuario.usuario}`);
            //console.log("Se ha modificado la contraseña de ", String(this.usuario));
            return true;
        } else {
            console.log("Error: La nueva contraseña no es segura.");
            return false;
        }
    }

}

// Pruebas de código

const usuario2 = new Usuario("Juan Pérez", "12345678", "DWEC");
const controlador2 = new Controlador("admin2", "Admin12345", "IT Support", "admin2@acme.com");
console.log ("==================================================");
console.log ("Pruebas tras añadir la clase Controlador-------------");
console.log ("==================================================");

// Intentar restablecer la contraseña de un usuario desde el controlador
controlador2.restablecerPassword(usuario2, "12345");  // No se puede restablecer
controlador2.restablecerPassword(usuario2, "1Abcdefg");  // Restablecida
console.log("Nueva contraseña de Juan Pérez", usuario2.contraseña);  // Nueva contraseña de 'Juan Pérez': "1Abcdefg"

// Intentar restablecer la contraseña de otro controlador (debería fallar)
const controlador2b = new Controlador("admin2", "Admin12345678", "IT Support", "admin2b@acme.com");
controlador2b.restablecerPassword(controlador2, "Admin12345678");  //Intentamos poner al otro controlador la misma contraseña
// Error: No se puede modificar la contraseña de un controlador.



/**
 * Apartado 3
 * Crea la clase Administrador que extienda clase Controlador añadiendo la propiedad:
 * - telefono
 * Y los métodos:
 * - crearUsuario: Devolverá un usuario nuevo.
 * - crearControlador: Devolverá un controlador nuevo.
 * Además, sobreescribirá el método restablecerPassword permitiendo modificar cualquier contraseña, excepto la suya propia.
 */



class Administrador extends Controlador {
    constructor(usuario, contraseña, curso, email, telefono) {
        super(usuario, contraseña, curso, email);  // Llamamos al constructor de la clase padre (Controlador)
        this.telefono = telefono;  // Añadimos la propiedad "telefono"
    }

    // Método para crear un nuevo usuario
    crearUsuario(usuario, contraseña, curso) {        
        return new Usuario(usuario, contraseña, curso);   // Utilizamos el constructor de Usuario
    }

    // Método para crear un nuevo controlador
    crearControlador(usuario, contraseña, curso, email) {
        return new Controlador(usuario, contraseña, curso, email);
    }

    // Sobrescribimos el método restablecerPassword para poder modificar cualquier contraseña
    restablecerPassword(usuario, nuevaContraseña) {
        // No se puede modificar la propia contraseña --> Para eso tenemos el método cambiarPassword().
        if (this === usuario) {
            console.log("Error: No puedes RESTABLECER tu propia contraseña.");
            return false;
        }

        // Pero se puede restablecer cualquier otra contraseña, incluyendo la de controladores
        if (Usuario.passwordSegura(nuevaContraseña)) {
            usuario.contraseña = nuevaContraseña;
            console.log(`Se ha modificado la contraseña de ${usuario.usuario}`);
            // console.log("Se ha modificado la contraseña de ", String(this.usuario));
            return true;
        } else {
            console.log("Error: La nueva contraseña no cumple los criterios de seguridad.");
            return false;
        }
    }
}

console.log ("==================================================");
console.log ("Pruebas tras añadir la clase Administrador-------------");
console.log ("==================================================");

const admin3 = new Administrador("admin3", "Admin12345", "IT Support", "admin1@acme.com", "555-1234");
const nuevoUsuario = admin3.crearUsuario("Juan Pérez", "12345678", "DWEC");
const nuevoControlador = admin3.crearControlador("control1", "Control1234", "IT Support", "control1@acme.com");

// Mostrar información
nuevoUsuario.mostrarInfo();
nuevoControlador.mostrarInfo();

// Restablecer la contraseña de un usuario
admin3.restablecerPassword(nuevoUsuario, "1Abcdefg");  // Restablecida
console.log("Nueva contraseña de Juan Pérez:", nuevoUsuario.contraseña);

// Intentar restablecer la contraseña de otro controlador (podemos porque es un Administrador)
admin3.restablecerPassword(nuevoControlador, "1Abcdefghi");  // Restablecida
console.log("Nueva contraseña del controlador:", nuevoControlador.contraseña);

// Intentar restablecer la propia contraseña del administrador (fallará)
admin3.restablecerPassword(admin3, "AdminNew12345");  // Nos da ERROR




/**
 * Apartado 4
 * - Crea un administrador.
 * - El administrador creará 2 controladores, para 1DAW y 2DAW.
 * - El administrador creará 3 usuarios para 1DAW y 3 para 2DAW.
 * - Emplea un usuario para cambiar su propia password.
 * - Emplea un controlador para cambiar su propia password, la password de un usuario, de un controlador y del administrador y muestra si ha sido posible.
 * - Emplea un administrador para cambiar su propia password, la password de un usuario, de un controlador y del administrador y muestra si ha sido posible.
 */

const admin4 = new Administrador("admin3", "Admin12345", "IT Support", "admin1@acme.com", "555-1234");
// El administrador crea 2 controladores
const controlador4_1=admin4.crearControlador("Controlador 1 DAW", "12345", "1DAW", "control1daw@instituto.com");
const controlador4_2=admin4.crearControlador("Controlador 2 DAW", "12345", "2DAW", "control2daw@instituto.com");
//El administrador crea 3 usuarios
const usuario1_1=admin4.crearUsuario("Juan Pérez", "per100801","1DAW");
const usuario2_1=admin4.crearUsuario("Antonio Gómez", "gom210305","1DAW");
const usuario3_1=admin4.crearUsuario("Ana Pérez", "per230779","1DAW");
const usuario1_2=admin4.crearUsuario("Silvia Lloret", "llo071194","2DAW");
const usuario2_2=admin4.crearUsuario("Josep Llinares ", "lli280993","2DAW");
const usuario3_2=admin4.crearUsuario("Pau Martínez", "mar041199","2DAW");
// Un usuario cambia su password
usuario3_1.cambiarPassword("per230779","MiContraseña1");
// Un controlador cambia 
controlador4_1.cambiarPassword("12345","MiContraseña1"); // su propia password.
controlador4_1.restablecerPassword(usuario1_1, "per100801") // la de un usuario
//muestra si ha sido realizada con éxito o no.
controlador4_1.restablecerPassword(controlador4_2, "OtraContraseña1") // la de un controlador
//muestra si ha sido realizada con éxito o no.
controlador4_1.restablecerPassword(admin4, "OtraContraseña1") // la del administrador
//muestra si ha sido realizada con éxito o no.





/**
 * Apartado 5
 * Asigna los usuarios en un array. Itera el array y: 
 * - asigna la contraseña de todos los usuarios a 'DWEC2425-z' usando el método cambiarPassword.
 * - Muestra por consola el nombre y la password de todos los usuarios, si son controladores también el correo y si son administradores adicionalmente el teléfono.
 */

// Array con todos los usuarios, controladores y administradores

let arrayUsuarios = [
    usuario1_1, usuario2_1, usuario3_1, 
    usuario1_2, usuario2_2, usuario3_2, 
    controlador4_1, controlador4_2, admin4
];

// Iteramos sobre todos los usuarios para cambiar la contraseña y mostrar la información
for (let usuario of arrayUsuarios) {
    // Cambiamos la contraseña de todos los usuarios a 'DWEC2425-z'
    usuario.cambiarPassword(usuario.contraseña, "DWEC2425-z");
    
    // Mostramos el nombre y la nueva contraseña de cada usuario
    console.log(`Nombre: ${usuario.usuario}, Contraseña: ${usuario.contraseña}`);
    
    // Si el usuario es un controlador, también mostramos su correo
    if (usuario instanceof Controlador && !(usuario instanceof Administrador)) {
        console.log(`Correo: ${usuario.email}`);
    }
    
    // Si el usuario es un administrador, mostramos su teléfono adicionalmente
    if (usuario instanceof Administrador) {
        console.log(`Correo: ${usuario.email}, Teléfono: ${usuario.telefono}`);
    }
}
