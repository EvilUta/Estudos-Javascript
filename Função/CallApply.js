function getPreco(imposto = 0, moeda = "R$" ){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
} 

const produto = {
    nome: "Notebook",
    preco: 4500,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 30000,
    desc: 0.15
}

console.log(getPreco.call(carro))  // Chama o objeto
console.log(getPreco.apply(carro)) // Chama o objeto (igualmente)

console.log(getPreco.call(carro, 0.17, "$")) // -> passa outros parametros
console.log(getPreco.apply(carro, [0.17 , "$"])) // tem que usar Array dentro de um apply