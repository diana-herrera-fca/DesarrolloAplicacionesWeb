-----------------------------------------------------
    Day 1: Let and Const
-----------------------------------------------------
    function main() {
        // Lee la entrada e imprime la salida.
        const piValor = Math.PI;
        let radio = readLine();
        let areaCirculo = piValor * Math.pow(radio, 2);
        let perimetroCirculo = 2 * piValor * radio;

        console.log(areaCirculo);
        console.log(perimetroCirculo);
        try {
            // Intento de reasignar constante
            piValor = 0;
            console.log(piValor);
        } catch(error) {
            console.error("Correcto: 'PI' es una constante.");
        }
    }

-----------------------------------------------------
    Day 1: Functions
-----------------------------------------------------
    function factorial(n) {
        let resultado = 1;
        for (var i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }

-----------------------------------------------------
    Day 2: Loops
-----------------------------------------------------
    function vowelsAndConsonants(cadena) {
        for (let i = 0; i < cadena.length; i++){
            if("aeiou".includes(cadena[i])){
                console.log(cadena[i]);
            }
        }

        for (let i = 0; i < cadena.length; i++){
            if(!("aeiou".includes(cadena[i]))){
                console.log(cadena[i]);
            }
        }
    }

-----------------------------------------------------
    Day 2: Conditional Statements: If-Else
-----------------------------------------------------
    function getGrade(puntuacion) {
        let calificacion;
        if(puntuacion > 25 && puntuacion <= 30){
            calificacion = "A";
        } else if (puntuacion > 20 && puntuacion <= 25){
            calificacion = "B";
        } else if (puntuacion > 15 && puntuacion <= 20){
            calificacion = "C";
        } else if (puntuacion > 10 && puntuacion <= 15){
            calificacion = "D";
        } else if (puntuacion > 5 && puntuacion <= 10){
            calificacion = "E";
        } else if (puntuacion > 0 && puntuacion <= 5){
            calificacion = "F";
        }
        return calificacion;
    }

-----------------------------------------------------
    Day 2: Conditional Statements: Switch
-----------------------------------------------------
    function getLetter(cadena) {
        let letra;
        switch(true){
            case "aeiou".includes(cadena[0]):
                letra = "A";
                break;
            case "bcdfg".includes(cadena[0]):
                letra = "B";
                break;
            case "hjklm".includes(cadena[0]):
                letra = "C";
                break;
            case "npqrstvwxyz".includes(cadena[0]):
                letra = "D";
        }
        return letra;
    }

-----------------------------------------------------
    Day 3: Arrays
-----------------------------------------------------
    function getSecondLargest(numeros) {
        let mayor, segundo;
        mayor = segundo = Number.MIN_VALUE;
        for(let i = 0; i < numeros.length; i++){
            if(numeros[i] > mayor){
                segundo = mayor;
                mayor = numeros[i];
            } else {
                if(numeros[i] > segundo && numeros[i] !== mayor)
                    segundo = numeros[i];
            }
        }
        return segundo;
    }

-----------------------------------------------------
    Day 3: Try, Catch, and Finally
-----------------------------------------------------
    function reverseString(cadena) {
        try {
            cadena = cadena.split("").reverse().join("");
        } catch(error) {
            console.log(error.message);
        } finally {
            console.log(cadena);
        }
    }

-----------------------------------------------------
    Day 3: Throw
-----------------------------------------------------
    function isPositive(numero) {
        if(numero > 0 ){
            return "YES";
        } else if(numero == 0){
            throw new Error("Zero Error");
        } else {
            throw new Error("Negative Error");
        }
    }

-----------------------------------------------------
    Day 4: Create a Rectangle Object
-----------------------------------------------------
    function Rectangle(largo, ancho) {
        var rectangulo = {
            length: largo,
            width: ancho,
            perimeter: 2 * (largo + ancho),
            area: largo * ancho
        }
        return rectangulo;
    }

-----------------------------------------------------
    Day 4: Count Objects
-----------------------------------------------------
    function getCount(objetos) {
        var contador = 0;
        for(let i = 0; i < objetos.length; i++){
            if(objetos[i].x == objetos[i].y){
                contador++;
            }
        }
        return contador;
    }

-----------------------------------------------------
    Day 4: Classes
-----------------------------------------------------
    class Polygon {
        constructor(lados) {
            this.lados = lados;
        }
        perimeter() {
            var suma = 0;
            for(let i = 0; i < this.lados.length; i++){
                suma += this.lados[i];
            }
            return suma;
        }
    }
