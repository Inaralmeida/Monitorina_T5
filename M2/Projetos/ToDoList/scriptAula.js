var btnAdd = document.querySelector('#btnAdd')
var lista = document.querySelector('#lista')

btnAdd.addEventListener('click', ()=>{
    console.log('to funcionando')
    var texto = document.querySelector('#input').value
    console.log(texto)
    criarTarefa(texto)
}) 

function criarTarefa(texto){
    var li =document.createElement('li')
    lista.appendChild(li)
    li.classList.add('itemLista')
    li.textContent = texto
}