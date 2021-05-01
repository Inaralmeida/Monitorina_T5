var btn = document.querySelector('#enviar')

btn.addEventListener('click', function(e){
   
    e.preventDefault()
    var nome = document.querySelector('#nome').value
    var cpf = document.querySelector('#cpf').value
    var logradrouro = document.querySelector('#logradrouro').value
    var numero = document.querySelector('#numero').value
    var cidade = document.querySelector('#cidade').value
    var nascimento = document.querySelector('#data').value
    var tipoLogradrouro = document.querySelector('#tipoLogradrouro').value

    console.log(tipoLogradrouro)
   
    var nomeR = document.querySelector('#nomeR')
    var cpfR = document.querySelector('#cpfR')
    var logradouroR = document.querySelector('#logradouroR')
    var numeroR = document.querySelector('#numeroR')
    var cidadeR = document.querySelector('#cidadeR')
    var nascimentoR = document.querySelector('#dataR')

    nomeR.value = nome
    cpfR.value =   cpf
    numeroR.value = numero
    logradouroR.value = logradrouro
    cidadeR.value = cidade
    nascimentoR.value = nascimento
  
})

