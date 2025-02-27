//DAY3 : arrays

function getSecondLargest(nums) {
    // Complete the function
    const uniqueNums = [...new Set(nums)];
    uniqueNums.sort((a, b) => b - a);
    return uniqueNums[1];
}
// Day 3 TRY, CATCH,AND FINALLY
function reverseString(s) {
    try {

        const reversed = s.split('').reverse().join('');
        console.log(reversed);
    } catch (e) {

        console.log(e.message);
        console.log(s);
    }
}

//Day 3 THROW
function isPositive(a) {
    if (a > 0) {
        return "YES";
    } else if (a === 0) {
        throw new Error("Zero Error");
    } else {
        throw new Error("Negative Error");
    }
}
//Day 4 CREATE A RECTANGLE
function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    }

}
//Day 4 COUNT OBJECTS

function getCount(objects) {
    return objects.filter(o => o.x === o.y).length;
}

// Day 4 CLASSES
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}