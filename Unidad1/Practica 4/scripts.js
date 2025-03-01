
    const button = document.getElementById("colorButton");
    const counterDisplay = document.getElementById("counter");
    let clickCount = localStorage.getItem("clickCount") ? parseInt(localStorage.getItem("clickCount")) : 0;
    counterDisplay.textContent = "Clicks: " + clickCount;
    button.addEventListener("click", function() {
// Generar color aleatorio
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
// Aplicar color al fondo
    document.body.style.backgroundColor = randomColor;
// Aumentar contador
    clickCount++;
// Guardar en localStorage
    localStorage.setItem("clickCount", clickCount);
});
