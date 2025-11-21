let x = 0;

const clicsRequeridos = 10;

const urlDestino = "https://www.youtube.com/watch?v=xvFZjo5PgG0"; 

const imagen = document.getElementById("easteregg");

if (imagen) {
    imagen.addEventListener("click", function() {x++; if (x === clicsRequeridos) {window.open(urlDestino, '_blank');}});
}