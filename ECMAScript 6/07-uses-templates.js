const ireland = {
    live: 'Dublin',
    love: 'Galway'
}

const text = 'Eu moro em ' + ireland.live + ' e sou apaixonado por ' + ireland.love + '!' // concatenizacao com trabalho maior
console.log(text)

// template literal
const newText = `Eu moro em ${ireland.live} e sou apaixonado por ${ireland.love}!`
console.log(newText)

// Variaveis que quero pular linha -> feio e dificil
const fruits = 'Banana'
    +`\n`
    + 'Orange'
    +`\n`
    + 'Apple'
console.log(fruits)

// Variaveis que quero pular linha -> bonito e mais facil
const newFruits = 
`Banana
Orange
Apple`
console.log(newFruits)
