

// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.count = this.sides.length
    }
    get countSides() {
        return this.sides.length;

    }

    get perimeter() {
        let peri = 0;
        for ( let int of this.sides) {
            peri += int 
        }
        return peri
    }
}




class Triangle extends Polygon {
    get isValid () {
        if (!Array.isArray(this.sides)){
            console.log("Incorrect data type, bozo")
            return;
            //this checks if we are dealing with an array (returns true or false)
        } 
        
        if (this.count !== 3) {
            //here we are checking to see if the array passed in has three elements, returns true or false
            console.log("Not the right amount of sides");
        };
        //if we get here we are assigning each element in the array to a side in the triangle
        //and then returning true or false based on mudder trucking triangle rules whether or not its a valid triangle
        //just as an aside, I absolutely abhor math. Thanks for listening.
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        console.log("We added it up and it doesn't work for us, bruh");
       return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))

    }
}

class Square extends Polygon {
    get isValid () {
        if (!Array.isArray(this.sides)){
            console.log("Incorrect data type, bozo")
            return;
            //this checks if we are dealing with an array (returns true or false)
        } 
        if (this.count !== 4) {
            //here we are checking to see if the array passed in has four elements, returns true or false
            console.log("Not the right amount of sides");
            return;
        }
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4)); 
    }

    get area () {
         return (this.sides[0]) * (this.sides[0]);
    }
}