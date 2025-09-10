console.log(Math.ceil(6.1))

const objt1 = {}
objt1.nome = "Tenis"
console.log(objt1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log("Exec... " + this.nome)
    }
}

const objt2 = new Obj("Mouse")
const objt3 = new Obj("Teclado")
console.log(objt2.nome)
console.log(objt3.nome)
objt3.exec()
