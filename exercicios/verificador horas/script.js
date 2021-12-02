function load() {
    var mensagem = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    mensagem.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#4CABEE'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#F56D15'
    } else {
        //Boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#03181D'

    }
}

