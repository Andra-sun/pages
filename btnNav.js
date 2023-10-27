document.getElementById("navBtn").addEventListener("click", function () {
    var lista = document.getElementById("navLi");
    if (lista.style.display === "none" || lista.style.display === "") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }
});
