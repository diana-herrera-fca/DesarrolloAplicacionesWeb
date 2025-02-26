
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    console.log(parameterVariable);
    // Write a line of code that prints parameterVariable to stdout using console.log:

}
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

function getArea(length, width) {

    // Write your code here
    let area = length * width;
    return area;
}

function getPerimeter(length, width) {

    // Write your code here
    let perimeter = 2*(length +width);
    return perimeter;


}

function factorial(n) {
    let total =1;
    for (let i=1; i<=n; i++) {
        total = total * i;

    }
    return total;
}