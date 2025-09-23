const { promises } = require("dns")

setTimeout(function(){
    console.log("Executando callback...")

    setTimeout(function(){
        console.log("Executando callback...")
    }, 2000)

     setTimeout(function(){
        console.log("Executando callback...")
    }, 2000)

}, 2000)

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Executando promise...")
            resolve("Chique")
        }, tempo)
    })
}

let p = esperarPor(3000).then(texto => console.log(texto))