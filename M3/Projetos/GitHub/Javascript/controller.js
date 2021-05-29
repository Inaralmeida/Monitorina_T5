class Controller{

    BuscaUsuario(nomeDoUsuario){
        const model = new Model
        model.BuscarUsuario(nomeDoUsuario)

        const view = new View
        view.MostraUsuarioNaTela(model)
    }

    BuscaRepositorio(nomeDoUsuario){
        const model = new Model
        model.BuscarRepositorios(nomeDoUsuario)

        const view = new View
        view.MostraRepositorio(model)
    }
}