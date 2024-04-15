let num = [6, 3, 1, 8, 2, 9]
console.log(num)
num.sort()

/*console.log(`O array tem ${num.length} posições`)
console.log(`O primeiro valor do array é ${num[0]}`)
console.log(`O segundo valor do array é ${num[1]}`)
console.log(`Vamos botar em ordem crescente: ${num.sort()}`)
console.log(num)*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}