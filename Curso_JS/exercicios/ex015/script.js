function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Crinaça
                img.setAttribute('src', 'menino_criança_p1.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'homem_jovem_p.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem_maduro_p.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso_p.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Crinaça
                img.setAttribute('src', 'menina_criança_p.png')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', 'mulher_jovem_p.png')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', 'mulher_madura_p.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa_p.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é um(a) ${genero}, e têm ${idade} anos.`
        res.appendChild(img)
        //res.innerHTML = `Idade calculada: ${idade}`
    }
}