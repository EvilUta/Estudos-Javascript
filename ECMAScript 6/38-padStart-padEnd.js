// São ideais pra formatar textos, números, datas, códigos, IDs, etc.
//  não alteram a string original, mas retornam uma nova string
// padStart no inicio
// padEnd no final

console.log(''.padStart(5,'HI')) // nessa string vazia eu quero que comece com 5 espaços
console.log('abc'.padStart(10,'Top')) // ele preenche os 10 como dá e depois adiciona a string ao final

console.log('abc'.padEnd(10,'Top')) // mesma coisa so que preenche no final

