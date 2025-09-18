const porta = 3003

const express = require("express")
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) 
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome || req.query.nome,
        preco: req.body.preco || req.query.preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}...`)
})
