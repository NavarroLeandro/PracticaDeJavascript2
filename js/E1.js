/*Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
mensaje que ya puede conducir, si la edad ingresada no es un número válido
indicarlo en un mensaje*/

let edad=parseInt(prompt("Ingrese una edad aleatoria por favor"))

if(edad<18){
    alert("No puede conducir");
}else if(edad>=18 && edad<=99){
    alert("Claro que puede conducir señor");
}else if(edad>=100){
    alert("Usted ya no deberia conducir");
}else{
    alert("No se ingreso ningun numero.");
}