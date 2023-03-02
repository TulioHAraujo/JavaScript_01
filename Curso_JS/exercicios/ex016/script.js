function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){ //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{27A1}`//unicode  emojilist
            }
        } else { //contagem decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{27A1}`
            }
        }
        res.innerHTML += `\u{2705}`
    }
}


/*var min = 2
var max = 5
function getRandomArbitrary (min, max) {
    return Math.random() * (max - min) + min;
}
console.log ()*/