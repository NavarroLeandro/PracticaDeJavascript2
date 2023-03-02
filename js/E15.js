const texto = prompt("Introduce un texto:");

// Utilizamos una expresión regular para buscar las vocales en el texto
const vocales = texto.match(/[aeiou]/gi);

// Si hay vocales, las contamos. Si no, mostramos un mensaje
if (vocales) {
  const numVocales = vocales.length;
  console.log(`El texto contiene ${numVocales} vocales.`);
} else {
  console.log("El texto no contiene vocales.");
}
