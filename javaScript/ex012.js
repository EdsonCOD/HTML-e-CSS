const prompt = require("prompt-sync")();
const tarefas = []
contador = 0
function implementar(tarefas) {
    while (true) {
        let tarefa = prompt("Digite 3 tarefas: ")
        contador += 1
        tarefas.push(tarefa)
        if (contador >= 3) {
            break
        }
    }    
}
implementar(tarefas)
console.log(tarefas)
