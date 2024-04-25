function funcionaOuNao(valor, chanceErr){
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErr){
            reject('Ocorreu um erro!')
        } else{
            resolve(valor)
        }
    })  
}
funcionaOuNao('Teste...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))  
    .then(() => console.log('Final da execução.'))