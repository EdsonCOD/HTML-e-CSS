const prompt = require("prompt-sync")();
const numeros = []
function duplicadas(numeros) {
    let quantidade = Number(prompt("Quantos numeros voce quer inserir? "))

    for (let i = 0; i < quantidade; i++) {
        let inserir = prompt(`Digite o numero ${i + 1}: `)
        numeros.push(inserir)        
    }
    const semDuplicatas = new Set(numeros)
    return semDuplicatas
}

const resultado = duplicadas(numeros)

console.log("Com duplicatas: ", numeros)
console.log("sem Duplicatas: ", [...resultado])

