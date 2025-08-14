// Ejercicio While 2: Suma de Números Pares
// Implementa un ciclo while que sume todos los números pares entre 1 y 100. 
// Muestra el resultado final y cuántos números se sumaron.
console.log("=== Suma de Números Pares ===");

let numero = 2; 
let suma = 0;
let cantidadPares = 0;

while (numero <= 100) {
    suma += numero;
    cantidadPares++;
    console.log(`Número par: ${numero}, Suma acumulada: ${suma}`);
    numero += 2; 
}

console.log(`\nResultado final:`);
console.log(`Suma total de números pares: ${suma}`);
console.log(`Cantidad de números pares sumados: ${cantidadPares}`);


