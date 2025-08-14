// Ejercicio While 1: Contador de Números
// Crea un programa que use un ciclo while para contar del 1 al 50, 
// pero que solo muestre los números divisibles por 3 y 5.

console.log("=== Números divisibles por 3 y 5 ===");

let numero = 1;

while (numero <= 50) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log(numero);
    }
    numero++;
}
