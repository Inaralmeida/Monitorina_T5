var btn = document.getElementById('enviar')
var nomeInvalido = document.querySelector('#nomeInvalido')

btn.addEventListener('click',(event)=>{
    event.preventDefault()
    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    var confirmacaoSenha = document.getElementById('confirmacaoSenha').value
    validaNome(nome)
    console.log(nome, email, senha , confirmacaoSenha)
})

function validaNome(nome){
    var arrNomes = nome.split(' ')
    
    if(arrNomes.length < 2 ){
        nomeInvalido.classList.remove('invisivel')
    }
    else{
        nomeInvalido.classList.add('invisivel')
    }
    console.log(arrNomes)
} 