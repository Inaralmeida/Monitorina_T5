var btnEnviar = document.querySelector('#buscar')
var nome = document.querySelector("#nome")
var idade = document.querySelector("#idade")
var genero = document.querySelector("#genero")

btnEnviar.addEventListener('click', function(){
    console.log('To funcionando')
    buscarUsuarios()
})


function buscarUsuarios(){

    var requisicao = new XMLHttpRequest()

    requisicao.open('GET', 'https://randomuser.me/api')
    requisicao.onload = function(){

        if(requisicao.status === 200){

            var respostaRequisicao = JSON.parse(requisicao.response)
            console.log(respostaRequisicao)
            mostraNaTela(respostaRequisicao)

        }else{
            console.log('Erro na requisição')
        }



    }

    requisicao.send()

}

function mostraNaTela(respostaRequisicao){

    var results = respostaRequisicao.results[0]

    console.log(results)

    genero.textContent = results.gender
    nome.textContent = results.name.first

}