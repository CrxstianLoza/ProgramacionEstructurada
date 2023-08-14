function countLetters(string) {
    let count = 0

    for (let char of string.split("")){
    if(char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z'){
    count++
    }
}

return count;

}

function countNumbers(string) {
    let count = 0

    for (let char of string.split("")){
    if(char >= '0' && char <= '9'){
    count++
    }
}

return count;

}

function main(){
    let string = prompt('Ingrese un string')
    let letters = countLetters(string)
    let numbers = countNumbers(string)
    console.log(`Tu string tiene ${letters} letras y ${numbers} numeros`);
}

main()