function getDiaSemana(diaSemana){
const data = new Date()
const diaSemana = data.getDay()

switch(diaSemana){
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        console.log("Sábado")
        break                            
}}