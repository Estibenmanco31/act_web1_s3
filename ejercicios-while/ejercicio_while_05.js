// Ejercicio While 5: Calculadora de Factorial
// Implementa una función que use while para calcular el factorial de un número ingresado por el usuario.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularFactorialWhile(n) {
    if (n < 0) {
        return "El factorial no está definido para números negativos";
    }

    let factorial = 1;
    let i = 1;

    while (i <= n) {
        factorial *= i;
        i++;
    }

    return factorial;
}

console.log("=== Calculadora de Factorial ===");

rl.question("Ingresa un número entero: ", (input) => {
    const numero = parseInt(input);

    if (isNaN(numero)) {
        console.log(" Debes ingresar un número válido.");
    } else {
        const resultado = calcularFactorialWhile(numero);
        console.log(`El factorial de ${numero} es: ${resultado}`);
    }

    rl.close();
});
