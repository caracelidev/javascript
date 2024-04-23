const pessoa1 = new Object()
pessoa1.nome = 'Lincoln'
pessoa1.sobrenome = 'Caraceli'
pessoa1.idade = 18
pessoa1.cidade = 'Limeira'
pessoa1.falarNome = function(){
    console.log(`${this.nome} está falando seu nome`)
}
pessoa1.falarNome()


const pessoa2 = {
    nome: 'Lego',
    sobrenome:'Ney',
    idade: 24,
    cidade: 'Serra Negra'
}
console.log(pessoa2)