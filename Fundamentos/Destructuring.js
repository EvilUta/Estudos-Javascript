// novo recurso do ES2015

const pessoa = {
    nome: "Ronaldo",
    idade: 88,
    endereco: {
        logradouro: "Robson Luiz",
        numero: 234
    }
}

const {nome, idade } = pessoa 
console.log(nome, idade) 

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, humorado = true} = pessoa 
console.log(sobrenome, humorado)

const { endereco : { logradouro, numero } } = pessoa
console.log(logradouro, numero) 

