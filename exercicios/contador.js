function contar(){
    let ini = document.getElementById("txtn1")
    let fim = document.getElementById("txtn2")
    let passo = document.getElementById("txtn3")
    let res = document.getElementById("res")
    if(ini.value.length == 0 ||fim.value.length == 0|| passo.value.length == 0){
        window.alert("Preencha os campos obrigatórios.")
        res.innerHTML = "Impossível contar!"
    }
    else{
        res.innerHTML = "Contando: "
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        for(let c = i; c <= f; c+=p)
        res.innerHTML += `${c}`
    }
    }
