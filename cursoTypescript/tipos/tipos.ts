// string
let nome = 'João'
console.log(nome)
// nome = 28 -> esse valor é string então ele não funciona

// numbers
let idade = 27 
// idade = 'Ana'
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explicitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 27'

// array
let hobbies: any[] = ['cozinhar', 'praticar Esportes']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)  

// tuplas
let endereco: [string, number] = ['Av Principal', 99]
console.log(endereco)

// endereco = ['Rua Importante', 1260, 'bloco C']

// Enums
enum Cor{
    Cinza,
    Verde,
    Azul
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Cinza , Cor.Verde)

// Any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW' , ano: 2019}
console.log(carro)

// Funções 
function retornarMeuNome(): string {
    return nome
}

console.log(retornarMeuNome())

function digaOi(): void {
    console.log('oi')
}
digaOi()

function multiplicar(numA,numB): number {
    return numA * numB
}

console.log(multiplicar(2,2))

// Funções como tipos
let calculo : (numeroA: number, numeroB: number ) => number
// calculo = digaOi
// calculo()

calculo = multiplicar
console.log(calculo(5,6))

// objetos
let usuario: { nome: string , idade: number} = {
    nome: 'João',
    idade: 27
}

console.log(usuario)

// usuario = {}

// usuario = {name: 'maria' , age: 31}

// Desafio -> criar um objeto funcionari com: array com os nomes dos supervisores / função de bater ponto que recebe a hora e retorna - uma string -> ponto normal (<= 8) / fora do horario ( > 8 )

// Criando o objeto funcionario
let funcionario = {
  // Array com os nomes dos supervisores
  supervisores: ['Carlos', 'Mariana', 'João'],

  // Função que recebe a hora e retorna se o ponto é normal ou fora do horário
  baterPonto(hora) {
    if (hora <= 8) {
      return 'Ponto normal';
    } else {
      return 'Fora do horário';
    }
  }
};

// Testando o objeto
console.log(funcionario.supervisores); // ['Carlos', 'Mariana', 'João']
console.log(funcionario.baterPonto(7)); // 'Ponto normal'
console.log(funcionario.baterPonto(10)); // 'Fora do horário'


let funcionario2 = { 
  supervisores: ['Ana', 'Claudio', 'Rodolfo'],
  baterPonto(hora) {
    if (hora <= 8) {
      return 'Ponto normal';
    } else {
      return 'Fora do horário';
    }
  }
};
console.log(funcionario2.supervisores); 
console.log(funcionario2.baterPonto(7)); 
console.log(funcionario2.baterPonto(10));

// Union Types
let nota: any = 10
console.log(`Minha nota é ${nota}!`)
nota = '10' 
console.log(`Minha nota é ${nota}!`)

// Checando tipos
let valor  = 30
if (typeof valor === 'number') {
    console.log('é um number!')
} else {
    console.log(typeof valor)
}

// Tipo Never
function falha(msg: string): never {
  throw new Error(msg)
}

const produto = {
  nome: 'Sabão',
  preco: 4,
  validarProduto() {
    if (!this.nome || this.nome.trim().length === 0) {
      falha('Precisa ter um nome')
    }
    if (this.preco < 0) {
      falha('Preço inválido!')
    }
  }
}

produto.validarProduto()

// Valores opcionais como null

// let altura = 12
// altura = null

// let alturaOpcional: null | number = 12
// alturaOpcional = null

type Contato = {
  nome: string,
  tel1: string,
  tel2: string | null
}

const contato1: Contato = {
  nome: 'Fulano',
  tel1: '988923',
  tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null
// podeSerNulo = 12
console.log(podeSerNulo)
// podeSerNulo = "abc"
console.log(podeSerNulo)

// Desafio -> associar os tipos nessa aplicacao
// Tipo para a conta bancária
type ContaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
}

// Tipo para o correntista
type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
}

// Objeto contaBancaria tipado
let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor;
  }
}

// Objeto correntista tipado
let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['3456653','312344']
}

// Testando
correntista.contaBancaria.depositar(3000)
console.log(correntista)


