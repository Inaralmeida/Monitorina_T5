
function listaDeCarros(){
    var antigos = [] 
    var novos = []
    var tipoDeCarro = ''
    var resposta = "S"
    while(resposta === 'S'){
        tipoDeCarro = prompt("Deseja adicionar um carro\nA - Antigo\nB - Novo")
        console.log(tipoDeCarro)
        if(tipoDeCarro === 'A'){
            antigos.push(prompt('Qual o modelo do carro?'))
            resposta=prompt(('Deseja adicionar um novo carro?')).toUpperCase()
        }else if(tipoDeCarro === 'B'){
            novos.push(prompt('Qual o modelo do carro?'))
            resposta=prompt(('Deseja adicionar um novo carro?')).toUpperCase()
        }else{
            alert("Modelo invalido tente novamente")
            listaDeCarros()
        }
    }

    if(antigos.length >= 1){
        document.write(`<h2> Carros Antigos</h2>`)

        for(let i = 0; i < antigos.length; i++){
            document.write(`
                <li>${antigos[i]}</li>
            `)
        }
    }

    if(novos.length >= 1){
        document.write(`<h2> Carros Novos </h2>`)
        for(let i = 0; i < novos.length; i++){
            document.write(`
            <li>${novos[i]}</li>
        `)
        }
    }
}

listaDeCarros()