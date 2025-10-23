class Animal {
    constructor(name){ // colocar como parametro na classe construtora o nome 
        this.name = name; 
    }
    hello(){
        console.log(`I am ${this.name}!`);
    }
}

class Dog extends Animal { // o extends significa q o Dog agora e um subclasse de Animal
    constructor(name, sound) { 
        super(name) // como e um subclasse tem q ser chamado a funcao SUPER para conseguir vincular
        this.sound = sound;
    }
    bark(){ // latir em ingles
        console.log(`${this.sound} I am ${this.name}!`);
    }
}

const elephant = new Animal('Dumbo');
const dog = new Dog('Jake','Au Au');

dog.hello()
dog.bark()


// class	Define uma classe (modelo de objeto)
// extends	Cria uma subclasse que herda propriedades e métodos da classe pai
// constructor	Função que roda quando a classe é instanciada
// super()	Chama o construtor da classe pai (obrigatório em subclasses)
// this	Referência ao objeto atual da classe
// Métodos (hello, bark)	Funções definidas dentro da classe que podem ser usadas pelas instâncias