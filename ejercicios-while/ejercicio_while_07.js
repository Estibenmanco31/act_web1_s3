// Ejercicio While 7: Contador de Dígitos
// Desarrolla un programa que use while para contar cuántos dígitos tiene un número entero ingresado por el usuario.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Contador de Dígitos ===");

rl.question("Ingresa un número entero: ", (input) => {
    let numero = parseInt(input);

    if (isNaN(numero)) {
        console.log(" Debes ingresar un número válido.");
    } else {
        numero = Math.abs(numero); // Asegurarnos que sea positivo

        if (numero === 0) {
            console.log("El número 0 tiene 1 dígito.");
        } else {
            let contador = 0;
            let temp = numero;

            while (temp > 0) {
                temp = Math.floor(temp / 10);
                contador++;
            }

            console.log(`El número ${numero} tiene ${contador} dígito(s).`);
        }
    }

    rl.close();
});
