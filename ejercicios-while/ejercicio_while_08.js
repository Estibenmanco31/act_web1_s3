// Ejercicio While 8: Secuencia de Fibonacci
// Implementa un generador de la secuencia de Fibonacci usando while que muestre los primeros 20 números de la serie.
console.log("=== Secuencia de Fibonacci ===");

let a = 0, b = 1;
let contador = 0;
let limite = 20;



while (contador < limite) {
    if (contador === 0) {
        console.log(`F(${contador + 1}) = ${a}`);
        contador++;
    } else if (contador === 1) {
        console.log(`F(${contador + 1}) = ${b}`);
        contador++;
    } else {
        let siguiente = a + b;
        console.log(`F(${contador + 1}) = ${siguiente} (${a} + ${b})`);
        a = b;
        b = siguiente;
        contador++;
    }
}