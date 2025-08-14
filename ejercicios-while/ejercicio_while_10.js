// Ejercicio While 10: Procesador de Calificaciones
// Usa while para ingresar calificaciones de estudiantes (termina con -1). 
// Calcula el promedio, la nota más alta y más baja.
// Ejercicio While 10: Procesador de Calificaciones
console.log("=== Procesador de Calificaciones ===");

function procesarCalificaciones() {
    let calificaciones = [];
    let calificacion = 0;
    let suma = 0;

    console.log("Ingresa las calificaciones de los estudiantes");
    console.log("Ingresa -1 para terminar");

    while (calificacion !== -1) {
        // En un entorno real, usarías prompt()
        calificacion = parseFloat(prompt("Ingresa una calificación (0-100) o -1 para terminar:"));

        if (calificacion !== -1) {
            if (calificacion >= 0 && calificacion <= 100) {
                calificaciones.push(calificacion);
                suma += calificacion;
                console.log(`Calificación ${calificaciones.length}: ${calificacion} agregada`);
            } else {
                console.log("Calificación inválida. Debe estar entre 0 y 100");
            }
        }
    }

    if (calificaciones.length > 0) {
        let promedio = suma / calificaciones.length;
        let mayor = Math.max(...calificaciones);
        let menor = Math.min(...calificaciones);

        console.log("\n=== RESULTADOS ===");
        console.log(`Total de calificaciones procesadas: ${calificaciones.length}`);
        console.log(`Calificaciones: [${calificaciones.join(", ")}]`);
        console.log(`Promedio: ${promedio.toFixed(2)}`);
        console.log(`Calificación más alta: ${mayor}`);
        console.log(`Calificación más baja: ${menor}`);
    } else {
        console.log("No se ingresaron calificaciones válidas");
    }
}


procesarCalificaciones();