var btn = document.querySelector('#enviar')
var campoNome = document.querySelector('.nome')
var campoEmail = document.querySelector('.email')
var campoSenha = document.querySelector('.senhaInfo')
var nomeInvalido = document.querySelector('#nomeInvalido')
var emailInvalido = document.querySelector('#emailInvalido')

btn.addEventListener('click', (evento)=>{
    var nome = document.querySelector('#nome').value
    var email = document.querySelector('#email').value
    var senha = document.querySelector('#senha').value
    var confirmacaoSenha = document.querySelector('#confirmacaoSenha').value

    validaNome(nome)
    validaEmail(email)

    if(nome, email, senha, confirmacaoSenha){
        evento.preventDefault()
    }
})

function validaNome(nome){
    var arrayNome = nome.split(' ')
    if(arrayNome.length < 2){
       nomeInvalido.classList.remove('invisivel')
    }else{
        nomeInvalido.classList.add('invisivel')
    }
}

function validaEmail(email){
    var arrEmail = email.split('')
    var temArroba = arrEmail.indexOf('@')
   
    if( temArroba === -1){
        emailInvalido.classList.remove('invisivel')
    }else{
        emailInvalido.classList.add('invisivel')
    }
}