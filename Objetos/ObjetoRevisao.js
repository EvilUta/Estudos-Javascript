// Coleção dinâmica de pares/valor
const produto = new Object
produto.nome = "Fone"
produto["Marca do produto"] = "Marca Top Top"
produto.preco = 450

console.log(produto)
delete produto.preco
delete produto["Marca do produto"]
console.log(produto)

const carro = {
    marca: "Carroça",
    preco: 100000000,
    ano: 1650,
    Dono: {
        nome: "Diabo",
        idade: 145,
            endereço: {
                rua: "Quintos dos infernos",
                numero: 666
        }
    },
    condutores: [{
        nome: "Diabete(Noiva do diabo)",
        tipoCarteira: "Infernal"
    }],
    calcularValorSeguro: function(desconto){
        return this.preco / desconto
    }
}

console.log(carro)
console.log("O valor do seguro é: " , carro.calcularValorSeguro(10))
