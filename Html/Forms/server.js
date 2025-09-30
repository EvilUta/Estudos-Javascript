const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)  
    resp.send("Parabéns, dados recebidos!")
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003...")
})
