const promise = new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carla', 'Daniela'])
})

const primeiroElemento = (array) => {
    return array[1]
}

const primeiraLetra = (string) => {
    return string[0]
}



promise
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(console.log)