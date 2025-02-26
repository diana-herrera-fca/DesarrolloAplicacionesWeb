/* day 0 hello world */

for(let char of s){
    if (vowels.includes(char)) {
        console.log(char)
    }
}

/* day 0 data types*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

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


function main() {
    const secondInteger = readLine();
    const secondDecimal = readLine();
    const secondString = readLine();

    performOperation(secondInteger, secondDecimal, secondString);
}

/* day 1 Arithmetic operators */
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

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
    area= length*width;
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
    perimeter = 2*(length+width);
    return perimeter;
}

/* day 1 Functions */

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}
/*
 * Create the function factorial here
 */
function factorial(n){
    if (n == 0){
        return 1;
    }
    return n*factorial(n-1);
}


/* day 1 Let and Const */

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI
    let r=parseFloat(readLine());
    // Print the area of the circle:
    const area = PI *r*r;
    console.log(area);
    // Print the perimeter of the circle:
    let perimeter = 2*PI*r;
    console.log(perimeter);
    try {


        /* day 2 Loops */

        'use strict';

        process.stdin.resume();
        process.stdin.setEncoding('utf-8');

        let inputString = '';
        let currentLine = 0;

        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
        });

        process.stdin.on('end', _ => {
            inputString = inputString.trim().split('\n').map(string => {
                return string.trim();
            });

            main();
        });

        function readLine() {
            return inputString[currentLine++];
        }

        /*
         * Complete the vowelsAndConsonants function.
         * Print your output using 'console.log()'.
         */
        function vowelsAndConsonants(s) {
            const vowels = ['a', 'e', 'i', 'o', 'u'];

            for(let char of s){
                if (vowels.includes(char)) {
                    console.log(char)
                }
            }
            for(let char of s){
                if (!vowels.includes(char)) {
                    console.log(char)
                }
            }
        }