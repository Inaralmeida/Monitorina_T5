console.log("oi")


function dirigirOuBeber(idade){
    if(idade >= 18){
        return "Já pode dirigir e beber"
    }else{
       return "Não pode nem dirigir nem beber"
    }
}

console.log(dirigirOuBeber(25))
console.log(dirigirOuBeber(5))
console.log(dirigirOuBeber(54))

function previsaoRodagem(litros, km){
    var consumo = litros * km
   return consumo
    
}

console.log(previsaoRodagem(10, 16))

//calcular a media das 4 notas
//Quadro de notas
// 10: Campeão, vencedor
// 8 - 9: Te dou parabens
// 7: Dias de luta dias de glória
// 5 - 6 : foi de raspão mais valeu
// < 5 : Tente outra vez

function notas(nota1, nota2, nota3, nota4){
    var media = Math.floor((nota1 + nota2 +nota3 + nota4) / 4)
    console.log(media)
    if(media === 10){
        return 'Campeão, vencedor'
    }else if( media >= 8 && media <= 9){
        return 'Te dou parabens'
    }else if(media === 7){
        return 'Dias de luta dias de glória'
    }else if(media >= 5 && media <= 6){
        return 'Foi de raspão mas valeu'
    }else if( media >= 0 && media <= 4){
        return 'Tente outra vez'

    }else{
        return 'Notas invalidas'
    }

}

console.log(notas( 10, 10, 10, 10))