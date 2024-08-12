//variables
const preguntas = ["¿Con qué frecuencia realizas deporte?<br>Considera como deporte cualquier actividad que acelere tu ritmo cardiaco, como caminar rápido, andar en bicicleta, bailar o, por supuesto, practicar un deporte.",
    "¿Cuántos vasos de agua (200mL) bebes al día?<br>No consideres la ingesta de otros líquidos, como gaseosas, jugos azucarados o alcohol.",
    "¿Cuántas porciones de frutas y verduras consumes diariamente?",];

const opciones = [
    ["3 ó más veces por semana",
        "Entre 1 y 2 veces a la semana",
        "Al menos 4 veces al mes"],
    ["Al menos 8 vasos al día",
        "Entre 5 y 8, depende del día",
        "Cuando me acuerdo"],
    ["5 ó más",
        "2 a 4",
        "Al menos 1 vez al día"]
];

const clave =[
    [5, 4, 3],
    [5, 4, 2],
    [5, 4, 3],
];

var i = 0; //indice de pregunta
var puntaje = 0;
//window.onload=mostrarPregunta();

//Eventos
document.getElementById("op1").addEventListener("click",function(){
    actualizarPuntaje(0);
});
document.getElementById("op2").addEventListener("click",function(){
    actualizarPuntaje(1);
});
document.getElementById("op3").addEventListener("click",function(){
    actualizarPuntaje(2);
});


//Operaciones (funciones)

function mostrarPregunta(){
    /*
    document.getElementById('contenido').innerHTML = `
            <p class="pregunta" id="pregunta">${preguntas[i]}</p>
            <button class="opcion" id="op1">${opciones[i][0]}</button>
            <button class="opcion" id="op2">${opciones[i][1]}</button>
            <button class="opcion" id="op3">${opciones[i][2]}</button>
    `;
    */
    
    document.getElementById('pregunta').innerHTML = preguntas[i];
    document.getElementById('op1').innerHTML = opciones[i][0];
    document.getElementById('op2').innerHTML = opciones[i][1];
    document.getElementById('op3').innerHTML = opciones[i][2];
    
}

function actualizarPuntaje(j /*indice de opcion*/){
    puntaje += clave[i][j];

    i++
    if(i<preguntas.length){
        mostrarPregunta();
    }else{
        mostrarResultado();
    }

}

function mostrarResultado(){
    
    if (puntaje>30){
        estiloVida = "<span>EXCELENTE</span>";
    }else if(puntaje>25){
        estiloVida = "<span>BUENO</span>";
    }else if(puntaje>20){
        estiloVida = "<span>ACEPTABLE</span>";
    }else if(puntaje>10){
        estiloVida = "<span>REGULAR</span>";
    }else{
        estiloVida = "<span>MALO</span>";
    }
    document.getElementById('titulo').innerHTML='Respuesta';
    document.getElementById('contenido').innerHTML=`
    <h3 class="respuesta">Tu puntaje es ${puntaje} por lo que tu estilo de vida es ${estiloVida} </h3>
    `;
}
mostrarPregunta();


