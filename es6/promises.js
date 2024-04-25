// Promise só aceita 1 parâmetro //

const promisse1 = new Promise((cumprirPromessa) => {
    cumprirPromessa(3)
})

promisse1.then((valor) => {
    console.log(valor)
})

// Promise aceita mais parâmetros se abrir as chaves //

const promisse2 = new Promise((cumprirPromessa) => {
    cumprirPromessa({
        x: 5,
        y: 2
    })
})

promisse2.then((valor) => {
    console.log(valor)
})

promisse2.then((valor) => {
    console.log(valor)
})

promisse2.then(valor => console.log(valor))