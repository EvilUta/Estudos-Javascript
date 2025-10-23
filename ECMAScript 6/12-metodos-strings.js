let text = 'Ola, top top, chique chique!!!'

console.log(text.startsWith('Ola')) // comeca com qual valor -> a resposta vai ser true
console.log(text.startsWith('chique')) // false
console.log(text.startsWith('a', 2)) // quero que comece contar depois de 2
console.log(text.endsWith('!')) // o texto se encerra com ! entao e verdadeiro
console.log(text.endsWith('chi', 24))
console.log(text.includes('top')) // verifica se existe dentro da string

// metodo repeat
console.log('lol'.repeat(10)) // se repetira 10x