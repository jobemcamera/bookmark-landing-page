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
