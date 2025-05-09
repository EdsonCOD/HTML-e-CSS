const prompt = require("prompt-sync")();
let palavra = prompt("Digite uma palavra: ")
function palindromo(palavra) {
    let palavraReversa = palavra.split("").reverse().join("")
    if (palavra === palavraReversa) {
        console.log("é palindromo")
    }else{
        console.log("Não é palindromo")
    }
}
palindromo(palavra)