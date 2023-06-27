function comparar() {
    let n1 = parseInt(document.querySelector("input#num1").value);
    let n2 = parseInt(document.querySelector("input#num2").value);
    let n3 = parseInt(document.querySelector("input#num3").value);
    let res = document.getElementById("res");
    if (n1 == n2 || n1 == n3) {
        res.innerHTML = `<p>Os números são iguais !</p>`
    } else if (n1 > n2 && n1 > n3) {
        res.innerHTML = `<p>O número ${n1} é o maior !</p>`
    } else if (n2 > n1 && n2 > n3) {
        res.innerHTML = `<p>O número ${n2} é o maior !</p>`
    } else if (n3 > n1 && n3 > n2) {
        res.innerHTML = `<p>O número ${n3} é o maior !</p>`
    }
}

/*
Minha maior dificuldade com este código foi pensar a lógica de comparação, e o uso do sinal &&(e/and) para funcionamento do código.
Percebi que existe outra forma de fazer o mesmo programa:
function maior(){
     var num1 = parseFloat(document.getElementById("numero1").value);
     var num2 = parseFloat(document.getElementById("numero2").value);
     var num3 = parseFloat(document.getElementById("numero3").value);

     var maior = num1;

     if(num2 > maior)
      maior = num2;
     if(num3 > maior)
      maior = num3;

     alert("Maior: "+maior);
    }

Minha lógica: 
var n1 = 10
var n2 = 5
var n3 = 15
if (n1 > n2 && n1 > n3){
    console.log(`${n1}`)
} else if (n2 > n1 && n2 > n3){
    console.log(`${n2}`)
} else if (n3 > n1 && n3 > n2){
    console.log(`${n3}`)
}*/