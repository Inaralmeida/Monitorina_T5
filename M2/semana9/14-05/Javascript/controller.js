class UserController{

    PegaPessoa(){
        const model = new UserModel
        model.FazerRequisicao()

        const view = new UserView
        view.MostraNaTela(model)
    }
}