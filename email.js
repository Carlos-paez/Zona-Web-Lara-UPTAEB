function enviarEmail() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  const cuerpoMensaje = `Hola, mi nombre es ${nombre} y mi correo es ${email}. Mi mensaje es: ${mensaje}`;

  const direccionCorreo = "zonaweblara@gmail.com";

  const asuntoEncoded = encodeURIComponent("Mensaje de contacto");
  const cuerpoEncoded = encodeURIComponent(cuerpoMensaje);

  const mailtoLink = `mailto:${direccionCorreo}?subject=${asuntoEncoded}&body=${cuerpoEncoded}`;

  window.location.href = mailtoLink;
}

const form = document.getElementById("formulario-contacto");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("El correo se ha preparado en tu cliente de correo electrónico.");
  enviarEmail();
});
