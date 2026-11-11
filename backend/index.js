const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost'

const conn = require('./db/conn')

require('./models/rel')

const funcionarioController = require('./controller/funcionario.controller')
const condominioController = require('./controller/condominio.controller')


// ---middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// Rotas publicas
app.post('/funcionario', funcionarioController.cadastrar)



// rotas privadas
app.post('./condominio',condominioController.cadastrar)
app.get('./condominio',condominioController.listar)
app.get('./condominio',condominioController.consultar)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'API rodando' })
})


conn.sync()
    .then(() => {
        app.listen(PORT, hostname, () => {
            console.log(`Servidor rodando em http://${hostname}:${PORT}`)
        })
    })
    .catch((err) => {
        console.error('Erro ao conectar com o banco de dados!', err)
    })
