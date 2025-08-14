// Ejercicio For 8: Contador de Caracteres
// Desarrolla un programa que use un ciclo for para contar la frecuencia de cada carácter en una cadena de texto. 
// Muestra los resultados ordenados alfabéticamente.

console.log("=== Contador de Caracteres ===");

function contarCaracteres(cadena) {
    let conteo = {};

    console.log(`Analizando la cadena: "${cadena}"`);
    console.log("Proceso carácter por carácter:");

    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i].toLowerCase();

        if (conteo.hasOwnProperty(caracter)) {
            conteo[caracter]++;
        } else {
            conteo[caracter] = 1;
        }

        console.log(`Posición ${i}: '${cadena[i]}' -> ${conteo[caracter]} veces`);
    }

  
    let caracteresOrdenados = Object.keys(conteo).sort();

    console.log("\n=== RESULTADOS ORDENADOS ===");
    for (let caracter of caracteresOrdenados) {
        console.log(`'${caracter}': ${conteo[caracter]}`);
    }
}


let texto = "El Desarrollo Web me gusta";
contarCaracteres(texto);
