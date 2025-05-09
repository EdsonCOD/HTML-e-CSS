const prompt = require("prompt-sync")();

function Pessoa(pessoa) {
    return `Nome: ${pessoa.nome}\nIdade: ${pessoa.idade} anos\nCidade: ${pessoa.cidade}`  
}

const pessoa = {
    nome: prompt("Digite seu nome: "),
    idade: prompt("Digite sua idade: "),
    cidade: prompt("Digite sua cidade: ")
}

console.log(Pessoa(pessoa))