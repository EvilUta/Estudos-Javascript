const bodyParser = require('body-parser')
const express = require('express')
const multer = require('multer')
const path = require('path')
const cors = require('cors') // <-- Importado aqui
const app = express()

app.use(cors()) // <-- Habilita requisições entre portas diferentes
app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.resolve(__dirname, 'upload'))
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            console.error(err)
            return res.status(500).send('Erro ao enviar arquivo.')
        }
        res.send('Upload concluído com sucesso!')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.get('/teste', (req, res) => res.send('Ok'))

app.listen(8080, () => console.log('Executando...'))
