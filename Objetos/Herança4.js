function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const Objeto1 = new MeuObjeto
const Objeto2 = new MeuObjeto
console.log(Objeto1.__proto__ === Objeto2.__proto__)
console.log(MeuObjeto.prototype === Objeto1.__proto__)

MeuObjeto.prototype.nome = "Anônimo"
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

Objeto1.falar()

Objeto2.nome = "Rafael"
Objeto2.falar()

const objeto3 = {}
objeto3.__proto__ = MeuObjeto.prototype
objeto3.nome = "Objeto 3"
objeto3.falar() 

//Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__=== Function.prototype)
