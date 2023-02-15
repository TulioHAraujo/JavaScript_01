function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('picture')
    var data = new Date()
    var hora = 23//data.getHours()
    //var hora = 13 
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>` 
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'image/manha.png'
        document.body.style.background = '#8a6e52'
        msg.innerHTML +='<p>Bom dia !</p>'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'image/tarde.png'
        document.body.style.background = '#a14e45'
        msg.innerHTML += '<p>Boa tarde !</p>'
    } else {
        // boa noite
        img.src = 'image/noite.png'
        document.body.style.background = '#151c26'
        msg.innerHTML += '<p>Boa noite !</p>'
    }
}