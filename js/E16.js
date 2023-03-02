const texto = prompt("Introduce un texto:");

// Convertimos la cadena en un array de caracteres, lo invertimos y lo volvemos a unir
const textoInvertido = texto.split("").reverse().join("");

document.write(`El texto invertido es: ${textoInvertido}`);
