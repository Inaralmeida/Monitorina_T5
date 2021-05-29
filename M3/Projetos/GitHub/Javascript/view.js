class View{

   
    MostraUsuarioNaTela(model){

        setTimeout(() => {
            $('#img-perfil').attr('src', model.getFoto())
            $('#name').text(model.getNome())
            $('#usernameTela').text(model.getUsername())
        }, 1000);
       
    }

    MostraRepositorio(model){
        $(".lista-repositorios").html(``)

        setTimeout(() => {
            for(let repo of model.getListaDeRepositorios()){

                const div = $('<div/>')
                div.addClass('item-repositorio')
                $('#lista-repositorios').append(div)

                const a = $('<a href="" target="_blank"/>')
                a.attr('href', repo.html_url)
                $('.item-repositorio').append(a)
                a.addClass("nome-repositorio");
                a.text(repo.name)


    
            }
        }, 1000);
        
    }
}