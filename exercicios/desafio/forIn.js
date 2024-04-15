const notas = [5.5, 6.6, 7.7, 8.8, 9.9]

for(let i in notas){
    console.log(notas[i])
}

const pessoa = {
    nome: "Ana",
    sobrenome: "João", //São atributos
    idade: 18,
    cidade: "Limeira"
}
for(let atributo in pessoa){
    console.log(pessoa[atributo])
}