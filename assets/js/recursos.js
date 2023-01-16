const opcao = document.querySelectorAll('.recursos__opcao')
const imagem = document.getElementById('recursos-imagem')
const titulo = document.getElementById('recursos-titulo')
const texto = document.getElementById('recursos-texto')

function propriedadesImagem(altura, largura) {
    imagem.style.height = altura;
    imagem.style.width = largura;
    imagem.style.backgroundPosition = 'center';
    imagem.style.backgroundSize = 'contain';
    imagem.style.backgroundRepeat = 'no-repeat';
}

opcao.forEach((element, index) => {
    element.onclick = function() {
        if (index == 0) {
            imagem.style.background = "url('/assets/images/illustration-features-tab-1.svg')";
            propriedadesImagem('30vh', '80vw')
            titulo.innerText = 'Bookmark in one click';
            texto.innerText = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.';
        } else if (index == 1) {
            imagem.style.background = "url('/assets/images/illustration-features-tab-2.svg')";
            propriedadesImagem('30vh', '80vw')
            titulo.innerText = 'Intelligent search';
            texto.innerText = 'Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks.';
        } else if (index == 2) {
            imagem.style.background = "url('/assets/images/illustration-features-tab-3.svg')";
            propriedadesImagem('30vh', '80vw')
            titulo.innerText = 'Share your bookmarks';
            texto.innerText = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.';
        }
    }
})
