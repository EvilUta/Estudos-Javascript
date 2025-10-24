// Um Set é uma coleção de valores únicos — ou seja, não aceita valores repetidos.
// É iterável (pode ser percorrido com for...of);
// da para armazenar varios valores distintos
// da para usar metodos como add / has / delete

let mySet = new Set(['Renan','Jonas','Kathleen','Alberto','Loki'])
// essa e a forma de criacao do set -> let x = new set() e dentro do set sera passados os valores

console.log(mySet) // ao inves de usar lenght ele usa size
console.log(mySet.size) // ele mostra a quantidade de itens dentro do set

mySet.add('Jenifer', 'Gabriel') // ele retorna 1 so (o primeiro por isso gabriel nao e retornado)
// tem uma forma de adicionar mais de uma vez que é 
mySet.add('Carlos').add('Leticia').add('Mario')
console.log(mySet)

mySet.delete('Jonas')
console.log(mySet)

console.log(mySet.has('Renan')) // verifica se existe o elemento dentro de myset
 