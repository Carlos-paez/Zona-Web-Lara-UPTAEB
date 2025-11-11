function enviarEmail() {
  // 1. Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  // 2. Construir el cuerpo del mensaje
  const cuerpoMensaje = `Hola, mi nombre es ${nombre} y mi correo es ${email}. Mi mensaje es: ${mensaje}`;

  // 3. Construir la URL mailto
  // Asegúrate de que la dirección de correo electrónico sea la tuya
  const direccionCorreo = "carlospae<guerra@gmail.com";

  // Se codifican los caracteres especiales para la URL
  const asuntoEncoded = encodeURIComponent("Mensaje de contacto");
  const cuerpoEncoded = encodeURIComponent(cuerpoMensaje);

  const mailtoLink = `mailto:${direccionCorreo}?subject=${asuntoEncoded}&body=${cuerpoEncoded}`;

  // 4. Abrir la aplicación de correo electrónico
  window.location.href = mailtoLink;
}

const form = document.getElementById("formulario-contacto");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("El correo se ha preparado en tu cliente de correo electrónico.");
  enviarEmail();
});
