var btn = document.querySelector('#buscar')

btn.addEventListener('click', buscaUsuario)

function buscaUsuario(){
    var req = new XMLHttpRequest()

    req.open('GET', 'https://randomuser.me/api')
    req.onload = function(){

        if(req.status == 200){
            var respostaObjeto = JSON.parse(req.response)

            console.log(respostaObjeto)
        }else{
            console.log('erro na requisição')
        }

    }
    req.send()
}