function calcular() {
    let n1 = Number(window.prompt('Digite um número: '))
    let n2 = Number(window.prompt('Digite outro número: '))
    let res = document.querySelector('div#res')

    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${n1+n2}</strong> !`
}