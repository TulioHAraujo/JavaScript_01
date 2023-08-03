function calcular() {
    let aluno = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Qual a primeira nota de ${aluno}?`))
    let n2 = Number(window.prompt(`Qual a segunda nota ${aluno}?`))
    let media = (n1+n2)/2
    //Acima temos as variáveis usando o prompt como input do usuário para informar dados.

    let res = document.getElementById('res')//não havia essa variável quando eu fiz o código.
    res.innerHTML = `<p>Calculando a média final de <strong>${aluno}</strong>:</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1}</mark> e <mark>${n2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>`
    //Acima o identificador res (id"res") é utilizado para mostrar a saída (output) dos dados e o resultado informado.

    if (media >= 6) {
        res.innerHTML += `<p>A mensagem que temos é: <strong>Meus Parabéns!</strong></p>`
    } else {
        res.innerHTML += `<p>A mensagem que temos é: <strong>Você precisa estudar um pouco mais.</strong></p>`
    }
    //Nesta última parte surge uma condição para mostrar mais uma informação ao usuário com relação a sua média.
}

//Outra forma de fazer da "segunda" parte em diante é:

/*
let msg // crie uma variável e deixa ela vazia
if (med >= 6) { // Se por acaso a média foi 6.0 ou mais...
    msg = 'Meus parabéns!'
} else { // senão...
    msg = 'Estude um pouco mais!'
}
// O if é uma estrutura que cria uma CONDIÇÃO, que executa um bloco de comandos ou outro, dependendo do resultado de um teste lógico.

let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>` 
    res.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>` // Note que eu usei até um pouco de CSS pra fazer a mensagem ficar vermelha ;)
*/