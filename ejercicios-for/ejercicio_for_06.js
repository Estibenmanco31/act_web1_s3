// Ejercicio For 6: Calculadora de Potencias
// Implementa una función que use un ciclo for para calcular la potencia de un número sin usar Math.pow(). 
// Debe mostrar el proceso paso a paso.
console.log("=== Calculadora de Potencias ===");

function calcularPotencia(base, exponente) {
    if (exponente === 0) {
        console.log(`${base}^${exponente} = 1 (cualquier número elevado a 0 es 1)`);
        return 1;
    }

    let resultado = 1;

    console.log(`Calculando ${base}^${exponente}:`);
    console.log(`Paso inicial: resultado = 1`);

    for (let i = 1; i <= Math.abs(exponente); i++) {
        resultado *= base;
        console.log(`Paso ${i}: resultado = resultado * ${base} = ${resultado}`);
    }

   
    if (exponente < 0) {
        resultado = 1 / resultado;
        console.log(`Exponente negativo: resultado = 1/${resultado * base} = ${resultado}`);
    }

    return resultado;
}


let ejemplos = [
    {base: 3, exponente: 2},
    {base: 4, exponente: 4},
    {base: 7, exponente: 5},
    {base: 21, exponente: 2}
];

for (let i = 0; i < ejemplos.length; i++) {
    let {base, exponente} = ejemplos[i];
    let resultado = calcularPotencia(base, exponente);
    console.log(`\nResultado final: ${base}^${exponente} = ${resultado}\n`);
}