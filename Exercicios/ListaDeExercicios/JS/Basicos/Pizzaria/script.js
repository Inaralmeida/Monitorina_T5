const button = document.querySelector('#button')

button.addEventListener('click', ()=>{
    conhecerUsuario()
})

function conhecerUsuario(){

    var nome = prompt("Olá, me diga seu nome")
    var quantidadeDeFilhos = prompt(`${nome} quantos filhos você pretende ter?`)
    var cidade = prompt (`Qual é a cidade dos seus sonhos ${nome}`)
    var profissao = prompt(`Qual é o seu sonho de profissão?`)

    alert(`A vidente prevê: Em 5 anos ${nome} terá ${quantidadeDeFilhos} filho(s), viverá em ${cidade} trabalhando como ${profissao}.`)
}