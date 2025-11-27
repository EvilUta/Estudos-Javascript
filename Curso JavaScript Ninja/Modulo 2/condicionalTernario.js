// Condicional Ternario 
// Condicao ? true : false
// substitui o if 

console.log(1 === 2 ? true : false)

var pessoa = {
    nome: 'Roberto',
    sexo: 'Masculino'
}

var sexo = pessoa.sexo === 'Feminino' ? 'a' : 'o'

console.log('Eu sou ' + sexo + ' ' + pessoa.nome)
console.log(`Eu sou ${sexo} ${pessoa.nome}`)