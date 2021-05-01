var enviar = document.querySelector('#btn')
var btnOk = document.querySelector('#btnOk')
var section = document.querySelector('#section')
var whatsTrue =document.querySelector('#whatsTrue')
var whatsFalse = document.querySelector('#whatsFalse')
var tel = document.querySelector('#tel')

enviar.addEventListener('click', function(e){
   
    e.preventDefault()
    section.classList.remove('invisivel')
    var nome =document.querySelector('#nome').value
    var email =document.querySelector('#email').value

    var nomeR = document.querySelector('#nomeR')
    var emailR = document.querySelector('#emailR')

    nomeR.textContent = nome
    emailR.textContent = email


})

btnOk.addEventListener('click', function(e){
    e.preventDefault()
    section.classList.add('invisivel')
})

whatsTrue.addEventListener('change', function(e){
    e.preventDefault()
    tel.classList.remove('invisivel')

})

whatsFalse.addEventListener('change', function(e){
    e.preventDefault()
    tel.classList.add('invisivel')

})