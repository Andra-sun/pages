document.getElementById("navBtn").addEventListener("click", function () {
    var lista = document.getElementById("navLi");
    if (lista.style.display === "none" || lista.style.display === "") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }
});

document.getElementById("navVoltar").addEventListener("click", function () {
    var nav = document.getElementById("navLi");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
});

document.getElementById("buscarBtn").addEventListener("click", function () {
    var pesquisar = document.getElementById("navLi");
    if (pesquisar.style.display === "block") {
        pesquisar.style.display = "none";
    } else {
        pesquisar.style.display = "block";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const caixaDePesquisa = document.getElementById('caixaDePesquisa');
    const artigos = document.querySelectorAll('.article');
    const sairBtn = document.getElementById('sair');

    caixaDePesquisa.addEventListener('input', function() {
        const termo = this.value.toLowerCase();

        artigos.forEach(function(artigo) {
            const textoArtigo = artigo.textContent.toLowerCase();
            const articleID = artigo.id;

            if (textoArtigo.includes(termo)) {
                document.getElementById(articleID).style.display = 'flex';
            } else {
                document.getElementById(articleID).style.display = 'none';
            }
        });

        if (termo !== '') {
            sairBtn.style.display = 'block'; 
        } else {
            sairBtn.style.display = 'none'; 
        }
    });

    sairBtn.addEventListener('click', function() {
        caixaDePesquisa.value = ''; 

        artigos.forEach(function(artigo) {
            artigo.style.display = 'flex'; 
        });

        sairBtn.style.display = 'none'; 
    });
});

