const produtos = [
    {nome: 'Notebook' , preco: 2499 , fragil: true},
    {nome: 'Pedra' , preco: 2 , fragil: false},
    {nome: 'Mamadeira' , preco: 6700 , fragil: true},
    {nome: 'Foguete' , preco: 22 , fragil: false},
]

console.log(produtos.filter(function(p) {
    return false
} ) )

const carro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(carro).filter(fragil))