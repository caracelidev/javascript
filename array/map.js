const numeros = [5, 50, 80, 1, 2 ,3, 5, 8, 7, 11, 15, 22, 27]
const numerosEmDobro = numeros.map(function(numeros){
    return numeros * 2
})

console.log(numerosEmDobro)


const pessoas = [
    {nome: 'Maria', idade: 49},
    {nome: 'Lego', idade: 32},
    {nome: 'Carlos', idade: 16},
    {nome: 'Ana', idade: 18},
    {nome: 'Jhonson', idade: 76},
    {nome: 'Leo', idade: 86}
]

const PessoasMap = pessoas.map(function(pessoas){
    return pessoas.nome
})

console.log(PessoasMap)

