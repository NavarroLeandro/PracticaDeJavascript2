const texto = prompt("Introduce un texto:");

// Utilizo una expresión regular para buscar las vocales en el texto
const vocales = texto.match(/[aeiou]/gi);

// Si hay vocales, las contamos. Si no, mostramos un mensaje
if (vocales) {
  const numVocales = vocales.length;
  document.write(`El texto contiene ${numVocales} vocales.`);
} else {
  document.write("El texto no contiene vocales.");
}
