var containerDom = document.querySelector('#containerDom')
var titulo = document.querySelector('#titulo')
var btnAlterar = document.querySelector('#btnAlterar')
var clear = document.querySelector('#clear')
var contador = 0

function addConteudo(){
    var p = document.createElement('p')
    containerDom.appendChild(p)
    p.textContent = `conteudo adicionado ${contador}`
}

btnAlterar.addEventListener('click', ()=>{
    contador ++
    console.log('O btn funciona')
   titulo.textContent = 'Conteudo alterado'
    console.log('conteudo alterado')
    // containerDom.style.backgroundColor = 'red'
    containerDom.style = `
    background-color: tomato;
    `

    addConteudo()
    
})


clear.addEventListener('click', ()=>{
    
    containerDom.innerHTML = ''
    
})


