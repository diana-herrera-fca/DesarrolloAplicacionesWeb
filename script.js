// Seleccionar elementos del DOM
const button = document.getElementById("colorButton");
const counterDisplay = document.getElementById("counter");

// Recuperar contador de localStorage o inicializarlo en 0
let clickCount = localStorage.getItem("clickCount") ? parseInt(localStorage.getItem("clickCount")) : 0;

// Mostrar contador almacenado
counterDisplay.textContent = "Clics: " + clickCount;

// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

// Evento para cambiar color y contar clics
button.addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor(); // Cambiar color de fondo
    clickCount++; // Aumentar contador
    counterDisplay.textContent = "Clics: " + clickCount; // Actualizar contador en pantalla
    localStorage.setItem("clickCount", clickCount); // Guardar en localStorage
});
