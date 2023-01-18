const formulario = document.querySelector('.contato__contato')
const email = document.querySelector('.contato__contato--email')
const botao = document.getElementById('contato-botao')
const erro = document.querySelector('.contato__contato--erro')
const icone = document.querySelector('.contato__contato--icone')

botao.addEventListener('click', function() {
    if (!formulario.reportValidity()) {
        icone.classList.add('active')
        erro.classList.add('active')
    } else {
        icone.classList.remove('active')
        erro.classList.remove('active')
    }
})