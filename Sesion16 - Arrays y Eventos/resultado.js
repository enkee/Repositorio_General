var respuesta = localStorage.getItem("respuesta");

if(respuesta > 10){
    document.getElementById('respuesta').innerHTML= "Tu puntaje es "+ respuesta + " Felicitaciones! Tienes buena salud!";
}

else if(respuesta > 5){
    document.getElementById('respuesta').innerHTML= "Tu puntaje es "+ respuesta + " Ojo! Hay que cuidarse más";
}
else{
    document.getElementById('respuesta').innerHTML= "Tu puntaje es "+ respuesta + " Terrible! Estás en riesgo";
}




