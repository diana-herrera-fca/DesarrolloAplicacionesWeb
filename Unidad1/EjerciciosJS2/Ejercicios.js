/**   Pérez Noyola Juan Pablo
 *    Day 3 Arrays
 **/
function getSecondLargest(nums) {
    // Complete the function
    let uniqueNums = [...new Set(nums)];

    uniqueNums.sort((a, b) => b - a);

    return uniqueNums[1];
}

/**
 *    Day 3 Try, Catch, and Finally
 **/
function reverseString(s) {
    try {
        s = s.split('').reverse().join('');
    } catch (error) {
        console.log(error.message);
    }
    console.log(s);
}

/**
 *    Day 3 Throw
 **/
function isPositive(a) {
    if (a > 0) {
        return "YES";
    } else if (a == 0) {
        throw new Error("Zero Error");
    } else {
        throw new Error("Negative Error");
    }
}

/**
 *    Day 4 Create a Rectangle Object
 **/
function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    };
}

/**
 *    Day 4 Count Objects
 **/
function getCount(objects) {
    return objects.filter(o => o.x == o.y).length;
}

/**
 *    Day 4 Classes
 **/
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}