function criaPessoa(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}, idade: ${this.idade}`
        }
    }
}

const p1 = criaPessoa('Lincoln', 'Caraceli', 18)
console.log(p1.nomeCompleto())