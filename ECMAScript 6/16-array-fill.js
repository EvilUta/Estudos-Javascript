// serve para preencher dentro do array

const arr = new Array(50) // new -> cria um novo Array com 50 posicoes
arr.fill('Legal') // ele preenche legal 50 vezes
console.log(arr)

const ilove = new Array(25)
ilove.fill('te amo')
console.log(ilove)

// vc pode selecionar os idices tbm 

const ihate = new Array(25)
ihate.fill('te odeio', 3 , 6) // vai mostrar do terceiro ao sexto indice
console.log(ihate)

const newArr = [1,2,3,4,5,6]
newArr.fill('legal', 1, 3)  // vai substituir 'legal' dentro de 1 e 3
console.log(newArr)

