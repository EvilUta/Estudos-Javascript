// Definição da classe Animal
class Animal {
    // O constructor é chamado automaticamente sempre que usamos 'new Animal(...)'
    constructor(kind, sound) {
        // 'this' aqui representa a nova instância criada (ex: o objeto 'dog')
        this.kind = kind;   // tipo do animal (ex: "dog")
        this.sound = sound; // som do animal (ex: "Au Au!")
    }

    // Método "normal" — pertence ao prototype das instâncias
    // Todas as instâncias (dog, cat, etc) compartilham esse método
    hello() {
        console.log(`${this.sound} I am a ${this.kind}`);
    }

    // Método "estático" — pertence à CLASSE, não aos objetos criados a partir dela
    // É usado para informações gerais sobre a classe, não sobre um animal específico
    static info() {
        console.log('This is a class to create animals!');
    }

    // Getter — parece uma propriedade, mas é uma função especial
    // Quando você acessa "dog.name", esse código é executado
    get name() {
        console.log('My name is Jake');
    }

    // Setter — também parece uma propriedade, mas é chamado ao atribuir valor
    // Quando você faz "dog.nickname = 'Rex'", o valor 'Rex' entra como parâmetro 'nick'
    set nickname(nick) {
        this.nick = nick;
    }
}

// Criamos duas instâncias (objetos) da classe Animal
// Cada uma vai rodar o 'constructor' e armazenar seus próprios valores
const dog = new Animal('dog', 'Au Au!');
const cat = new Animal('cat', 'Miau Miauuuu');

// 🔹 Chamada de método estático
// 'info()' pertence à classe, então chamamos direto nela, e não nas instâncias
Animal.info(); // "This is a class to create animals!"

// 🔹 Chamando o método normal (do prototype)
dog.hello(); // "Au Au! I am a dog"
cat.hello(); // "Miau Miauuuu I am a cat"

// 🔹 Usando o setter — sem parênteses!
// Isso chama automaticamente o método 'set nickname(nick)'
dog.nickname = 'Rex'; 

// Agora a instância 'dog' ganhou a propriedade 'nick'
console.log(dog.nick); // "Rex"

// 🔹 Usando o getter — também sem parênteses
// Executa o código dentro de 'get name()'
dog.name; // "My name is Jake"
