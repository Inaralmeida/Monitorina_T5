const button = document.querySelector('#button')

button.addEventListener('click', ()=>{
    conhecerUsuario()
})

function conhecerUsuario(){

    var nome = prompt("Olá, me diga seu nome")
    var dataNascimento = prompt(`${nome} em que ano você nasceu?`)
    var cidade = prompt (`${nome}, em que cidade você mora?`)
    var fazer = prompt(`O que você mais gosta de fazer?`)
    var musica = prompt (`${nome}, essa é a ultima pergunta eu juro. Qual a sua musica prefereida?`)

    var idade = 2021 - dataNascimento

    alert(`Obrigado por responder ${nome}, você tem ${idade} anos, mora na cidade de ${cidade}, gosta de ${fazer} e sua musica preferida é ${musica}.
    Foi um prazer te conhecer!`)
}