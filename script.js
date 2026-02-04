function enviarCorreo() {
    // 1. Dirección de tu mamá
    const emailDestino = "yohahoso42@gmail.com";

    // 2. Obtener los valores de los inputs
    const nombre = document.getElementById('nombre').value;
    const material = document.getElementById('viaje').value;
    const cantidad = document.getElementById('conteo').value;
    const lugar = document.getElementById('lugar').value;

    // 3. Validación básica
    if (!nombre || !lugar) {
        alert("Por favor, completa el nombre y el lugar.");
        return;
    }

    // 4. Construir los textos
    const asunto = `Viaje de ${nombre}`;
    const cuerpo = `Hola, se ha generado un nuevo pedido:\n\n` +
                   `• Cliente: ${nombre}\n` +
                   `• Material solicitado: ${material}\n` +
                   `• Cantidad: ${cantidad}\n` +
                   `• Lugar de entrega: ${lugar}`;

    // 5. Codificar textos para la URL (esto convierte espacios en %20, etc.)
    const asuntoCodificado = encodeURIComponent(asunto);
    const cuerpoCodificado = encodeURIComponent(cuerpo);

    // 6. CREAR EL ENLACE MAILTO
    // Estructura: mailto:correo?subject=asunto&body=cuerpo
    const mailtoUrl = `mailto:${emailDestino}?subject=${asuntoCodificado}&body=${cuerpoCodificado}`;

    // 7. Acción: Redirigir al mailto
    // Esto disparará la aplicación de correo predeterminada
    window.location.href = mailtoUrl;
}


function enviarCorreo2() {
    // 1. Dirección de destino (Correo de tu mamá)
    const emailDestino = "yohahoso42@gmail.com";

    // 2. Obtener los valores de los inputs de tu formulario
    const nombre = document.getElementById('nombre').value;
    const material = document.getElementById('viaje').value; // El select
    const cantidad = document.getElementById('conteo').value;
    const lugar = document.getElementById('lugar').value;

    // 3. Validación: Si el nombre o lugar están vacíos, avisar al usuario
    if (nombre === "" || lugar === "") {
        alert("Por favor, completa el nombre y el lugar antes de enviar.");
        return;
    }

    // 4. Construir el Asunto y el Cuerpo del mensaje
    const asuntoTexto = `Solicitud de Material - ${nombre}`;
    const cuerpoTexto = `Hola, se ha generado un nuevo pedido:\n\n` +
                        `• Cliente: ${nombre}\n` +
                        `• Material solicitado: ${material}\n` +
                        `• Cantidad: ${cantidad}\n` +
                        `• Lugar de entrega: ${lugar}`;

    // 5. Codificar los textos para que la URL sea válida
    const asuntoCodificado = encodeURIComponent(asuntoTexto);
    const cuerpoCodificado = encodeURIComponent(cuerpoTexto);

    // 6. Construir la URL de Gmail para redacción automática
    // Utilizamos los parámetros: to (destino), su (asunto) y body (mensaje)
    const urlGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailDestino}&su=${asuntoCodificado}&body=${cuerpoCodificado}`;
    
    // 7. Abrir Gmail en una nueva pestaña
    window.open(urlGmail, '_blank');
}

