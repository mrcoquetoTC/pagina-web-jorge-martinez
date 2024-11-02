document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;
    alert(Gracias ${nombre}, tu mensaje ha sido enviado:\n"${mensaje}");
    this.reset(); // Reiniciar el formulario
});