// Ejercicio While 3: Validador de Contraseña
// Desarrolla un programa que use while para solicitar una contraseña hasta que cumpla con los criterios: 
// mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número.
console.log("=== Validador de Contraseña ===");

let password = "Alicia22";
let esValida = false;

while (password !==esValida) {
    password = prompt("Ingresa una contraseña:");

    
    const tieneLongitud = password.length >= 8;
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);

    if (tieneLongitud && tieneMayuscula && tieneMinuscula && tieneNumero) {
        esValida = true;
        console.log(" Contraseña válida.");
    } else {
        console.log(" La contraseña debe tener:");
        console.log("- Mínimo 8 caracteres");
        console.log("- Al menos una letra mayúscula");
        console.log("- Al menos una letra minúscula");
        console.log("- Al menos un número");
    }
}




const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Validador de Contraseña ===");

function pedirPassword() {
    rl.question("Ingresa una contraseña: ", (password) => {
        const tieneLongitud = password.length >= 8;
        const tieneMayuscula = /[A-Z]/.test(password);
        const tieneMinuscula = /[a-z]/.test(password);
        const tieneNumero = /[0-9]/.test(password);

        if (tieneLongitud && tieneMayuscula && tieneMinuscula && tieneNumero) {
            console.log("✅ Contraseña válida.");
            rl.close();
        } else {
            console.log("❌ La contraseña debe tener:");
            console.log("- Mínimo 8 caracteres");
            console.log("- Al menos una letra mayúscula");
            console.log("- Al menos una letra minúscula");
            console.log("- Al menos un número");
            pedirPassword(); // vuelve a pedirla
        }
    });
}

pedirPassword();
