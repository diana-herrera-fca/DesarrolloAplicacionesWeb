
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/
function greeting(parameterVariable) {
    console.log('Hello, World!');
    console.log(parameterVariable);
}





function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    console.log(firstInteger + Number(secondInteger));
    console.log(firstDecimal + Number(secondDecimal));
    console.log(firstString.concat(secondString));
}





function getArea(length, width) {
    let area;
    area = length * width;
    return area;
}
function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2 * (length + width);
    return perimeter;
}





function factorial(n)
{
    if (n < 2)
        {
            return 1;
        }
    return n * factorial(n-1);
}





function main() {
    const PI = Math.PI;
    let r = parseFloat(readLine());
    let area = PI * Math.pow(r,2);
    console.log(area);
    var perimeter = 2 * PI * r;
    console.log(perimeter);
}





function getGrade(score)
{
    let grade;
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





function getLetter(s) {
    let letter;
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





function vowelsAndConsonants(s) 
{
    var vowels = ['a', 'e', 'i', 'o', 'u']
    for (var i = 0; i < s.length; i++)
        {
            if (vowels.indexOf(s[i]) > -1)
                {
                    console.log(s[i]);
                }
        }
    for (var j = 0; j < s.length; j++)
        {
            if (vowels.indexOf(s[j]) < 0)
                {
                    console.log(s[j]);
                }
        }    
}






    @param {Number[]} nums 
    @return {Number} 

function getSecondLargest(nums) {
    const sorted_array          = nums.sort((a,b) => a - b );
    const unique_sorted_array   = [...new Set(sorted_array)];
    return unique_sorted_array[unique_sorted_array.length - 2];
}





function reverseString(s) {
    try {
        var splitString = s.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        console.log(joinArray);
    }
    catch (error)
        {
            console.log(error.message);
            console.log(s);
        }
    
    
}





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