//crie um function que receba um numero
//em seguida crie um array que vai receber outros arrays dentro
//o numero de array que sera incluso sera o numero que foi passado para a função
//dentro de cada array inlcluso adicione 10 numeros aleatorios entre 0 - 9
//depois retorne o array maior, com os arrays inclusos, e os numeros do array incluso em ordem crescente
//Agora atualize sua função para que não exista numeros repetidos detro dos arrays

function recebe(numero){
    //criação do array pai vazio para receber os array's filhos
    var arrayPai = []

    //Criar um loop para criar outros array's dentro do array Pai
    for (var i =0; i < numero; i++){
        var arrayFilho = []

        //J menor que 10, para que adicione 10 numeros no array filho
        for(var j = 0; j < 10; j++){
            //Gera um numero aleatório e insere no array filho
            arrayFilho.push(Math.round(Math.random()* (9 - 0) + 0))

        }
        //Array pai está puxando o array filho, que devolvera um array com numeros ordenados.
        arrayPai.push(arrayFilho.sort())

    } 

    
    return arrayPai

}

console.log(recebe(5))




















































// function criaArrays(numero){
//     var arrayExterno = []
    
//     for(var i = 0; i < numero; i++){
//         var arrayInterno = []
//         var contador = 10
       
//             for(var j = 0; j < contador; j++){
//             var num = Math.ceil(Math.random() * (9 - 0) + 0)
//             console.log(contador)
//             if(arrayInterno.indexOf(num) === -1){
//                 arrayInterno.push(num)
//                 contador--
                
//             }else{
//                 contador++
//             }
            
//         }
//         arrayExterno.push(arrayInterno.sort())
//     }
//     return arrayExterno
// }
 
//  console.log(criaArrays(5))


