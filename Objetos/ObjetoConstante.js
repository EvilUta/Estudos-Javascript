//Pessoa -> 123
const pessoa = { nome: "João"}
pessoa.nome = "Pedro"
console.log(pessoa)

// pessoa <- 456 -> { . . . }  
// pessoa = { nome: "Ana"}

Object.freeze(pessoa) //congela o objeto n consegue mais mexer nele

pessoa.nome = "Maria"
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaContante = Object.freeze({ nome: "joao"})
console.log(pessoaContante)