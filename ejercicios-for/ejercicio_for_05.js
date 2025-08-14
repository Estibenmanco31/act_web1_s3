// Ejercicio For 5: Invertir Cadenas de Texto
// Crea un programa que use un ciclo for para invertir una cadena de texto carácter por carácter. 
// Muestra tanto la cadena original como la invertida.
console.log("=== Invertir Cadenas de Texto ===");

function invertirCadena(texto) {
    let textoInvertido = "";

    console.log(`Invirtiendo: "${texto}"`);
    console.log("Proceso paso a paso:");

    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
        console.log(`Paso ${texto.length - i}: Agregando '${texto[i]}' -> "${textoInvertido}"`);
    }

    return textoInvertido;
}


let frases = [
    "Hola Mundo",
    "Programacion Web",
    "Internet"
];

for (let i = 0; i < frases.length; i++) {
    let original = frases[i];
    let invertida = invertirCadena(original);

    console.log(`\nOriginal: "${original}"`);
    console.log(`Invertida: "${invertida}"`);
    console.log("---");
}