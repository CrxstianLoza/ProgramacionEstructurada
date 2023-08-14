//Calcular el perimetro y el area de un cuadrado

let valor = parseInt(prompt("Ingrese el valor de su cuadrado en cm"))

//Perimetro

let perimetro = (valor + valor + valor + valor)
console.log(`El perimetro de su cuadrado es de ${perimetro} centimetros`);

//Area 

let area = (valor * valor)
console.log(`El area de su cuadrado es de ${area} centimetros cuadrados`);