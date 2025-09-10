function Pessoa () {
    this.idade = 0

    const self = this
    setInterval(function() { ///Ele chama uma função várias vezes, com uma pausa fixa entre cada execução.
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}

new Pessoa //instância de um objeto