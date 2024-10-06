function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora > 0 && hora < 12) { //dia
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = '#EAE1A5'
        msg.innerHTML += ` Bom dia!`
    } else if (hora >= 12 && hora < 18) { //tarde
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#EBC7A7'
        msg.innerHTML += ` Boa tarde!`
    } else { //noite
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = '#5062B8'
        msg.innerHTML += ` Boa noite!`
    }
}


