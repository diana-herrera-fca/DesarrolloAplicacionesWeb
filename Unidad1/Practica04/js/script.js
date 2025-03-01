// Buscaremos el elemento byId "colorButton" y "counter"
const colorButton = document.getElementById("colorButton");
const counter = document.getElementById("counter");

// Recuperamos el valor de localStorage
let clickCount = localStorage.getItem("clickCount") || 0;

// Actualizamos el valor de counter
counter.textContent = "Clics: " + clickCount;

// Agregamos un evento click para cambiar el color del body y aumentar el contador
colorButton.addEventListener("click", () => {
    // Cambiar color del body
    document.body.style.backgroundColor = getRandColor();
    // Aumentar contador
    clickCount++;
    // Actualizar valor de counter
    counter.textContent = "Clics: " + clickCount;
    // Guardar el valor de clickCount en localStorage
    localStorage.setItem("clickCount", clickCount);
});

function getRandColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}