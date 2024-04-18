const alunos = [
    {nome: 'Douglas', idade: 15, salario: 40000, deficiente: false},
    {nome: 'Clara', idade: 16, salario: 499.99, deficiente: false},
    {nome: 'Jhonson', idade: 17, salario: 1000, deficiente: true},
    {nome: 'Ney', idade: 18, salario: 4999, deficiente: false},
    {nome: 'Claudia', idade: 19, salario: 1488, deficiente: false},
    {nome: 'Tramontinaldo', idade: 19, salario: 2499, deficiente: true}
]
const deficientes = alunos => alunos.deficiente
console.log(alunos.filter(deficientes))

// Retorna alunos deficientes //
console.log(alunos.filter(function(alunos){
    return alunos.deficiente
}))
// Retorna alunos com salário maior ou igual de R$2499 //
console.log(alunos.filter(function(alunos){
    return alunos.salario >= 2499
}))

// Retorna maiores de idade //
console.log(alunos.filter(function(alunos){
    return alunos.idade >= 18
}))