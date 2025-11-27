// Declarar uma variável qualquer, que receba um objeto vazio.
var qualquer = {}

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var pessoa = {
    nome: 'Renan',                 // String
    sobrenome: 'Lemes',            // String
    sexo: 'Masculino',             // String
    idade: 21,                     // Number
    altura: 1.65,                  // Number
    peso: 63,                      // Number
    andando: false,                // Boolean
    caminhouQuantosMetros: 0       // Number
};


/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

pessoa.fazerAniversario = function(){
    this.idade++   // se chama this para chamar o objeto 
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

pessoa.andar = function(metros){  // nao esquecer de passar o paramentros 
    this.caminhouQuantosMetros += metros
    this.andando = true
}

pessoa.andar(10)
console.log(pessoa.caminhouQuantosMetros)


/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

pessoa.parar = function(){
    this.andando = false
}

pessoa.parar()
console.log(pessoa.andando)



/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

pessoa.nomeCompleto = function(){
    return `Ola! Meu nome e ${this.nome} ${this.sobrenome} `
}


/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

pessoa.mostrarIdade = function(){
    return `Ola, eu tenho ${this.idade} anos`
}


/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

pessoa.mostrarPeso = function(){
    return `Eu peso ${this.peso}`
}



/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

pessoa.mostrarAltura = function(){
    return `Minha altura e ${this.altura}`
}



/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.nomeCompleto()
console.log(pessoa.nomeCompleto())


/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarIdade()
console.log(pessoa.mostrarIdade())

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarPeso()
console.log(pessoa.mostrarPeso())

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarAltura()
console.log(pessoa.mostrarAltura())

/*
Faça a `pessoa` fazer 3 aniversários.
*/

console.log(pessoa.idade); 
pessoa.fazerAniversario();
console.log(pessoa.idade); 
pessoa.fazerAniversario();
console.log(pessoa.idade); 
pessoa.fazerAniversario();
console.log(pessoa.idade);

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

console.log(pessoa.mostrarIdade()) // 24 anos

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(10)
pessoa.andar(30)
pessoa.andar(5)

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.andando)

/*
Se a pessoa ainda está andando, faça-a parar.
*/

pessoa.parar()

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log(pessoa.andando) // false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log(`A pessoa caminhou ` + pessoa.caminhouQuantosMetros + ` metros`)

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/


// Agora, apresente-se ;)


pessoa.apresentacao = function(){
    var artigo
    var idadeTexto
    var metrosTexto
    if (this.sexo === 'Feminino'){
        artigo = 'a'
    } else {
        artigo = 'o'
    }
    if (this.idade === 1){
        idadeTexto = 'ano'
    } else {
        idadeTexto = 'anos'
    }
    if (this.caminhouQuantosMetros === 1) {
        metrosTexto = 'metro'
    } else {
        metrosTexto = 'metros'
    }
    return `Ola, eu sou ${artigo} ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${idadeTexto}, meu peso e ${this.peso}, so hoje, eu ja caminhei ${this.caminhouQuantosMetros} ${metrosTexto}!`
    
}

pessoa.apresentacao()
console.log(pessoa.apresentacao())