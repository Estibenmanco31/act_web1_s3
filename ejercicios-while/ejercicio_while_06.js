// Ejercicio While 6: Búsqueda en Array
// Crea un programa que use while para buscar un elemento específico en un array de 15 números aleatorios. 
// Muestra en qué posición se encontró.
console.log("=== Búsqueda en Array de Números Aleatorios ===");

let numeros = ["1", "20", "30", "10", "4", "57", "23", "67", "45", "56", "6", "33", "42", "25", "37","44"];
let numeroBuscado = "37";
let indice = 0;
let encontrado = false;
let posicionEncontrada = -1;

console.log(`Buscando "${numeroBuscado}" en el array:`);
console.log(`Array: [${numeros.join(", ")}]`);

while (indice < numeros.length && !encontrado) {
    console.log(`Verificando posición ${indice}: "${numeros[indice]}"`);

    if (numeros[indice] === numeroBuscado) {
        encontrado = true;
        posicionEncontrada = indice;
        console.log(`¡Encontrado! "${numeroBuscado}" está en la posición ${indice}`);
    } else {
        console.log(`"${numeros[indice]}" no es el numero que buscamos`);
    }

    indice++;
}

if (!encontrado) {
    console.log(`El numero "${numeroBuscado}" no se encontró en el array`);
}