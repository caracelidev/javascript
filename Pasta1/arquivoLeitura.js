const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

// Síncrono //
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assíncrono // 
fs.readFile(caminho, 'UTF-8', (err, conteudo) => { 
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)