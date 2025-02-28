/*
--Dia cero

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable)

}

--Dia uno

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    console.log (firstInteger + Number (secondInteger));

    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log(firstInteger + Number (secondDecimal));

    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString + secondString) ;
}

--Dia uno

/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *   Return a number denoting the rectangle's area.


function getArea(length, width) {
    let area = length * width;
    return area;
}

/**
 *   Calculate the perimeter of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *   Return a number denoting the perimeter of a rectangle.

function getPerimeter(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter;
}

--Dia uno

/*
 * Create the function factorial here


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

--Dia dos

function getLetter(s) {
    let letter;
    let firstChar = s[0].toLowerCase();

    switch (true) {
        case 'aeiou'.includes(firstChar):
            letter = 'A';
            break;
        case 'bcdfg'.includes(firstChar):
            letter = 'B';
            break;
        case 'hjklm'.includes(firstChar):
            letter = 'C';
            break;
        case 'npqrstvwxyz'.includes(firstChar):
            letter = 'D';
            break;
        default:
            letter = 'Desconocido';
    }

    return letter;
}

--Dia dos

function getGrade(score) {
    let grade;
    // Write your code here

    if (score >= 25 && score <= 30) {
        grade = 'A';
    } else if (score >= 20 && score <= 25) {
        grade = 'B';
    } else if (score >= 15 && score < 20) {
        grade = 'C';
    } else if (score >= 10 && score < 15) {
        grade = 'D';
    } else if (score >= 5 && score < 10) {
        grade = 'E';
    } else if (score >= 0 && score < 5)
        grade = 'F';
    return grade;
}

--Dia dos

function vowelsAndConsonants(s) {
    let vowels = "aeiou";
    let consonants = "bcdfghjklmnpqrstvwxyz";

    for (const letter of s) {
        if (vowels.includes(letter)) {
            console.log(letter);
        }
    }


    for (const letter of s) {
        if (consonants.includes(letter)) {
            console.log(letter);
        }
    }
}

--Día tres

function getSecondLargest(nums) {
    // Complete the function
    let first = -Infinity;
    let second = -Infinity;

    for (let num of nums) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second === -Infinity ? null : second;
}

--Día tres

function getSecondLargest(nums) {
    // Complete the function
    let first = -Infinity;
    let second = -Infinity;

    for (let num of nums) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second === -Infinity ? null : second;
}

--Día tres

 function isPositive(a) {
    if (a > 0)
        {
            return "YES";
        }
    else if (a === 0)
        {
            throw new Error("Zero Error");
        }
    else if (a < 0)
        {
            throw new Error("Negative Error");
        }
}

--Día cuatro

function Rectangle(a, b) {

    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a+b);
    this.area = a * b;
    }

--Día cuatro

function getCount(objects) {
    let count = 0;

    for (let obj of objects) {
        if (obj.x === obj.y) {
            count++;
        }
    }

    return count;
}

--Día cuatro

class Polygon {
    constructor(heights) {
        this.sides = heights;
    }

    perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}

 */