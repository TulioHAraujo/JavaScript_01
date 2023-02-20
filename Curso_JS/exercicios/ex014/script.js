function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = '/Curso_JS/exercicios/ex014/image/manha.png'
        document.body.style.background = '#8a6e52'
        msg.innerHTML += '<p>Bom dia !</p>'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = '/Curso_JS/exercicios/ex014/image/tarde.png'
        document.body.style.background = '#a14e45'
        msg.innerHTML += '<p>Boa tarde !</p>'
    } else {
        //Boa noite
        img.src = '/Curso_JS/exercicios/ex014/image/noite.png'
        document.body.style.background = '#151c26'
        msg.innerHTML += '<p>Boa noite !</p>'
    }
}
