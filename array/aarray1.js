let aprovados = new Array("Jhonson, Bia, Nego Jhonson")
console.log(aprovados)

aprovados = ["Jhonson", "Beatriz", "Nego Jhonson"]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = "Paulo" // Adiciona elementos em um Array //
aprovados.push("Lego Ney") // Adiciona elementos em um Array //
console.log(aprovados)
console.log(aprovados.length)

aprovados[10] = "Dramin"
console.log(aprovados.length)
console.log(aprovados[7] === undefined)

aprovados.sort() // Serve para organizar os Arrays //
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados[1] = "Pirarucu"

aprovados.splice(2, 3, "Anão", "Maicon", "Jhonsinho")
console.log(aprovados)

// .push()
// . sort()
// .splice()