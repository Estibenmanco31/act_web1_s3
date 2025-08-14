// Ejercicio While 9: Juego de Adivinanza Mejorado
// Crea un juego donde el usuario debe adivinar un número entre 1 y 100. 
// Usa while para dar pistas (mayor/menor) y limita a 7 intentos.

console.log("=== Juego de Adivinanza Mejorado ===");

function juegoAdivinanza() {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let adivinanza = 0;
    let intentos = 0;
    let maxIntentos = 7;

    console.log("¡Bienvenido al juego de adivinanza!");
    console.log("Adivina el número entre 1 y 100");
    console.log(`Tienes ${maxIntentos} intentos máximo`);
    console.log("Pistas: 'el numero es mayor', 'el numero es menor' ");

    while (adivinanza !== numeroSecreto && intentos < maxIntentos) {
        
        adivinanza = parseInt(prompt(`Intento ${intentos + 1}/${maxIntentos}. Ingresa tu número:`));
        intentos++;

        if (adivinanza === numeroSecreto) {
            console.log(`¡Felicidades! Adivinaste el número ${numeroSecreto} en ${intentos} intento(s)`);
        } else {
            let diferencia = Math.abs(adivinanza - numeroSecreto);

            if (adivinanza < numeroSecreto) {
                console.log("Muy bajo. El número es mayor");
        
            } else {
                console.log("Muy alto. El número es menor");
            }

            if (intentos < maxIntentos) {
                console.log(`Te quedan ${maxIntentos - intentos} intento(s)`);
            }
        }
    }

    if (adivinanza !== numeroSecreto) {
        console.log(`Perdiste. El número era: ${numeroSecreto}`);
    }
}


juegoAdivinanza();