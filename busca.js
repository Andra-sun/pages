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
    });
});
