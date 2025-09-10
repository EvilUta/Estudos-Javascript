function aula(nome, videoID) {
    this.nome = nome    
    this.videoID = videoID
}

const aula1 = new aula("Bem vindo" , 123)
const aula2 = new aula("Segunda Aula" , 456)
console.log(aula1,aula2)


// Simulando o new
function novo(f, ...parametros) {
    const obj = {}
    obj.__proto__=f.prototype
    f.apply(obj, parametros)
    return obj
}

const aula3 = novo(aula, "Bem vindo novamente" , 789)
const aula4 = novo(aula, "Não te aguento mais" , 91011)
console.log(aula2,aula4)