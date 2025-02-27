function getSecondLargest(nums){
    // Complete the function
    let uniqueNums = [...new Set(nums)];
    
    uniqueNums.sort((a, b) => b - a);
    
    return uniqueNums[1];
}

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s){
    try {
        console.log(s.split('').reverse().join(''));
    }catch (error) {

        console.log(error.message);
        console.log(s);
    }
}

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a){
     if (a > 0) {
        return "YES";
    }else if (a === 0){
        throw new Error("Zero Error");
    }else {
        throw new Error("Negative Error");
    }
}

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b){
     return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    };
}

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects){
     return objects.filter(o => o.x === o.y).length;
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    let vowelChars = '';
    let consonantChars = '';
    
    for (let char of s) {
        if (vowels.includes(char)) {
            vowelChars += char + '\n';
        } else {
            consonantChars += char + '\n';
        }
    }
    
    console.log(vowelChars.trim());
    console.log(consonantChars.trim());  
}

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
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}

