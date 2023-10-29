document.addEventListener("DOMContentLoaded", function () {
    const caixaDePesquisa = document.getElementById("caixaDePesquisa");
    const artigos = document.querySelectorAll(".article");

    caixaDePesquisa.addEventListener("input", function () {
        const termo = this.value.toLowerCase();

        artigos.forEach(function (artigo) {
            const textoArtigo = artigo.textContent.toLowerCase();

            if (textoArtigo.includes(termo)) {
                artigo.style.display = "flex";
            } else {
                artigo.style.display = "none";
            }
        });
        var sairBtn = document.getElementById("sair");
        if (termo !== "") {
            sairBtn.style.display = "block";
        } else {
            sairBtn.style.display = "none";
        }
    });
});

document.getElementById("buscarBtn").addEventListener("click", function () {
    var pesquisar = document.getElementById("navLi");
    if (pesquisar.style.display === "block") {
        pesquisar.style.display = "none";
    } else {
        pesquisar.style.display = "block";
    }
});
