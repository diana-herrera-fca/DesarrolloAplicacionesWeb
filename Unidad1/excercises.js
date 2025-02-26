/** ex1
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    console.log(parameterVariable)
    // Write a line of code that prints parameterVariable to stdout using console.log:

}

/** Ex2
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

    console.log(parseInt(firstInteger) + parseInt(secondInteger))

    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log(parseFloat(firstDecimal) + parseFloat(secondDecimal))

    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.

    console.log(firstString + secondString)
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
    area = length * width;

    return area;
}

/** Ex3
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2 * length + 2 * width

    return perimeter;
}

/* Ex4
 * Create the function factorial here
 */

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

/* Ex5 */
function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    var pi = Math.PI
    var r = readLine();

    // Print the area of the circle:
    console.log(r ** 2 * pi);
    // Print the perimeter of the circle:
    console.log(2 * pi * r);
}

/* Ex6 */
function getGrade(score) {
    if (25 < score && score <= 30) {
        return "A";
    } else if (20 < score && score <= 25) {
        return "B";
    } else if (15 < score && score <= 20) {
        return "C";
    } else if (10 < score && score <= 15) {
        return "D";
    } else if (5 < score && score <= 10) {
        return "E";
    } else {
        return "F";
    }
}

/* Ex7 */

function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = 'A';
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = 'B';
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = 'C';
            break;
        default:
            letter = 'D';
            break;
    }
    return letter;
}

/* Ex8 
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var cons = [];
    for (let char of s) {
        if ('aeiou'.includes(char.toLowerCase())) {
            console.log(char);
        } else {
            cons.push(char);
        }
    }
    for (let char of cons) {
        console.log(char);
    }

}

/* Ex9 */
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let max = Math.max(...nums);
    let secondMax = Math.min(...nums);
    for (let num of nums) {
        if (num > secondMax && num < max) {
            secondMax = num;
        }
    }
    return secondMax;
}

/* Ex10 */
/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        console.log(s.split("").reverse().join(""));
    } catch (e) {
        console.log(e.message);
        console.log(s);
    }
}

/* Ex11 */
/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a > 0) {
        return "YES";
    } else if (a === 0) {
        throw new Error("Zero Error");
    } else {
        throw new Error("Negative Error");
    }
}

/* Ex12
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
}

/* Ex13
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    return objects.filter(o => o.x === o.y).length;
}

/* Ex14
/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    perimeter() {
        return this.sides.reduce((acc, side) => acc + side);
    }

}

/* Ex15 */
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
    return this.w * this.h;
}

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(s) {
        super(s, s);
    }
}

/* Ex16 
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    const [a, p] = expressions;
    const root = Math.sqrt(p ** 2 - 16 * a);
    const s1 = (p + root) / 4;
    const s2 = (p - root) / 4;
    return [s1, s2].sort();
}

/* Ex17 */
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    return nums.map(num => num % 2 === 0 ? num * 2 : num * 3);
}

/* Ex18 
    * Bitwise operators
*/
function getMaxLessThanK(n, k) {
    let max = 0;
    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            let result = a & b;
            if (result < k && result > max) {
                max = result;
            }
        }
    }
    return max;
}

/* Ex19*/
// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    const date = new Date(dateString);
    const options = { weekday: 'long' };
    dayName = new Intl.DateTimeFormat('en-US', options).format(date);
    return dayName;
}