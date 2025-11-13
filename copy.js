const numeroTelefono = "412-5022286";

async function copiarTexto() {
  await navigator.clipboard.writeText(numeroTelefono);
  alert(
    "El número de teléfono ha sido copiado al portapapeles: " + numeroTelefono
  );
  return 0;
}
