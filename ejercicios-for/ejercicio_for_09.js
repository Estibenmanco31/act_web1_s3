// Ejercicio For 9: Simulador de Dados
// Crea un simulador que use un ciclo for para lanzar dos dados 1000 veces. 
// Calcula y muestra la frecuencia de cada suma posible (2-12) y determina cuál es la más común.
console.log("=== Simulador de Dados ===");

let lanzamientos = 1000;
let frecuencias = {};


for (let suma = 2; suma <= 12; suma++) {
    frecuencias[suma] = 0;
}


for (let i = 1; i <= lanzamientos; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2;

    frecuencias[suma]++;

    
}


console.log("\n=== Frecuencias de cada suma ===");
for (let suma = 2; suma <= 12; suma++) {
    console.log(`Suma ${suma}: ${frecuencias[suma]} veces`);
}


let sumaMasComun = null;
let maxFrecuencia = 0;

for (let suma = 2; suma <= 12; suma++) {
    if (frecuencias[suma] > maxFrecuencia) {
        maxFrecuencia = frecuencias[suma];
        sumaMasComun = suma;
    }
}

console.log(`\nLa suma más común fue ${sumaMasComun} con ${maxFrecuencia} apariciones.`);
