function calcular() {
    let aluno = String(window.prompt('Qual é o nome do aluno ?'))
    let n1 = Number(window.prompt(`Qual foi sua primeira nota, ${aluno} ?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota ?`))
    let res = document.querySelector('div#res')

    res.innerHTML = `<p>Calculando a média final de <strong>${aluno}</strong>:</p>`
    res.innerHTML += `<p>As notas obtidas fora <strong>${n1}</strong> e <strong>${n2}</strong>.</p>`
    res.innerHTML += `<p>A média final será <strong>${(n1+n2)/2}</strong> !</p>`
}

/*
Aqui outra forma de fazer esse código, eu não criei a variável média.
function media() {
    let nom = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nom}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nom}?`))
    med = (n1 + n2)/2
    
    let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`
}
*/