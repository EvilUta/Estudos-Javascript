const alunos = [
  { nome: "João", nota: 7.5, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 5.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
  { nome: "Lucas", nota: 6.3, bolsista: false }
]

// Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = alunos 
    .map(aluno => aluno.bolsista)
    .reduce((acumulador, bolsista) => acumulador && bolsista)

console.log("Todos são bolsistas?", todosBolsistas)


// Desafio 2: Algum aluno é bolsista?

const algumBolsista = alunos
  .map(aluno => aluno.bolsista)
  .reduce((acumulador, bolsista) => acumulador || bolsista)

console.log("Algum é bolsista?", algumBolsista)
