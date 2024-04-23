const numeros = [5, 50, 80, 1, 2 ,3, 5, 8, 7, 11, 15, 22, 27]

console.log(numeros.filter(function(numeros){
    return [numeros]>= 10
}))

const pessoas = [
    {nome: 'Maria', idade: 49},
    {nome: 'Lego', idade: 32},
    {nome: 'Carlos', idade: 16},
    {nome: 'Ana', idade: 18},
    {nome: 'Jhonson', idade: 76},
    {nome: 'Leo', idade: 86}
]
console.log(pessoas.filter(function(pessoas){
    return pessoas.nome.length >= 5
}))