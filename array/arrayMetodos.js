const pilotos = ["Vettel", "Alonso", "Raikonnen", "Massa"]
pilotos.pop() // Remove o último elemento do Array //
console.log(pilotos)

pilotos.push("Verstappen")
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do Array //
console.log(pilotos)

pilotos.unshift("Hamilton") // Adiciona ao primeiro elemento do Array //
console.log(pilotos)

// .splice pode adicionar e remover elementos.

// Adicionar: 
pilotos.splice(2, 0, "Bottas", "Massa")
console.log(pilotos)

// Remover: 
pilotos.splice(3, 1) // Massa saiu!
console.log(pilotos)