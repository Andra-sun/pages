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

