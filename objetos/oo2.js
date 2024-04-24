const pai = {
    nome: "Pedro", 
    corCabelo: "Preto"
}

const filha1 = Object.create(pai)
filha1.nome = "Ana"
console.log(`${filha1.nome} tem o cabelo da cor ${filha1.corCabelo}`)

const filha2 = Object.create(pai, {
    nome:{ value: "Carlinha", writable: false, configurable: false}
})

filha2.nome = "Jhonson" 
console.log(filha2)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))