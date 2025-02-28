/*1*/
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
 *   A line of code that prints "Hello, World!" on a new line is provided in the editor.
 *   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
 *
 *	Parameter:
 *   parameterVariable - A string of text.
 **/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    console.log(parameterVariable);


    // Write a line of code that prints parameterVariable to stdout using console.log:

}

/*2*/

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
    console.log(parseInt(secondInteger) + firstInteger);

    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.

    console.log(parseFloat(secondDecimal) + firstDecimal);

    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString + secondString);




}

/*3*/

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
    area = (length * width);
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
/*4*/

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
function factorial(n) {
    if(n > 1) {
        var valor = 1;
        for(let i = 1; i<=n; i++) {
            valor *=i;
        }

        return valor;
    }

    return n;
}
/*5*/

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

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = parseFloat(readLine());
    // Print the area of the circle:
    const area = Math.PI*r*r;
    console.log(area);

    // Print the perimeter of the circle:
    const perimeter = 2*Math.PI*r;
    console.log(perimeter);
    /*6*/
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

    function getGrade(score) {
        let grade;
        // Write your code here
        if(score>25 && score <=30){
            grade = 'A';
        }
        else if(20 < score && score <= 25){
            grade = 'B';
        }
        else if(15 <score && score <= 20){
            grade = 'C';
        }
        else if(10 <score && score <= 15){
            grade = 'D'
        }
        else if(5 <score && score <= 10){
            grade = 'E'
        }
        else if(0 <score && score <= 5){
            grade = 'F'
        }
        return grade;

        /*7*/
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

        function getLetter(s) {
            let letter;
            // Write your code here
            var char = s.charAt(0);


            switch(char) {


                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    letter='A';
                    break;
                case 'b':
                case 'c':
                case 'd':
                case 'f':
                case 'g':
                    letter='B';
                    break;
                case 'h':
                case 'j':
                case 'k':
                case 'l':
                case 'm':
                    letter='C';
                    break;
                default :
                    letter='D';
                    break;
            }
            return letter;
        }
/*8*/
        function vowelsAndConsonants(s) {


            let str = s.replace(/[^aeiou]/gi, '') + s.replace(/[aeiou]/gi, '');

            for(var i of str)
            {console.log(i);}
        }
/*9*/
        function getSecondLargest(nums) {
            // Complete the function
            let largest = nums[0];
            let secondLargest = nums[0];

            for (let i = 1; i < nums.length; i++) {
                if (nums[i] > largest) {
                    secondLargest = largest;
                    largest = nums[i];
                    continue;
                }

                if ((nums[i] > secondLargest) && (nums[i] < largest)) {
                    secondLargest = nums[i];
                }
            }

            return secondLargest;
        }
/*10*/

        function reverseString(s) {
            try {
                var strArr = s.split('');
                strArr.reverse();
                var joinStr = strArr.join('');
                console.log(joinStr);
            }catch(error) {
                console.log(error.message);
                console.log(s);
            } finally {
                //noting
            }
        }
/*11*/
        function isPositive(a) {
            if(a > 0)
                return 'YES';
            else if(a === 0)
                return 'Zero Error';
            else
                return 'Negative Error';

        }
/*12*/
        function Rectangle(a, b) {
            this.length = a;
            this.width = b;
            this.area = a*b;
            this.perimeter = 2*(a+b);
        }
/*13*/
        function getCount(objects) {
            var counter = 0;

            for(var object of objects) {
                if(object.x === object.y) {
                    counter++;
                }
            }

            return counter;
        }
/*14*/
        class Polygon {
            constructor(params) {
                this.sides = params;
            }

            perimeter() {
                let sum = 0;

                for (let i = 0; i < this.sides.length; i++) {
                    sum += this.sides[i];
                }

                return sum;
            }


        }
/*15*/