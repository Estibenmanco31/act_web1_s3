// Ejercicio For 3: Análisis de Array de Números
// Dado un array de 20 números aleatorios, usa un ciclo for para encontrar: 
// el número mayor, el menor, la suma total, el promedio, y cuántos números son pares e impares.
console.log("=== Análisis de Array de Números ===");


let numeros = [];
for (let i = 0; i < 20; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Array generado:", numeros);


let mayor = numeros[0];
let menor = numeros[0];
let suma = 0;
let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];

    
    if (numero > mayor) mayor = numero;
    if (numero < menor) menor = numero;

   
    suma += numero;

    
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }

    console.log(`Posición ${i}: ${numero} (Mayor: ${mayor}, Menor: ${menor}, Suma: ${suma})`);
}

let promedio = suma / numeros.length;

console.log("\n=== RESULTADOS DEL ANÁLISIS ===");
console.log(`Número mayor: ${mayor}`);
console.log(`Número menor: ${menor}`);
console.log(`Suma total: ${suma}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);
console.log(`Números pares: ${pares}`);
console.log(`Números impares: ${impares}`);