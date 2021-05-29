const controller = new Controller

$('#btn-submit').click((e)=>{
    e.preventDefault()
    
    const nomeDoUsuario = $('#username').val()
    console.log(nomeDoUsuario)

    controller.BuscaUsuario(nomeDoUsuario)
    controller.BuscaRepositorio(nomeDoUsuario)
})