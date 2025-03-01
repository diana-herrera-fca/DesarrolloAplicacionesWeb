/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
    // Complete the function
    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > first) {
            second = first;
            first = nums[i];
        } else if (nums[i] > second && nums[i] !== first) {
            second = nums[i];
        }
    }
    return second;
}




function reverseString(s) {
    try {

        let reversed = s.split('').reverse().join('');
        console.log(reversed);
    } catch (error) {

        console.log(error.message);
        console.log(s);
    }
}





function isPositive(a) {
    if (a > 0) {
        return "YES";
    } else if (a === 0) {
        throw new Error("Zero Error");
    } else {
        throw new Error("Negative Error");
    }
}




function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    };
}



function getCount(objects) {
    let count = 0;


    for (let i = 0; i < objects.length; i++) {

        if (objects[i].x === objects[i].y) {
            count++;
        }
    }

    return count;
}




class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    perimeter() {

        return this.sides.reduce((acc, side) => acc + side, 0);
    }
}