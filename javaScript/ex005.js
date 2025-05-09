const aluno = {
    Nome : "Edson",
    Sobrenome : "Elias",
    idade : 21,
    curso : "ADS",
    periodo : 2,
    Dados : function(){
        return this.Nome + " " + this.Sobrenome + " | idade: " + this.idade + " | curso: " + this.curso + " | período: " + this.periodo;
    }
};
console.log(aluno.Dados())