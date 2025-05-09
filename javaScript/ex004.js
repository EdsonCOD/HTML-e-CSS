const prompt = require("prompt-sync")();
let nascimento = Number(prompt("Digite o seu ano de nascimento : "))

const anoAtual = new Date().getFullYear();

let idade = anoAtual - nascimento
console.log(`Sua idade é ${idade}`)