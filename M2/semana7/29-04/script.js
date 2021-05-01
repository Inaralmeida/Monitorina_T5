var enviar = document.querySelector('#btn')
var btnOk = document.querySelector('#btnOk')
var section = document.querySelector('#section')
var tel = document.querySelector('#tel')
var whatsTrue = document.querySelector('#whatsTrue')
var whatsFalse = document.querySelector('#whatsFalse')

enviar.addEventListener('click', function(e){
    e.preventDefault()
    section.classList.remove('invisivel')

    

})
whatsTrue.addEventListener('change', (e)=>{
    e.preventDefault()
   
    tel.classList.remove('invisivel')
    
})

whatsFalse.addEventListener('change', (e)=>{
    e.preventDefault()
   
    tel.classList.add('invisivel')
    
})


function deixaInvisivel(elemento){
    elemento.classList.add('invisivel')
}

function mostraNaTela(elemento){
    elemento.classList.remove('invisivel')
}

btnOk.addEventListener('click', function(e){
    e.preventDefault()

    section.classList.add('invisivel')
})