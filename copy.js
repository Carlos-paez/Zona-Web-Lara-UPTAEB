function copiarTexto() {
  // 1. Seleccionar el elemento por su ID
  const textoElemento = document.getElementById("412-5022286");

  // 2. Seleccionar todo el texto dentro de ese elemento
  // Usa un elemento temporal para asegurar la selección
  const r = document.createRange();
  r.selectNode(textoElemento);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);

  // 3. Copiar el texto seleccionado al portapapeles
  document.execCommand("copy");

  // 4. Deseleccionar el texto
  window.getSelection().removeAllRanges();

  // Opcional: Mostrar un mensaje de confirmación
  alert("¡Texto copiado al portapapeles!");
}
