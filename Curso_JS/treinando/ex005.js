function verificar () {
let letra = document.querySelector("input#char").value;
let res = document.querySelector("div#res");
letra = letra.toLowerCase();

if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
    res.innerHTML = `<p>A letra <strong>${letra}</strong> é uma vogal !</p>`
} else {
    res.innerHTML = `<p> A letra <strong>${letra}</strong> é uma consoante !</p>`
}
}

//Este é um código em que eu verifico se a letra digitada no input é uma vogal ou consoante.
//Maior dificuldade nesse código foi integrar no HTML.
//Testando o código:
/*
let letra = ''
if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
    console.log(`A letra ${letra} é uma vogal!`)
} else {
    console.log(`A letra ${letra} é uma consoante!`) 
}
*/