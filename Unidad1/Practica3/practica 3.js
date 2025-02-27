//day 0 Hello, World!//

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    console.log(parameterVariable);

    // Write a line of code that prints parameterVariable to stdout using console.log:
    
}

//dAY 0 Hello, data_types//

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
    
    console.log(firstString.concat(secondString));
    
}

//Day 1: Arithmetic Operators//
function getArea(length, width) {
    let area;
    // Write your code here
    
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    
    return perimeter;
}

//Day 1: Let and Const//
function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    let r = parseFloat(readLine());
    // Print the area of the circle:
    let area = PI * Math.pow(r,2);
    console.log(area);
    
    // Print the perimeter of the circle:
    var perimeter = 2 * PI * r;
    console.log(perimeter);
}

//day 1: Funciones//
function factorial(n)
{
    if (n < 2)
        {
            return 1;
        }
    
    return n * factorial(n-1);
}

//Day 2: Conditional Statements: If-Else//
function getGrade(score)
{
    let grade;
    // Write your code here
    
    if ((score > 25) && (score <= 30))
    {
        grade = 'A';
    }
    
    else if ((score > 20) && (score <= 25))
    {
        grade = 'B';
    }
    
    else if ((score > 15) && (score <= 20))
    {
        grade = 'C';
    }
    
    else if ((score > 10) && (score <= 15))
    {
        grade = 'D';
    }
    
    else if ((score > 5) && (score <= 10))
    {
        grade = 'E';
    }
    
    else if ((score > 0) && (score <= 5))
    {
        grade = 'F';
    }
    
    return grade;
}
//Day 2: Conditional Statements: Switch
function getLetter(s) {
    let letter;
    // Write your code here
    
    switch (s.charAt(0))
        {
            case ( 'a' || 'e' || 'o' || 'i' || 'u'):
                letter = 'A';
                break;
                
            case ('b' || 'c' || 'd' || 'f' || 'g'):
                letter = 'B';
                break;
                
            case ('h' || 'j' || 'k' || 'l' || 'm'):
                letter = 'C';
                break;
                
            default:
                letter = 'D';
                break;
        }
    
    
    return letter;
}

//day 3: Arrays
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    const sorted_array          = nums.sort((a,b) => a - b );
    const unique_sorted_array   = [...new Set(sorted_array)];
    return unique_sorted_array[unique_sorted_array.length - 2];
}
//Day 3: Throw//
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

//Day 3: Try, Catch, and Finally//

function reverseString(s) {
    try {
        var splitString = s.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        console.log(joinArray);
    }
    catch (error)
        {
            // Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
            console.log(error.message);
            console.log(s);
        }
    
    
}

//Dia 4 Create a Rectangle Object//

function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a+b);
    this.area = a * b;
}

//Dia 4 Count Objects//

function getCount(objects) {
    var count = 0;
    for (var index in objects)
        {
            if (objects[index].x == objects[index].y)
                {
                    count++;
                }
        }
    return count;
}

//Day 4: Classes//

class Polygon {
    constructor(heights) 
    {
        var polygon_perimeter = 0;
        for (var index in heights)
            {
                polygon_perimeter += heights[index];
            }
        
        this.my_perimeter = polygon_perimeter;
    }
    
     perimeter() 
    {
        return this.my_perimeter;
    }
    
}
