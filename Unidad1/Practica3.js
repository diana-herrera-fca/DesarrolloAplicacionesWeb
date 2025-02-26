
function readLine() {
    return inputString[currentLine++];
}

/**
 *   A line of code that prints "Hello, World!" on a new line is provided in the editor.
 *   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
 *
 *	Parameter:
 *   parameterVariable - A string of text.
 **/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:

    console.log(parameterVariable);

}

function readLine() {
    return inputString[currentLine++];
}

/**
 *   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
 *   Print three lines:
 *   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
 *   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
 *   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
 *
 *	Parameter(s):
 *   secondInteger - The string representation of an integer.
 *   secondDecimal - The string representation of a floating-point number.
 *   secondString - A string consisting of one or more space-separated words.
 **/
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.

    console.log(firstInteger + Number(secondInteger));

    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.

    console.log(firstDecimal + Number(secondDecimal));

    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.

    console.log(firstString + secondString);

}


function readLine() {
    return inputString[currentLine++];
}

/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
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
    perimeter = 2 * length + 2 * width;
    return perimeter;
}


function readLine() {
    return inputString[currentLine++];
}
/*
 * Create the function factorial here
 */

function factorial(n){
    let numerofactorial = 1;
    for(let i=1; i<=n; i++){
        numerofactorial *= i;
    }
    return numerofactorial;
}




function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.

    const PI= Math.PI;
    let r = readLine();

    let area = PI * (r*r);

    // Print the area of the circle:

    console.log(area);

    let perimetro = 2 * PI * r;

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


