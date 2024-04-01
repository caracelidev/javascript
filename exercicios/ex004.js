let agora = new Date()
agora = agora.getHours()
console.log(`Agora são exatamente ${agora} horas,`)
if(agora >=5 && agora <=12){
    console.log("Bom dia!")
}
else if(agora >=13 && agora <=17){
    console.log("Boa tarde!")
}
else if(agora >=18 && agora <= 23){
    console.log("Boa noite!")
}
else{
    console.log("Boa madrugada!")
}