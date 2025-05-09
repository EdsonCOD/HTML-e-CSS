const prompt = require("prompt-sync")();

let cursos = [
  {sigla: 'ads', curso : 'Analise e desenvolvimento de sistema'},
  {sigla: 'engsoft', curso : 'engenharia de software'},
  {sigla: 'cc', curso : 'ciência da computação'},
  {sigla: 'adm', curso : 'Administração'},
  {sigla: 'med', curso : 'medicina'},
  {sigla: 'mat', curso : 'matematica'}
]
let siglaBuscar = prompt("Sigla: ").toLowerCase();
let resultado = cursos.find(curso => curso.sigla === siglaBuscar)

if (resultado) {
  console.log(`Curso encontrado: ${resultado.curso}`);
} else{
  console.log("Curso não encontrado.")
}

