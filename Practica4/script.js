
//Generar el selector para el counter y boton
const button = document.getElementsByClassName("button-color")[0];
const counterDisplay = document.getElementById("counter");
// Recuperar contador de localStorage o inicializarlo en 0
let clickCount = localStorage.getItem("clickCount") ? parseInt(localStorage.getItem("clickCount")) : 0;
// Mostrar contador almacenado
counterDisplay.textContent = "Clics: " + clickCount;


//Generar color aleatorio
function randomColor(){
    var randomHexadecimalColor="ABCDEF0123456789";
    var max=16;
    var color="#";
    var arrayColor=[];
    
    for(let i=1; i<7;i++){
            
           
            color += randomHexadecimalColor[Math.floor(Math.random() * max)];
            arrayColor.push(color);
    }
    return color;
}

// Evento para cambiar color y contar clics
button.addEventListener("click", function(){

    var generateColor= randomColor();
  // Aplicar color al fondo
    document.body.style.backgroundColor = generateColor

// Aumentar contador
    clickCount++
    


//Actualizar contador con cada click 
    counterDisplay.textContent = "Clicks " + clickCount;

// Guardar en localStorage
    localStorage.setItem("clickCount", clickCount);

});

/*
// Obtener los elementos
const button = document.getElementsByClassName("button-color")[0]; // Acceder al primer botón
const counterDisplay = document.getElementById("counter"); // Asegúrate de usar el ID correcto

// Recuperar contador de localStorage o inicializarlo en 0
let clickCount = localStorage.getItem("clickCount") ? parseInt(localStorage.getItem("clickCount")) : 0;

// Mostrar contador almacenado
counterDisplay.textContent = "Clicks: " + clickCount;

// Función para generar color aleatorio
function randomColor(){
    var randomHexadecimalColor = "ABCDEF0123456789";
    var max = 16;
    var color = "#";
    
    for (let i = 0; i < 6; i++) { // Generar 6 caracteres del color
        color += randomHexadecimalColor[Math.floor(Math.random() * max)];
    }
    return color;
}

// Evento para cambiar color y contar clics
button.addEventListener("click", function() {
    // Cambiar el color de fondo
    var newColor = randomColor();
    document.body.style.backgroundColor = newColor;

    // Aumentar el contador
    clickCount++;

    // Actualizar el contador en la pantalla
    counterDisplay.textContent = "Clicks: " + clickCount;

    // Guardar el contador en localStorage
    localStorage.setItem("clickCount", clickCount);

    // Guardar el color en localStorage (opcional si deseas que se mantenga el color después de recargar)
    localStorage.setItem("backgroundColor", newColor);
});

// Si existe un color guardado en localStorage, aplicarlo al cargar la página
if (localStorage.getItem("backgroundColor")) {
    document.body.style.backgroundColor = localStorage.getItem("backgroundColor");
}
*/