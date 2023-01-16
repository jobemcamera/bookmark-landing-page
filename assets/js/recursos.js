const opcao = document.querySelectorAll('.recursos__opcao')
const imagem = document.getElementsByClassName('recursos__imagem')
const titulo = document.getElementById('recursos-titulo')
const texto = document.getElementById('recursos-texto')

opcao[0].onclick = function() {
    imagem.src = '/assets/images/illustration-features-tab-1.svg';
    titulo.innerText = 'Bookmark in one click';
    texto.innerText = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.';
    console.log('ok1')
}

opcao[1].onclick = function() {
    imagem.src = '/assets/images/illustration-features-tab-2.svg';
    titulo.innerText = 'Intelligent search';
    texto.innerText = 'Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks.';
    console.log('ok2')
}

opcao[2].onclick = function() {
    imagem.src = '/assets/images/illustration-features-tab-3.svg';
    titulo.innerText = 'Share your bookmarks';
    texto.innerText = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.';
    console.log('ok3')
}