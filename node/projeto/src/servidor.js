const port = 5555
const express = require('express')
const app = express()

app.get('/produtos', (req, resp, next) => {
    resp.send({nome: 'Notebook', preco: 1249.99}) // Converter para JSON //
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`)
})