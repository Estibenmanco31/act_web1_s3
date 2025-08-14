// Ejercicio For 1: Tabla de Multiplicar Completa
// Usa ciclos for anidados para crear las tablas de multiplicar del 1 al 12. 
// Presenta los resultados en formato de tabla organizada.
console.log("=== Tablas de Multiplicar del 1 al 12 ===");

for (let tabla = 1; tabla <= 12; tabla++) {
    console.log(`\n TABLA DEL ${tabla} `);

    for (let multiplicador = 1; multiplicador <= 12; multiplicador++) {
        let resultado = tabla * multiplicador;
        console.log(`${tabla} x ${multiplicador} = ${resultado}`);
    }
}

