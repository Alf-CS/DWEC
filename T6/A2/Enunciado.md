Crea una aplicación web con un formulario

Con los siguientes campos:

    Nombre y apellidos: obligatorio, al menos 4 caracteres y dos palabras con un máximo de 5, sin números, símbolos, espacios iniciales o finales
    DNI: obligatorio, formato 12345678-X
    Teléfono: opcional, formato 000-00-00-00
    Género: obligatorio, radio
    Nombre de usuario: obligatorio, empieza por letra o número, podrá contener letras, números y los símbolos '-', '.' y '_', pero no podrá terminar con símbolo.
    Email: obligatorio
    Repetir email: obligatorio, igual que el email, no se permite pegar
    Comunidad autónoma: opcional, select con datos de comunidades, primer opción en blanco
    Provincia: opcional, select con datos de provincias, primer opcción en blanco
    Población: opcional, select con datos de poblaciones, primera opcción en blanco
    Dirección: opcional
    Código postal: opcional, formato 00000.
    Intereses: varios elementos de tipo checkbox a tu elección . Al menos 3 seleccionados.
    Términos y condiciones: obligatorio, checkbox.

Además, deberá haber:

    Botón reset para limpiar los campos del formulario
    Botón envío de formulario para crear el usuario

Y se manejarán las siguientes situaciones:

    Al cambiar la comunidad autónoma, se deben cargar las provincias y vaciar los municipios. 
    Al cambiar de provincia, se deben cargar los municipios. 
    Al realizar un envío de formulario, se validarán los campos. 
        Si hay campos que no cumplen la validación se mostrará un mensaje de error al lado de cada campo afectado. El mensaje debe ser personalizado para cada tipo de mensaje de error (requerido, longitud mínima, patrón...).
        Si todos los campos son válidos, se añadirán todos los datos (los campos de la dirección postal se deben almacenar por código, no por nombre) en un array interno y en la tabla. Se ocultarán todos los mensajes de error y se reiniciarán todos los campos del formulario.
    Adicionalmente, los campos teléfono y dni se validarán cada vez que cambien. 
    Adicionalmente, el correo se validará cada vez que se introduzca texto.
    Al reiniciar el formulario, se reiniciarán todos los efectos de validación.

Solo se deben crear atributos id donde sea estrictamente necesario.