let text = document.getElementById("p1").innerHTML;
const regex = /e/gi;
document.getElementById("demo").innerHTML = text.replace(regex,"a");

//otro funcion

let agregar = a => a + 100;

alert(agregar(2));

//otro contar vocales
function contarVocales(texto) {
    // Convertir el texto a minúsculas para simplificar la comparación
    texto = texto.toLowerCase();
    
    // Definir las vocales
    const vocales = 'aeiouáéíóú';
    
    // Inicializar el contador de vocales
    let contador = 0;
    
    // Recorrer cada carácter del texto
    for (let i = 0; i < texto.length; i++) {
        // Verificar si el carácter actual es una vocal
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    
    return contador;
}

// Ejemplo de uso
const cadena = "Hola, ¿cómo estás?";
const resultado = contarVocales(cadena);
console.log("Número de vocales:", resultado);