// Cadeia de protótipos (Prototype Chain)
const avo = { atributo1: "A"}
const pai = { __proto__: avo, atributo2: "B"}
const filho = { __proto__: pai, atributo3: "C" }
console.log(filho.atributo1, filho.atributo2 , filho.atributo3)

const carro = {
    VelocidadeAtual: 0,
    VelocidadeMax: 200,
    acelerarMais(delta) {
        if (this.VelocidadeAtual + delta <= this.VelocidadeMax) {
            this.VelocidadeAtual += delta
        } else {
            this.VelocidadeAtual = this.VelocidadeMax
        }
    },
    status() {
        return `${this.VelocidadeAtual}Km/h de ${this.VelocidadeMax}Km/h`
    }
}

const ferrari = {
    modelo: "Linguisa",
    VelocidadeMax: 320 // shadowing
}

const volvo = {
    modelo: "top de linha",
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari.status()) // "0Km/h de 320Km/h"
console.log(volvo.status())   // "top de linha: 0Km/h de 200Km/h"

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status)
