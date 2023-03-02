let text = "";
let input;
do {
  input = prompt("Ingrese un texto (presione cancelar para salir)");
  if (input !== null) {
    text += input + "-";
  }
} while (input !== null);
alert(text.slice(0, -1));
