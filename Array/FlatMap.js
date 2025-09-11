const escola = [
    {
        nome: "Turma M1",
        alunos: [
            { nome: "Gustavo", nota: 8.1 },
            { nome: "Ana", nota: 9.3 }
        ]
    },
    {
        nome: "Turma M2",
        alunos: [
            { nome: "Rebeca", nota: 6.0 },
            { nome: "Robson", nota: 0.4 }
        ]
    }
]

const getNotaAluno = a => a.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotaTurma)
console.log(notas1)

