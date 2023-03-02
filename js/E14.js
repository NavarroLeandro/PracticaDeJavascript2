let texto = prompt("Introduce un texto: ");
let str = "";
for(let i=0; i<texto.length; i++) {
  str += texto.charAt(i);
  if(i !== texto.length-1) {
    str += "-";
  }
}
console.log(str);
