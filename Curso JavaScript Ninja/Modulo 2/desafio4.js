/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(argumento){
    return !!argumento
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(''))
console.log(isTruthy(NaN))
console.log(isTruthy(0))
console.log(isTruthy(undefined))
console.log(isTruthy(false))
console.log(isTruthy(null))

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(true))
console.log(isTruthy('true'))
console.log(isTruthy(1))
console.log(isTruthy([]))
console.log(isTruthy({}))
console.log(isTruthy('false'))
console.log(isTruthy(isTruthy))
console.log(isTruthy(Infinity))
console.log(isTruthy(Number))
console.log(isTruthy(Promise))

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
propriedades pedidas.
*/
var carro = {
    marca: 'Sandero',
    modelo: 'Top de linha',
    placa: 'ABC3O4O2',
    ano: 1998,
    cor: 'Preto bombom',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Método mudarCor
*/
carro.mudarCor = function(cor){
    this.cor = cor
}

/*
Método obterCor
*/
carro.obterCor = function(){
    return this.cor
}

/*
Método obterModelo
*/
carro.obterModelo = function(){
    return this.modelo
}

/*
Método obterMarca
*/
carro.obterMarca = function(){
    return this.marca
}

/*
Método obterMarcaModelo
*/
carro.obterMarcaModelo = function(){
    return `Esse carro é um ${this.marca} ${this.modelo}`
}

// Corrigindo forma de chamar — você estava chamando uma função que não existe
console.log(carro.obterMarcaModelo())

/*
Método para adicionar pessoas no carro
*/
carro.addPessoas = function(pessoas){

    // carro já está cheio
    if (this.quantidadePessoas === this.assentos) {
        return "O carro já está lotado!"
    }

    // tentar ultrapassar o limite
    if (this.quantidadePessoas + pessoas > this.assentos) {
        
        let vagas = this.assentos - this.quantidadePessoas
        
        if (vagas === 1) {
            return "Só cabe mais 1 pessoa!"
        }

        return `Só cabem mais ${vagas} pessoas!`
    }

    // adicionar normalmente
    this.quantidadePessoas += pessoas
    return `Já temos ${this.quantidadePessoas} pessoas no carro!`
}
