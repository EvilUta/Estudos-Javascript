var teste 

if(1) {teste = true} else { teste = false}

console.log(teste)

 if(0) {teste = true} else { teste = false}

console.log(teste)

// Truthy or Falsy
// Falsy -> Undefined - 0 , Null - -0, NaN - '' ou ""  

if(''){teste = true} else {teste = false}
console.log(teste)

if('0'){teste = true} else {teste = false}
console.log(teste)

if('Renan'){teste = true} else {teste = false}
console.log(teste)

if(undefined){teste = true} else {teste = false}
console.log(teste)

if(null){teste = true} else {teste = false}
console.log(teste)

if({}){teste = true} else {teste = false}
console.log(teste)

if([]){teste = true} else {teste = false}
console.log(teste)

if(NaN){teste = true} else {teste = false}
console.log(teste)

if(true){teste = true} else {teste = false}
console.log(teste)

if(false){teste = true} else {teste = false}
console.log(teste)

// Truthy -> sao todos os outros 
// TRUTHY e FALSY -> tem uma forma de descobrir a representacao booleana -. '!!'

console.log(!!'')
console.log(!!NaN)
console.log(!!false)
console.log(!!true)
console.log(!!1)
console.log(!!'0')