
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