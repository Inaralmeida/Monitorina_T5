var pessoa = "Gabs";
var comida = "feijoada";


if(comida !== 'brocolis'){
    console.log('Eu gosto')
}else{
    console.log('não gosto')
}



// se a pessoa for == inara ela vai gostar de Feijoada
// se a pessoa for o gabs, ele vai gostar de macarronada

if(pessoa === 'inara'){
    console.log('ela gosta de Feijoada')
}else if(pessoa === 'Gabs'){
    console.log('Ele gosta de macarronada')
}else if(pessoa === 'Tais'){
    console.log('Ela gosta de Pizza')
}else if(pessoa === 'ana'){
    console.log('ela gosta de brocolis')
}else{
    console.log('Eu não conheço essa pessoa')
}


//tabela
// gabs + feijoada =  bom
//gabs + outra coisa == ruim
//outra pessoa + feijoada == ruim 

console.log('Pessoa: ', pessoa )
console.log('Comida: ', comida)

if(pessoa === 'Gabs' && comida=== 'feijoada'){
    console.log('Deu Match')
}else{
    console.log('Deu ruim ')
}



var idade = 5;


console.log(idade)
if (idade >= 18) {
  console.log("É maior de idade");
} else {
  console.log("é menor de idade");
}


var turma =  'T5'


if(turma === 'Fundadora'){
    console.log('Foi a primeira turma do resilia')
}else if (turma ===  'T2'){
    console.log('Foi a turma do Streva')

}else if(turma === 'T3'){
    console.log('É a turma da inara')

}else if(turma === 'T5'){
    console.log('É a turma que ama Flexbox')

}else {
    console.log('Eu não conhecço essa turma')

}



//Se o bonus for de +> 1400 e eu sair mais cedo. Eu compro uma TV

//Se o bonus for menor q 1400 e maior que 600. eu compro um celular

//

//Se o bonus for < 600 OU eu sair mais cedo do trabalho, eu compro o ovo de pasco


var bonus = 1405
var saiCedo = 'nao'

if(bonus >= 1400 && saiCedo === 'sim'){
    console.log('Vou comprar uma TV')
} else if(bonus< 1400 && bonus >= 600){
    console.log('Vou comprar um celular')
} else if( bonus < 600 || saiCedo ==='sim'){
    console.log('Vou comprar o ovo de pascoa')
} else{
    console.log('vou pra casa chorar')
}