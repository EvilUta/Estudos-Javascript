console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array("Bia","Carlos","Ana")
console.log(aprovados)

aprovados = ["Bia","Carlos","Ana"]
console.log(aprovados[0]) // Indexado a partir do 0
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Undefined pois não foi indexado

aprovados[3] = "Paulo"
console.log(aprovados[3])

aprovados.push("Larisso")
console.log(aprovados.length)

aprovados[9] = "Rafael"
console.log(aprovados.length) // como pula os numeros fica como empty items 
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()    // ordenado -> altera o proprio o array
console.log(aprovados)  

delete aprovados [1] // exclui um elemento mas não vai reodernar se tornara UNDEFINED
console.log(aprovados[1])  
console.log(aprovados[2])  

aprovados = ["Bia","Carlos","Ana"]
aprovados.splice(1 , 1) // REMOVER E ADICIONAR ELEMENTOS AO MEMSO TEMPO
console.log(aprovados)
aprovados.splice(1 , 2 , "Elemento 1" , "Elemento 2")
console.log(aprovados)

console.log(`Igor Piroca`)