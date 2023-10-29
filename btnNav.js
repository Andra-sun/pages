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



/* voltar btn */
document.getElementById("sair").addEventListener("click", function () {
    var navLi = document.getElementById("navLi");
    navLi.style.display = "none";

    var caixaDePesquisa = document.getElementById("caixaDePesquisa");
    caixaDePesquisa.value = "";

    var artigos = document.querySelectorAll(".article");
    artigos.forEach(function (artigo) {
        artigo.style.display = "flex";
    });

    var sairBtn = document.getElementById("sair");
    sairBtn.style.display = "none";

    var calculadoras = document.querySelectorAll(".calculadora");
    calculadoras.forEach(function (calculadora) {
        calculadora.style.display = "flex";
    });

    var escolas = document.querySelectorAll(".escola");
    escolas.forEach(function (escola) {
        escola.style.display = "flex";
    });
});


/* filtragem */
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filterable");
    const calculadoras = document.querySelectorAll(".calculadora");
    const escolas = document.querySelectorAll(".escola");

    filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const filterClass =
                this.id === "calcBtn" ? "calculadora" : "escola";
            const hideClass = this.id === "calcBtn" ? "escola" : "calculadora";

            calculadoras.forEach((calculadora) => {
                calculadora.style.display =
                    filterClass === "calculadora" ? "block" : "none";
            });

            escolas.forEach((escola) => {
                escola.style.display =
                    filterClass === "escola" ? "block" : "none";
            });

            document.getElementById("navLi").style.display = "none";
            document.getElementById("sair").style.display = "block";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const caixaDePesquisa = document.getElementById("caixaDePesquisa");
    const artigos = document.querySelectorAll(".calculadora, .escola");
    const sairBtn = document.getElementById("sair");

    caixaDePesquisa.addEventListener("input", function () {
        const termo = this.value.toLowerCase();

        artigos.forEach(function (artigo) {
            const textoArtigo = artigo.textContent.toLowerCase();
            const articleID = artigo.id;

            if (textoArtigo.includes(termo)) {
                document.getElementById(articleID).style.display = "flex";
            } else {
                document.getElementById(articleID).style.display = "none";
            }
        });

        if (termo !== "") {
            sairBtn.style.display = "block";
        } else {
            sairBtn.style.display = "none";
        }
    });

    sairBtn.addEventListener("click", function () {
        caixaDePesquisa.value = "";

        artigos.forEach(function (artigo) {
            artigo.style.display = "flex";
        });

        sairBtn.style.display = "none";
    });
});
