class UserView{

    
    MostraNaTela(model){

        setTimeout(()=>{
            
            $("#foto").attr('src', model.getFoto() )
            console.log(model.getFoto())
            $("#nome").text( model.getNome() )
            $("#sobrenome").text( model.getSobrenome() )
            $("#idade").text( model.getIdade() )
            $("#cidade").text( model.getCidade() )
            $("#pais").text( model.getPais() )

        }, 1000)
       
    }
}