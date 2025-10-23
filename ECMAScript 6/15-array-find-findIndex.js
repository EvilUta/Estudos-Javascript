const data = [{
    name: 'Renan',
    age: 21,
    city: 'Tatui'
    },
    {
    name: 'Kathleen',
    age: 20,
    city: 'Boituva'    
    }
];

// const sampleArray = [4, -5, 0] 

// // o find busca o primeiro valor dentro do array

// const underZero = sampleArray.find( x => x < 0 ) // find busca uma condicao para buscar dentro do array -> array function para ter um retorno e o X e o valor do array
// // se x e menor que zero , ele mostra o valor q e menor que zero -> poderia ser um = ou <= ou > 
// console.log(underZero) 

// const underZeroIndex = sampleArray.findIndex( x => x < 0 ) // serve para procurar o índice (posição) do primeiro elemento de um array que satisfaz uma condição.
// console.log(underZeroIndex) // percorre da esquerda para direita -> Se nenhum elemento passar na condição, ele retorna -1.
// // find -> O valor encontrado ->  No primeiro true  -> undefined
// // findIndex -> O indice encontrado ->  No primeiro true  -> -1

const Re = data.find(Re => Re.name === 'Renan') // poderia ser person dentro dos (person => person.name === 'Renan')
console.log(Re)
const ReIndex = data.findIndex(ReIndex => ReIndex.name === 'Renan')
console.log(ReIndex)

// e se procurar algo que nao existe 
const notFound = data.findIndex(person => person.name === 'Carlos');
console.log(notFound); // a saida vai ser -1
