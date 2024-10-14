/**
 * Apartado 1
 * Crea una clase Usuarios los atributos:
 * - usuario
 * - contraseña
 * - curso
 * El método: 
 * - cambiarPassword: Recibirá la contraseña vieja y una nueva. Si la contraseña vieja coincide y la nueva es segura, será cambiada. Devolverá un boleano informando de si ha tenido éxito.
 * Y el método estático y privado:
 * - passwordSegura: Recibirá una contraseña y devolverá true si la contraseña tiene al menos 8 caracteres, 1 mayúscula, 1 minúscula, 1 número, sin espacios.
 */

class Usuario {

    constructor(u, p, c) {
        this.usuario = u;
        this.password = p;
        this.curso = c;
    }

    cambiarPassword(vieja, nueva) {
        if (vieja === this.password && Usuario.#passwordSegura(nueva)) {
            this.password = nueva;
            return true;
        }
        
        return false;
    }

    static #passwordSegura(s) {
        if (s.length >= 8) {
            let lc = 0, uc = 0, num = 0;
            for (let i = 0; i < s.length; i++) {
                if (s[i] == ' ') return false;
                else if (s[i] >= 'a' && s[i] <= 'z') lc++;
                else if (s[i] >= 'A' && s[i] <= 'Z') uc++;
                else if (s[i] >= '0' && s[i] <= '9') num++;
            }

            return lc > 0 && uc > 0 && num > 0;
        }
        return false;
    }
}

/**
 * Apartado 2
 * Crea la clase Controlador que extienda la clase Usuarios añadiendo las propiedades:
 * - email
 * Y los métodos:
 * - restablecerPassword: Recibirá un usuario y la nueva contraseña. No puede modificar contraseñas de controladores. Devolverá un boleano informando de si ha tenido éxito.
 * - instalarSoftware: Recibirá una cadena con el nombre de un programa. Mostrará por consola que el software ha sido instalado.
 */

class Controlador extends Usuario {

    constructor(u, p, c, e) {
        super(u, p, c);
        this.email = e;
    }

    restablecerPassword(u, p) {
        if (u instanceof Usuario && !(u instanceof Controlador)) {
            u.password = p;
            return true;
        }
        return false;
    }
}

/**
 * Apartado 3
 * Crea la clase Administrador que extienda clase Controlador añadiendo las propiedades:
 * - telefono
 * Y los métodos:
 * - crearUsuario: Devolverá un usuario nuevo.
 * - crearControlador: Devolverá un controlador nuevo.
 * Además, sobreescribirá el método restablecerPassword permitiendo modificar cualquier contraseña, excepto la suya propia.
 */

class Administrador extends Controlador {
    constructor(u, p, c, e, t) {
        super(u, p, c, e);
        this.telefono = t;
    }

    crearUsuario(u, p, c) {
        return new Usuario(u, p, c);
    }

    crearControlador(u, p, c, e) {
        return new Controlador(u, p, c, e);
    }

    restablecerPassword(u, p) {
        if (u != this) {
            u.password = p;
            return true;
        }
        return false;
    }
}

/**
 * Apartado 4
 * - Crea un administrador.
 * - El administrador creará 2 controladores, para 1DAW y 2DAW.
 * - El administrador creará 3 usuarios para 1DAW y 3 para 2DAW.
 * - Emplea un usuario para cambiar su propia password.
 * - Emplea un controlador para cambiar su propia password, la password de un usuario, de un controlador y del administrador y muestra si ha sido posible.
 * - Emplea un administrador para cambiar su propia password, la password de un usuario, de un controlador y del administrador y muestra si ha sido posible.
 */
console.log('-----Apartado 4-----');
const admin = new Administrador('admin', 'Admin1234', 'IES PMO', 'admin@admin', '666666666');
const ctrl1 = new Controlador('ctrl1', 'Ctrl1234', '1DAW', 'ctrl1@ctrl1');
const ctrl2 = new Controlador('ctrl2', 'Ctrl1234', '2DAW', 'ctrl2@ctrl2');
const user1 = new Usuario('user1', 'User1234', '1DAW');
const user2 = new Usuario('user2', 'User1234', '1DAW');
const user3 = new Usuario('user3', 'User1234', '1DAW');
const user4 = new Usuario('user4', 'User1234', '2DAW');
const user5 = new Usuario('user5', 'User1234', '2DAW');
const user6 = new Usuario('user6', 'User1234', '2DAW');

console.log(user1.cambiarPassword('User1234', '1235User'));
console.log(ctrl1.cambiarPassword('Ctrl1234', '1234Ctrl'));
console.log(ctrl1.restablecerPassword(user1, 'User6666'));
console.log(ctrl1.restablecerPassword(ctrl2, 'User6666'));
console.log(ctrl1.restablecerPassword(admin, 'User6666'));
console.log(admin.restablecerPassword(user1, 'User7777'));
console.log(admin.restablecerPassword(ctrl2, 'User7777'));
console.log(admin.restablecerPassword(admin, 'User7777'));

/**
 * Apartado 5
 * Asigna los usuarios en un array. Itera el array y: 
 * - asigna la contraseña de todos los usuarios a 'DWEC2425-z'.
 * - Muestra por consola el nombre y la password de todos los usuarios, si son controladores también el correo y si son administradores adicionalmente el teléfono.
 */

const array = [user1, user2, user3, user4, user5, user6, ctrl1, ctrl2, admin];
for (let i = 0; i < array.length; i++) {
    const usr = array[i];
    usr.cambiarPassword(usr.password, 'DWEC2425-z');
    console.log(usr.usuario + '/' + usr.password);
    if (usr instanceof Controlador) {
        console.log(usr.email);
    }
    if (usr instanceof Administrador) {
        console.log(usr.telefono);
    }
}

