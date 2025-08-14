// Ejercicio For 7: Matriz de Suma
// Usa ciclos for anidados para crear una matriz 5x5 donde cada elemento sea la suma de sus índices (fila + columna). 
// Muestra la matriz formateada.
console.log("=== Matriz de Suma===");

let matriz = [];


for (let fila = 0; fila < 5; fila++) {
    matriz[fila] = []; // 

    for (let columna = 0; columna < 5; columna++) {
        matriz[fila][columna] = fila + columna;
    }
}


console.log("Matriz donde cada elemento es la suma de sus índices (fila + columna):");
console.log("\n   ", "0", "1", "2", "3", "4"); 

for (let fila = 0; fila < 5; fila++) {
    let lineaTexto = fila + ": ";

    for (let columna = 0; columna < 5; columna++) {
        lineaTexto += matriz[fila][columna] + " ";
    }

    console.log(lineaTexto);
}


console.log("\nEjemplos de cálculo:");
for (let fila = 0; fila < 3; fila++) {
    for (let columna = 0; columna < 3; columna++) {
        console.log(`matriz[${fila}][${columna}] = ${fila} + ${columna} = ${matriz[fila][columna]}`);
    }
}