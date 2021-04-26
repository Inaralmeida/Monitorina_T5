var btnAdd = document.querySelector('#btnAdd')
var lista = document.querySelector('#lista')


btnAdd.addEventListener('click', ()=>{
    var input = document.querySelector('#input')
    var texto = input.value
    criarTarefa(texto)

    input.value = ''
})

function criarTarefa(texto){
    
    var li = document.createElement('li')
    lista.appendChild(li)
    li.classList.add('itemLista')
    li.innerText = texto

    var div = criarDiv(li)

    btnFeito(div)

    btnExclui(div)

   
}

function criarDiv(li){
    var div = document.createElement('div')
    li.appendChild(div)
    return div
}

function btnFeito(div){
    var btn = document.createElement('button')
    div.appendChild(btn)
    btn.classList.add('btnFeito')

    btn.addEventListener('click', riscaTarefa)
    
}

function btnExclui(div){
    var btn = document.createElement('button')
    div.appendChild(btn)
    btn.classList.add('btnExcluir')
    btn.addEventListener('click', excluiTarefa)
}

function riscaTarefa(event){
    var btnFeito = event.target
    
    var div = btnFeito.parentElement
    var texto = div.parentElement

    texto.classList.toggle('feito')
}

function excluiTarefa(event){
    var btnFeito = event.target
    
    var div = btnFeito.parentElement
    var li = div.parentElement

    li.remove()
}