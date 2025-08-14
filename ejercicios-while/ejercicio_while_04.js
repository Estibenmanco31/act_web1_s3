// Ejercicio While 4: Generador de Números Aleatorios
// Usa un ciclo while para generar números aleatorios entre 1 y 100 hasta que salga el número 50. 
// Cuenta cuántos intentos tomó.
console.log("=== Generador de Números Aleatorios ===");

let numeroAleatorio = 0;
let intentos = 0;

while (numeroAleatorio !== 50) {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1; 
    intentos++;
    console.log(`Intento ${intentos}: ${numeroAleatorio}`);
}

console.log(`\n¡Se obtuvo el número 50 después de ${intentos} intentos!`);
