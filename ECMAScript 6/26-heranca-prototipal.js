// Função construtora "Animal"
// Essa função será usada como "molde" para criar novos objetos (instâncias) do tipo Animal
function Animal(kind, sound) {
    // Quando usamos 'new Animal()', o JavaScript cria um novo objeto vazio e faz:
    // novoObjeto.__proto__ = Animal.prototype
    // Depois executa a função 'Animal' com 'this' apontando para esse novo objeto
    this.kind = kind;   // Cria a propriedade "kind" dentro do novo objeto
    this.sound = sound; // Cria a propriedade "sound" dentro do novo objeto
}

// Aqui adicionamos um método ao PROTÓTIPO da função Animal.
// Isso significa que TODAS as instâncias de Animal (dog, cat, etc)
// terão acesso a esse método através da cadeia de protótipos (prototype chain)
Animal.prototype.hello = function() {
    // "this" aqui vai se referir ao objeto que chamar o método (dog ou cat)
    console.log(`${this.sound} I am a ${this.kind}`);
};

// Criamos duas instâncias (objetos) usando a função construtora Animal
const dog = new Animal('dog', 'Au Au!');
const cat = new Animal('cat', 'Miau Miauuuu');

// Quando chamamos 'dog.hello()':
// 1. O JS procura a propriedade "hello" dentro do objeto "dog" → não encontra.
// 2. Então ele sobe a cadeia e procura em "dog.__proto__" (que é Animal.prototype) → encontra!
// 3. Executa a função encontrada, com "this" = dog
dog.hello(); // "Au Au! I am a dog"


function filtro(tipo,data){
    this.tipo = tipo;
    this.data = data;
}

filtro.prototype.estilo = function(){
    console.log(`A categoria e ${this.tipo} e estreiou em ${this.data}!`)
}

const categoria = new filtro('Terror','Janeiro')
categoria.estilo();