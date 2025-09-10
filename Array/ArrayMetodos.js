const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() // massa quebrou o carro!
console.log(pilotos) // ultimo elemento era o massa e ele saiu da lista

pilotos.push("Verstappen")
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift("Hamilton") // coloca em primeiro
console.log(pilotos)

// splice pode adicionar e remover elementos ao mesmo tempo

// adicionar
pilotos.splice(2, 0 , "Botas" , "Massa") // 0 para não remover ninguem / 2 para adicionar 2
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou -> 4 item vai ser removido (1 unico item) -> o numero é 3 pq os elementos começam com 0
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array
