function gerarNumerosEntre(min, max){
    if(min > max){
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        resolve(24)
    })
}

gerarNumerosEntre(20,50)
    .then(console.log)