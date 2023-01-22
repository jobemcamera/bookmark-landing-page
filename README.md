# Frontend Mentor - Bookmark landing page

## Bem vindo! 👋

Este é um desafio Frontend Mentor!

## O desafio

Meu desafio foi criar esta landing page da Bookmark tentando se aproximar o máximo possível da versão sugerida. Neste projeto utilizei a metodologia Mobile First, onde começo a desenvolver toda a marcação por telas de menor à maior dimensão. Além disso, utilizei o pré processador SASS/SCSS para a estilização do HTML.

Você pode conferir o desafio na própria página do Frontend Mentor:
[Bookmark landing page](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158)

---
## Mobile

![image](https://user-images.githubusercontent.com/109925623/213922730-152ee297-992d-4841-8f88-93601f787c03.png)

## Desktop

![image](https://user-images.githubusercontent.com/109925623/213922734-7424cfaa-4108-49c5-aa0f-f462da025cff.png)

---
### O que eu aprendi


Neste projeto utilizei pela primeira vez o Acordeão, que são abas clicáveis que abrem para mostrar o conteúdo oculto. 

![image](https://user-images.githubusercontent.com/109925623/213922454-d0de7c85-9afe-4bcb-a4b0-4c2820291981.png)


Todo a ação de click e adição e remoção de evento .active CSS foi manipulada via JavaScript.


``` javascript

const acordeao = document.querySelectorAll('.duvidas__acordeao--titulo')


acordeao.forEach((element) => {
    element.onclick = function () {
        element.classList.toggle('active')
        var panel = this.nextElementSibling
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null 
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"
        }
    }
})

```

---
Outro aprendizado neste projeto, foi a utilização de positions relativo e absoluto para mostrar ao usuário quando o formulário não foi preenchido corretamente.

![image](https://user-images.githubusercontent.com/109925623/213922611-3f6646f5-38ed-4cfb-a107-7465a7ff6a16.png)

Código CSS:

``` css
    .contato__email {
                display: flex;
                flex-direction: column;
                @media screen and (min-width: 1024px) {
                    position: relative;
                }
                .contato__contato--email {
                    padding: 1em;
                    border-radius: 5px;
                    border: none;
                    position: relative;
                    &::placeholder {
                        color: $cor-secundaria;
                    }
                }
                .contato__contato--icone {
                    @include imagem('/assets/images/icon-error.svg', 20px, 20px);
                    position: absolute;
                    right: 12%;
                    padding: 0.5em 0; 
                    display: none;
                    &.active {
                        display: block;
                    }
                    
                    @media screen and (min-width: 1024px) {
                        right: 5%;
                        position: absolute;
                        bottom: 38%;
                    }
                }
                .contato__contato--erro {
                    text-align: left;
                    font-size: $tamanho-texto * 0.6;
                    padding: 0.5em 1em;
                    font-style: italic;
                    background-color: $cor-botao;
                    border-radius: 0 0 5px 5px;
                    color: $cor-terciaria;
                    display: none;
                    &.active {
                        display: block;
                    }
                }
            }
            .
            .
            .
```

