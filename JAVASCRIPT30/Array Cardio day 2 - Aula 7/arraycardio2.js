const usuarios = [
  { id: 1, nome: "Renan", idade: 20, ativo: true },
  { id: 2, nome: "Gustavo", idade: 17, ativo: false },
  { id: 3, nome: "Lívia", idade: 25, ativo: true },
  { id: 4, nome: "André", idade: 30, ativo: false },
];

//Array.prototype.some()
const temMenorDeIdade = usuarios.some(u => u.idade < 18);
console.log(temMenorDeIdade); // true (porque Gustavo tem 17)

//Array.prototype.every()
const todosAtivos = usuarios.every(u => u.ativo === true);
console.log(todosAtivos); // false (nem todos estão ativos)

//Array.prototype.find()
const usuarioInativo = usuarios.find(u => u.ativo === false);
console.log(usuarioInativo); // { id: 2, nome: "Gustavo", idade: 17, ativo: false }

//Array.prototype.filter()
const usuariosAtivos = usuarios.filter(u => u.ativo === true);
console.log(usuariosAtivos);
/*
[
  { id: 1, nome: "Renan", idade: 20, ativo: true },
  { id: 3, nome: "Lívia", idade: 25, ativo: true }
]
*/

//Array.prototype.findIndex()
const indiceRenan = usuarios.findIndex(u => u.nome === "Renan");
console.log(indiceRenan); // 0

//Exemplo com ID
const idProcurado = 3;
const index = usuarios.findIndex(u => u.id === idProcurado);

if (index !== -1) {
  usuarios[index].ativo = false;
  console.log(`Usuário ${usuarios[index].nome} agora está inativo.`);
}
