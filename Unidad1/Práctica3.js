// Día 0

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log
    console.log(parameterVariable)
}


//Día 0.0
console.log(firstInteger+Number(secondInteger));
console.log(firstDecimal+Number(secondDecimal));
console.log(firstString+secondString);


//Día 1


function getArea(length, width) {
    let area;
    // Write your code here

    area = length*width;

    return area;
}

/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here

    perimeter=2*length+2*width;

    return perimeter;
}


//Día 1.1


function factorial(n){
    let numerofactorial = 1;
    for(let i=1; i<=n; i++){
        numerofactorial *=i;
    }
    return numerofactorial;
}



//Día 1.2


function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.

    const PI= Math.PI;
    let r= readLine();

    let area=PI*(r*r);
    let perimetro=(2*PI*r);

    // Print the area of the circle:

    console.log(area);

    // Print the perimeter of the circle:


    console.log(perimetro);

    try {
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
