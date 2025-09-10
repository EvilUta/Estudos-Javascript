console.log( 'Comparacao 1 =' , '1' == 1 ) 
console.log( 'Comparacao 2 =' , '50' == 40 ) 
console.log( 'Comparacao 3 =' , '50' != 40 ) 
console.log( 'Comparacao 4 =' , '50' !== 40 ) 
console.log( 'Comparacao 5 =' , '50' <= 40 ) 
console.log( 'Comparacao 5 =' , '50' >= 40 ) 

const d1 = new Date(0) 
const d2 = new Date(0)
console.log( "Comparacao 6 =" , d1 === d2 )
console.log( "Comparacao 7 =" , d1 == d2 )
console.log( "Comparacao 8 =" , d1.getTime() === d2.getTime()) // Ele retorna o tempo em milissegundos desde 1 de janeiro de 1970

console.log( "Comparacao 9 =" , undefined == null )
console.log( "Comparacao 10 =" , undefined === null )

