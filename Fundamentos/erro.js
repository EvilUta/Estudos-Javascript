Function tratarErroELancar(erro) {
 throw new Error
}

function imprimirNomeGritado(obj) {
    try {
    console.log(obj.name.toUpperCase() + "!!!")
} catch (e) {
    tratarErroELancar()
}
}

const obj = {nome: "Roberto"}
imprimirNomeGritado(obj)