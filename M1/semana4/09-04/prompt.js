var nome, pedido, pedidos, continuar;

function conhecerCliente(nome){
    nome = prompt('digite seu nome')
}

function anotarPedido(){
    alert(`Ola ${nome}, Boa noite`)
    pedido = prompt("o que gotaria de pedir: \n 1 - Suco\n2 - Agua\n3 - cerveja\n4 - Refrigerante")
}

function apresentarPreço(){
    if(pedido === 1){
        alert(`Suco: 2,50`)
        pedidos.push('2,50')
        continuar = prompt(`Gostaria de pedir algo mais: \n 1-Sim\n2-Não`)
        if(continuar === 1){
            
        }
    }else if(pedido === 2){
        alert(`Agua: 2,50`)
        pedidos.push('2,50')
        continuar = prompt(`Gostaria de pedir algo mais`)
    }else if(pedido === 3){
        alert(`cerveja: 5,50`)
        pedidos.push('5,50')
        continuar = prompt(`Gostaria de pedir algo mais`)
    }else if(pedido === 2){
        alert(`Refrigerante: 4,50`)
        pedidos.push('4,50')
        continuar = prompt(`Gostaria de pedir algo mais`)
    }
}

function 