function media() {
    let nota1 = Number(document.querySelector("input#n1").value);
    let nota2 = Number(document.querySelector("input#n2").value);
    let media = (nota1 + nota2) / 2;
    let res = document.querySelector("div#res");
    if (media == 10) {
        res.innerHTML = `<p>Parabéns, você foi APROVADO COM DISTINÇÃO ! Sua nota é ${media}.</p>`
    } else if (media >= 7) {
        res.innerHTML = `<p>Parabéns ! Você foi APROVADO. Sua nota é ${media}.</p>`
    } else {
        res.innerHTML = `<p>Infelizmente você não atingiu a pontuação exigida, está REPROVADO. Sua nota é ${media}.</p>`
    }
}

/*
Esse código tem objetivo de calcular a média.
Tentetei usar o mínimo de consulta ou ajuda possível para criar o código.
Maior dificuldade foi integrar no HTML e relembrar como se usava else if.

let nota1 = 10
let nota2 = 2
let media = (nota1 + nota2) / 2
if (media == 10) {
        console.log(`Parabéns, você foi APROVADO COM DISTINÇÃO ! Sua nota é ${media}.`)
    } else if (media >= 7) {
        console.log(`Parabéns ! Você foi APROVADO. Sua nota é ${media}.`)
    } else {
        console.log(`Infelizmente você não atingiu a pontuação exigida, está REPROVADO. Sua nota é ${media}.`)
}*/