const notas = [6.7, 7.4, 9.8, 8.1 , 7.7]

for(i in notas) {
    console.log(i, notas [i])
}

const pessoa = {
    nome: "Mario",
    sobrenome: "Games",
    idade: 42,
    peso: 120
}

for(Atributo in pessoa){
    console.log(`${Atributo} = ${pessoa[Atributo]}`)
}