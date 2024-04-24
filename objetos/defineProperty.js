function Produto(nome, preco, estoque){ 
    this.nome = nome,
    this.preco = preco,
    this.estoque = estoque,

   Object.defineProperty(Produto, 'estoque', {
    enumerable: false,   // Mostra as chaves //
    writable: false,    // Não pode alterar //
    configurable: false // Não pode configurar //
})}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
p1.estoque = 40