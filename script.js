function enviarCorreo() {
    const nombre = document.getElementById('nombre').value;
    const material = document.getElementById('viaje').value;
    const cantidad = document.getElementById('conteo').value;
    const lugar = document.getElementById('lugar').value;

    if (!nombre || !lugar || !material || !cantidad) {
        alert("Por favor, completa el formulario.");
        return;
    }

    const cuerpo = `Viaje de ${nombre}\n\n` +
                   `• Cliente: ${nombre}\n` +
                   `• Material solicitado: ${material}\n` +
                   `• Cantidad: ${cantidad}\n` +
                   `• Lugar de entrega: ${lugar}\n` +
                   `Enviado en ${new Date()}`;

    const cuerpoCodificado = encodeURIComponent(cuerpo);
    window.location.href = `mailto:yohaoso42@gmail.com?subject=Solicitud%20de%20viaje&body=${cuerpoCodificado}`;
}

function enviarSMS() {
    const nombre = document.getElementById('nombre').value;
    const material = document.getElementById('viaje').value;
    const cantidad = document.getElementById('conteo').value;
    const lugar = document.getElementById('lugar').value;

    if (!nombre || !lugar || !material || !cantidad) {
        alert("Por favor, completa el formulario.");
        return;
    }

    const cuerpo = `Viaje de ${nombre}\n\n` +
                   `• Cliente: ${nombre}\n` +
                   `• Material solicitado: ${material}\n` +
                   `• Cantidad: ${cantidad}\n` +
                   `• Lugar de entrega: ${lugar}\n` +
                   `Enviado en ${new Date()}`;

    const cuerpoCodificado = encodeURIComponent(cuerpo);
    window.location.href = `sms:+50433475765?body=${cuerpoCodificado}`;
}

function llamarTelefono() {
    const telefono = "+50433475765"; // aquí puedes poner el número fijo
    window.location.href = `tel:${telefono}`;
}
