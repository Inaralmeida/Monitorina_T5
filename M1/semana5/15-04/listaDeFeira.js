// Permita que o usuario escreva varios itens individualmente no propmt, sempre perguntado se ele quer adicionar mais um, quando a resposta for "NÂO", apresente no html a lista de itens escrita pelos usuarios


function listaDeFeira(){
    //Criar um array vazio
    var lista = []
    var resposta = "S"

    // enquanto a resposta for Sim, vou continuar, aparecer o prompt novamente
    while(resposta === 'S'){
        
        //Criar um prompt para pegar as respostas
        lista.push(prompt("O que você deseja adicionar a lista?"))
        resposta = prompt("Deseja adiconar mais itens?\nS - sim\nN - Não").toUpperCase()
        console.log(lista)

    }
    // apresente no html a lista de itens escrita pelos usuarios

    //verificar se a lista possui algum item 
    if(lista.length >= 1){
        document.write(`<h1>Lista de feira</h1>`)
        //mostrar os itens individualmente dentro de uma li
        for(var i = 0; i < lista.length; i++){
            document.write(`
            <li>${lista[i]}</li>
            `)
        }
    }


}

listaDeFeira()

