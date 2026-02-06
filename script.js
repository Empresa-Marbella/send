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
                   `• Lugar de entrega: ${lugar}`;

    const numeroTelefonoDestino = encodeURIComponent("+504 3347-5765");
    const cuerpoCodificado = encodeURIComponent(cuerpo);
    window.location.href = `SMSTO:${numeroTelefonoDestino}:${cuerpoCodificado}`;
}

