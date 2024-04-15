// São funções que constroem objetos //

function criarPessoa() {
    return {
        nome: Lincoln,
        sobrenome: Caraceli,
        idade: 18
    }
}
function criarPessoa2(nome, sobrenome, idade){
    return{
        nome,
        sobrenome,
        idade
    }
}
console.log(criarPessoa2("Carlos", "Roberto", 29))