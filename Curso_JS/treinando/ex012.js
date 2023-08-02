let click = 0
let res = document.querySelector('section#result')

function contar() {
    click ++ // É a mesma coisa que click = click + 1
    res.innerHTML = `<p>O contador está com <mark>${click}</mark> cliques.`
}

function zerar() {
    click = 0
    res.innerHTML = null
}