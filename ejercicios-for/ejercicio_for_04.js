// Ejercicio For 4: Generador de Números Primos
// Utiliza ciclos for anidados para encontrar y mostrar todos los números primos entre 1 y 100. 
// Debe indicar cuántos números primos se encontraron.
console.log("=== Números Primos entre 1 y 100 ===");

let numerosPrimos = [];

for (let numero = 2; numero <= 100; numero++) {
    let esPrimo = true;

    
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            esPrimo = false;
            break; 
        }
    }

    if (esPrimo) {
        numerosPrimos.push(numero);
        console.log(`${numero} es primo`);
    }
}

console.log(`\nSe encontraron ${numerosPrimos.length} números primos:`);
console.log(numerosPrimos.join(", "));