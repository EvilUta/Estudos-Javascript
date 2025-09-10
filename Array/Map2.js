const carrinho = [
    '{"Nome": "Borracha" , "Preço": 3.45}',
    '{"Nome": "Caderno" , "Preço": 12.25}',
    '{"Nome": "Lapis" , "Preço": 4.22}',
    '{"Nome": "Estojo" , "Preço": 15.00}'
]

// Retornar um array apenas com os preço

let preco = carrinho.map(function(precoItens) {
    return JSON.parse(precoItens).Preço
})
console.log(preco)


