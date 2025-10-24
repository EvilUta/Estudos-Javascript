const animals = {
    camel: 3,
    llama: 2,
    alpaca: 5,
};

console.log(Object.entries(animals))

// Ele transforma um objeto em uma lista de pares [chave, valor]
// facilita para usar map, filter, for of

const animalsMap = new Map(Object.entries(animals));
console.log(animalsMap.size) // consegue verificar a quantidade de animals 
console.log(animalsMap.has('llama'))

// da para pegar o valor 

console.log(animalsMap.get('alpaca')) // retorna a posicao dele no caso 5

console.log(Object.keys(animals)) // passa a chave do que ha