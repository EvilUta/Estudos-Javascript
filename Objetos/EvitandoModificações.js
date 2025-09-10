// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: "Qualquer",
    preço: 1.99,
    tag: "Promoção"
})
console.log("Extensível:", Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = "Borracha Escolar Branca"
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {
    nome: "Poggers da Silva",
    idade: 420
}
Object.seal(pessoa)
console.log("Selado", Object.isSealed(pessoa))

pessoa.sobrenome = "Silva"
delete pessoa.nome
pessoa.idade = 666
console.log(pessoa)

// Object.freeze = selado + valores constantes 
