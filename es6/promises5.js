function esperarPor(tempo = 2000){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}
esperarPor()