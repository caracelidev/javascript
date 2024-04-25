const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 5499, fragil: true },
    { nome: 'Copo de vidro', preco: 12.99 , fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99 , fragil: false }
]

console.log(produtos.filter(function(produtos){
    return produtos.fragil === true
}))


console.log(produtos.filter(function(produtos){
    return produtos.preco >= 2499
}))


console.log(produtos.filter((produtos) => {
    return produtos.preco <= 18.99
}))


console.log(produtos.filter(function(produtos){
    return produtos.fragil === false
}))


console.log(produtos.filter(function(produtos){
    if(produtos.fragil === true){
        console.log('Produto frágil')}
    else {
        console.log('Produto resistente')
    }   
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil === t

console.log(produtos.filter(caro))
console.log(produtos.filter(fragil))