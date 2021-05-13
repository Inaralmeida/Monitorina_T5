

// function chamarAPI(){
//     const arrPokes = ['87', '56', '82','98','34']
//     for(let i = 0; i < arrPokes; i++){
//         requisicao(arrPokes[i])
//     }
// }

// function requisicao(id){
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`
//     $.ajax({
//         'url': url,
//         'success': function(response){

//         }
//     })
// }


class Garrafa {
    constructor(cor, capacidade, material){
        this._cor = cor,
        this._capacidade = capacidade,
        this._material = material
    }

    get cor(){
        return this._cor
    }

}


const garrafaFlow = new Garrafa('laranja', '1L', 'metal')
const garrafaAgua = new Garrafa('transparente', '500ML', 'plastico')

garrafaFlow.cor = 'azul'

console.log(garrafaFlow.cor)
console.log(garrafaAgua)