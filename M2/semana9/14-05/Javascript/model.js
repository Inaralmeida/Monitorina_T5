class UserModel{

    constructor(){
        this._nome,
        this._sobrenome,
        this._idade,
        this._cidade,
        this._pais,
        this._foto
    }

    FazerRequisicao(){

        const urlRequisicao = 'https://randomuser.me/api/'
        $.ajax({
            url : urlRequisicao,
            success: (resultado)=>{
                console.log(resultado)
                this._AtualizaDados(resultado)
            }
        })
    }

    _AtualizaDados(resultado){
        this._nome = resultado.results[0].name.first
        this._sobrenome = resultado.results[0].name.last
        this._idade = resultado.results[0].dob.age
        this._cidade= resultado.results[0].location.city
        this._pais=  resultado.results[0].location.country
        this._foto = resultado.results[0].picture.large
    }


    getNome(){
        return this._nome
    }
    getSobrenome(){
        return this._sobrenome
    }
    getIdade(){
        return this._idade
    }
    getCidade(){
        return this._cidade
    }
    getPais(){
        return this._pais
    }
    getFoto(){
        return this._foto
    }
   
}