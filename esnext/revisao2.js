const { slice } = require("lodash")

// Arrow Function
const soma = (a,b) => a + b
console.log(soma(2,3))

// Arrow Function (this)
const lexico = () => console.log(this === exports)
const lexico2 = lexico.bind() // bind não muda o "this" de arrow
lexico()
lexico2()

// Parametro default
function log(texto = "node") {
    console.log(texto)
}

log()
log("Sou mais forte")

// Operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))
