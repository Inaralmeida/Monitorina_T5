class Model{

    constructor(){
        this._nome,
        this._username,
        this._foto,
        this._ListaDeRepositorios
    }

    BuscarUsuario(nomeDoUsuario){

        $.ajax({
            url: `https://api.github.com/users/${nomeDoUsuario}` ,
            success: (resposta)=>{
                console.log(resposta)
                this._AtualizaDadosUsuario(resposta)
            }
        })
    }

    BuscarRepositorios(nomeDoUsuario){
        $.ajax({
            url: `https://api.github.com/users/${nomeDoUsuario}/repos` ,
            success: (resposta)=>{
                console.log(resposta)
                this._AtualizaRepositorio(resposta)
            }
        })

    }

    _AtualizaDadosUsuario(resposta){
        this._nome = resposta.name
        this._username = resposta.login
        this._foto = resposta.avatar_url
    }
    _AtualizaRepositorio(resposta){
        this._ListaDeRepositorios = resposta
    }


    getNome(){
        return this._nome
    }
    getUsername(){
        return this._username
    }
    getFoto(){
        return this._foto
    }
    getListaDeRepositorios(){
        return this._ListaDeRepositorios
    }
}