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

