const fabricantes = ["Mercedes","Audi","BMW"]

function imprimir(nome, inidice) {
    console.log(`${inidice+1}.${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricantes) {
    console.log(fabricantes)
})

