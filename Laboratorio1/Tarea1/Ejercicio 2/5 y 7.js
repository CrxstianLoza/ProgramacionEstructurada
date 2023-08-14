let num1 = Number(prompt('Ingrese su numero'))
if(num1 % 5 === 0 && num1 % 7 === 0){
    alert('es multiplo de 5 y 7')
}else if(num1 % 5 === 0 && num1 % 7 != 0){
alert('solo es multiplo de 5')
}else if(num1 % 5 != 0 && num1 % 7 === 0){
    alert('solo es multiplo de 7')
}else{
    alert('no es multiplo de ninguno')
}
