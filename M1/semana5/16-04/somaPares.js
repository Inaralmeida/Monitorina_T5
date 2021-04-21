
function somaPares(){
    var maximo = prompt('Até qual numero deseja soma os numeros pares?')
    var resultado = 0
    for(var i = 0; i <= maximo; i++){
        if(i  % 2 === 0){
            resultado += i
        }
    }
    document.write(`R: A soma de todos os numero pares de 0 até ${maximo} é de ${resultado}`)
}

function dezValores(){
    var total = 0
    for(var i = 0; i < 10; i++){
        total += parseInt(prompt('Digite um numero'))
    }
    document.write(`A soma de todos os números é de ${total}`)
}


function dezValoresDetalhados(){
    var numeros = []
    let total = 0
    for (var i = 0 ; i < 10; i++){
        numeros.push(parseInt(prompt('Digite um numero')))
        
    }
    document.write('A soma dos seguintes numeros:')
    for(let i = 0; i < numeros.length; i++){
        total += numeros[i]
        document.write(`<li>${numeros[i]}</li>`)
    }
    document.write(`é de ${total}`)
}

// function claculaSalario(){
//     var nProfessores= prompt("Deseja cadastrar quantos professores")
//     var salarioBruto()
// }

somaPares()

// dezValores()

// dezValoresDetalhados()