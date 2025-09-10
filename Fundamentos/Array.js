const valores =  [ 7.7 , 8.9, 6.3 ,  9.2 ] // Array esta dentro de colchetes , array são objetos especiais e separados por virgula
console.log(valores[0], valores[3]) // Acessando os valores através de índices 
console.log(valores[4]) // Não existe

valores[4] = 20
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores) 

console.log(valores.pop()) // remove o último elemento 
delete valores[0]
console.log(valores)

console.log(typeof valores) // typeof é o tipo de dado , objeto 
