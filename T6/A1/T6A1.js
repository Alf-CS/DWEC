/**
 * Apartado 1
 * Maneja el evento de carga del documento y añade las funciones correspondientes a cada apartado para registrar los manejadores de eventos.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Código que se ejecutará cuando el DOM esté completamente cargado
    // Hay que añadir aquí las llamadas a funciones o ponemos las otras dependiendo de un IF
    console.log('El documento HTML ha sido completamente cargado');


/**
 * Apartado 2
 * Muestra todos los elementos ocultos (con la clase confidencial) al pasar el ratón por encima de los mismos.
 */

        // Seleccionamos todos los elementos con la clase 'confidencial'
        const elementosConfidenciales = document.querySelectorAll('.confidencial');
                // Recorremos todos los elementos confidenciales
        elementosConfidenciales.forEach(function(elemento) {
            elemento.addEventListener('mouseover', function() { // Añadimos un evento 'mouseover' a cada elemento
                elemento.style.backgroundColor= "white";  // Al pasar el ratón, mostramos el elemento (ojo con el camelCase)
            });            
            elemento.addEventListener('mouseout', function() {  // Añadimos un evento 'mouseout' para ocultarlo cuando se quita el ratón
                elemento.style.backgroundColor="black";
            });
        });

/**
 * Apartado 3
 * Crea un sistema de navegación a secciones por teclas. Obten las teclas asociadas a los enlaces de la página mediante el atributo data-key.
 */

    // Seleccionamos todos los enlaces que tengan el atributo 'data-key'
    const enlaces = document.querySelectorAll('a[data-key]');

    // Creamos una función que maneje las pulsaciones de tecla
    document.addEventListener('keydown', function(event) {
        enlaces.forEach(function(enlace) { // Recorremos todos los enlaces para buscar una coincidencia con la tecla pulsada
            const teclaAsignada = enlace.getAttribute('data-key'); // Obtenemos el valor de 'data-key'

            // Comprobamos si la tecla pulsada coincide con la asignada en el atributo 'data-key'
            if (event.key === teclaAsignada) {
                // Evitamos la acción por defecto de la tecla (por ejemplo, F1 abre ayuda del navegador)
                event.preventDefault();
                
                // Simulamos el clic en el enlace para navegar a la sección correspondiente
                enlace.click();
            }
        });
    });

}); // CERRAMOS EL DOMContentLoader






/**
 * Apartado 4
 * Crea un historial de clics izquierdos a nivel global. En cada clic, almacena la fecha y hora, la posición de la ventana
 * y el elemento html que se ha pulsado. Tras cada click, muestra el historial completo por consola. 
 * 
 * Nota: Asegúrate de que ningún otro controlador pueda cancelar el evento antes de que este lo procese.
 */




/**
 * Apartado 6
 * Muestra un menú contextual tras pulsar con el botón derecho cualquiera de los elementos de la lista con id "lista-compra". Para ello:
 * 
 * 1. Crea un menú de tipo ul con id "menu-contextual" y añádelo al body. El menú tendrá 3 opciones:
 * - Añadir: usará un prompt para obtener y añadir un nuevo elemento a la lista.
 * - Modificar: usara un prompt para modificar el elemento sobre el cual se ha desplegado el menú.
 * - Eliminar: eliminará el elemento sobre el cual se ha desplegado el menú.
 * - Trás seleccionar cualquier opción, el menú debera cerrarse (display: none).
 * 
 * 2. Añade un manejador de eventos a cada elemento de la lista. El manejador de eventos debe:
 * - Asignar los estilos display: block, top y left a la posición clickada (en píxeles) del menú.
 * - Asignar al menú una referencia del elemento clicado, para que así el menú sepa con qué elemento operar.
 * 
 * 3. Añade manejadores de eventos al body para los eventos: clic, menú contextual y rueda del ratón. Cada uno de ellos debe:
 * - Si el evento no se ha producido en un descendiente del menú, se cerrará el menú. (display: none)
 * 
 * Nota: Se recomienda usar una propiedad no estandard para almacenar la referencia del menú, como por ejemplo, menuOwner.
 * Nota 2: Los elementos añadidos con la opción crear, también deben mostrar el menú y ser funcional.
 */



/**
 * Apartado 7
 * Crea un control de selección múltiple de elementos empleando pulsación de teclas y clics:
 * - Un click sin teclas modificadoras elimina todas las selecciones y selecciona el elemento actual. Si es el único elemento seleccionado, lo deselecciona.
 * - Un click con la tecla shift presionada añade el elemento actual a los elementos seleccionados, o lo elimina si ya estaba seleccionado.
 * - Para marcar un elemento como seleccionado, añade la clase selected. Para desmarcarlo, elimina dicha clase.
 * - Cada vez que se modifiquen los elementos seleccionados, el elemento con id "selection-changed" enviará un evento personalizado que pueda flotar llamado
 *   "selection-changed" con el array de elementos seleccionados. 
 * - El evento padre sección deberá subscribirse a este evento y mostrar los elementos seleccionados en su hijo p.
 * 
 * !!! Atención: iterar colecciones vivas mientras se añaden/eliminan elementos a esa colección viva es problemático. Puedes transformar una colección viva a array mediante Array.from
 */



                
/**
 * Apartado 8
 * Añade scroll infinito. Cuando detectes que el scroll está en el final de la página, añade un elemento p con 100px de altura con el
 * texto 'nuevo contenido' y la fecha y hora.
 * 
 * Nota: Para calcular si ha llegado al final de la página comprueba que la propiedad scrollY más la altura de la zona de renderizado 
 * sea mayor o igual que la propiedad scrollHeight de documentElement, perteneciente a document.
 */

