// var button = document.querySelector("#button")

// function parOuImpar(){
//     var numero = prompt('Digite um numero')
//     if(numero % 2 === 0){
//         document.write(` ${numero} é par`)
//     }else{
//         document.write(` ${numero} é impar`)
//     }
// }
// button.addEventListener('click', ()=>{
//     parOuImpar()

// })

var listaDeFrutas = ['pera', 'maça', 'uva', 'banana', 'melancia']

function contador(listaDeFrutas){
    var cont = listaDeFrutas.length - 1
    while (cont >= 0 ){
        document.write(listaDeFrutas[cont], '<br>')
        if(cont === 0 ){
            break
        }
        cont--
       
       
    }
}


contador(listaDeFrutas)