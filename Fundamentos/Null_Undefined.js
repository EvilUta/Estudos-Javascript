let valor // não declara nada
console.log(valor) // undefined 

valor = null // define o valor como null 
console.log(valor) // ausensia de valor 
// console.log(valor.toString()) // erro, não dá para acessar atributos em um valor nulo 

const produto = { } // ojeto vazio
console.log(produto.preco) // undefined

produto.preco = 50.30
console.log(produto) 

produto.preco = null // sem preço 
console.log(produto) // o preço nulo, não existe 

produto.preco = undefined // deixa sem preço com o atributo existente 
console.log(!!produto.preco) // como o produto é falso, ele fica false
delete produto.preco // deleta o atributo 

console.log(produto)

