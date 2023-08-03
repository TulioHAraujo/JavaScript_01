function verificar() {
    let num = Number(window.prompt('Digite um número:'))
    let res = document.getElementById('result')
    
    if (num % 2 == 0) /*errei a lógica, teria que ter usado o resto da divisão inteira. Eu fiz (num / 2)*/{
        res.innerHTML = `O número ${num} que foi digitado é <strong>PAR</strong>.`
    } else {
        res.innerHTML = `O número ${num} que foi digitado é <strong>ÍMPAR</strong>.`
    }

}

/*
O código do professor é diferente, porém chega no mesmo resultado:

function teste() {
    let num = Number(window.prompt('Digite um número: '))
    let tipo
    if (num % 2 == 0) {
        tipo = '<strong>PAR</strong>'
    } else {
        tipo = '<strong>ÍMPAR</strong>'
    }

    let res = document.querySelector('section#result')
    res.innerHTML = `<p>O número ${num} que foi digitado é ${tipo}!</p>`
}
*/