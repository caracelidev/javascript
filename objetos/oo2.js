const pai = { nome: "Pedro" , corCabelo: "Preto"}

const filha1 = Object.create(pai)
filha1.nome = "Ana"
console.log(`${filha1.nome} tem o cabelo da cor ${filha1.corCabelo}`)

const filha2 = Object.create(pai, {
    nome:{ value: "Carlinha", writable: false, enumerable: true}
})

filha2.nome = "Jhonson"

console.log(filha2)