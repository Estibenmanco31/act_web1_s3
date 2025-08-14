// Ejercicio For 10: Validador de Palíndromos
// Implementa un programa que use un ciclo for para verificar si una palabra o frase es un palíndromo. 
// Debe ignorar espacios, mayúsculas y signos de puntuación.
console.log("=== Validador de Palíndromos ===");

function esPalindromo(texto) {

    let limpio = "";
    let caracteresValidos = "abcdefghijklmnopqrstuvwxyz0123456789áéíóúü";

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i].toLowerCase();
        if (caracteresValidos.includes(char)) {
            limpio += char;
        }
    }

   
    let longitud = limpio.length;
    for (let i = 0; i < Math.floor(longitud / 2); i++) {
        if (limpio[i] !== limpio[longitud - 1 - i]) {
            return false;
        }
    }
    return true;
}

let frases = [
    "Amo la pacífica paloma",
    "La ruta natural",
    "Esto no es un palíndromo",
    "Ana",
    "Hola"
];

for (let frase of frases) {
    console.log(`"${frase}" -> ${esPalindromo(frase) ? "Sí es palíndromo" : "No es palíndromo"}`);
}
