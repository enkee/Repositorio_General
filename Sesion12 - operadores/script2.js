//Variables
var edad_juan = 18;
var ingresos_juan = 4000;
var edad_maria = 20;
var ingresos_maria = 5000;

//Salida por pantalla
console.log("La edad de Juan es: " + edad_juan);
console.log("Los ingresos de Juan son " + ingresos_juan);
console.log("La edad de Maria es: " + edad_maria);
console.log("Los ingresos de Maria son " + ingresos_maria);

//Condiciones

console.log("Juan es mayor que maria y gana mas: " + (edad_juan > edad_maria && ingreso_juan >ingreso_maria));
console.log ("Maria es mayor que juan ó gana menos: " + (edad_maria > edad_juan) || ingresos_maria < ingreso_juan);
console.log("No es verdad que Maria gane menos que Juan: " + (!(ingresos_maria < ingresos_juan)));