///Crear un programa que permita obtener el máximo común divisor de dos números ingresados ​​por el usuario. Puede leer sobre el MCD 


function calcularMCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const numero1 = parseInt(prompt("Ingresa el primer número:"));
const numero2 = parseInt(prompt("Ingresa el segundo número:"));

const mcd = calcularMCD(numero1, numero2);

console.log(`El MCD de ${numero1} y ${numero2} es ${mcd}`);

