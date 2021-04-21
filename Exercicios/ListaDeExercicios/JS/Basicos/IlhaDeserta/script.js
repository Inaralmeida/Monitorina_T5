const button = document.querySelector('#button')

button.addEventListener('click', ()=>{
    conhecerUsuario()
})

function conhecerUsuario(){

    var nome = prompt("Olá, me diga seu nome")
    var item1 = prompt(`${nome}, me diga um item que é indeispensavél pra você em uma ilha deserta?`)
    var item2 = prompt (`${item1}? muito bom! agora me diz mais um item indispensavél`)
    var item3 = prompt(`Perfeito! agora pra finalizar, qual o ultimo item que não pode faltar de jeito nenhum? (além de ${item1} e ${item2} é claro)`)

    alert(`Vou expor mesmo! ${nome} levaria para uma ilha deserta ${item1}, ${item2} e ${item3}.`)
}