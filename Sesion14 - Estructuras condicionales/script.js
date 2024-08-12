var color = "verde";
var tamaño = "mediano";
var precio = 1000;
var estacion = "verano";

var nota = 11;


// Si el color es verde y el precio es menor igual a 1000
//entonces lo compro, caso cotrario me me compro otra cosa
if(color == "verde" && precio <= 1000){
    console.log ("lo compro");
}else{
    console.log ("compro otra cosa");
}

//Si el tamaño es mediano o el color es verde lo compro, 
//caso contrario me voy de viaje.
if(tamaño == "mediano" || color == "verde"){
    console.log ("compro");
}else{
    console.log ("me voy de viaje");
}

//Si la estación es invierno o la estacion es otoño "lo compro"
//caso contrario ahorro el dinero.



//Si el tamaño es mediano ó el precio es menor igual a 1000 
//ó el color es rojo entonces lo compro, caso contrario lo pongo en
//en el banco.


//Si la nota es mayor o igual a 10 y menor a 15 entonces tendra una "C"
//Si la nota es mayor a 15  y menor a 18, entonces tendra una "B"
//Caso contrario tengra una "A"

if(nota>= 10 && nota<15){
    console.log("C");
}else if(nota>15 && nota <18){
    console.log("B");
}else{
    console.log("A");
}