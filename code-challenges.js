// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fibonacci2 = (iterations) => {
    //Initialize a few variables to hold certain values.
    let fibArr = [1]
    let total
    let num1 = 0
    let num2 = 1

    //For loop will run as many times as iterations and show that many numbers in a fibonacci sequence. iterations is subtracted by 1 because fibArr already has 1 value inside of it.
    for (i = 0; i < iterations - 1; i++) {
        //Set total to be the sum of num1 and num2
        total = num1 + num2
        //Set num1 with the value of num2.
        num1 = num2
        //Set num2 with the value of total.
        num2 = total
        //Push the value of total into a the fibArr we initialized in the beginning.
        fibArr.push(total)
    }
    //Returns the completed fibArr with the same amounf ot numbers as the iteration.
    return fibArr
}
console.log(fibonacci2(10))



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const oddFilter = (arr) => {
    //Filters through the arr argument and checks for any values that are a number and if that number is odd whether it is positive or negative. It will then put those odd numbers into and array, and then it sorts those numbers in order from least to greatest.
    return arr.filter(value => typeof value === "number" && value % 2 === 1 || value % 2 === -1).sort((a, b) => a - b)
}
console.log(oddFilter(fullArr1));
console.log(oddFilter(fullArr2));





// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const middleChar = (string) => {
    //Uses a ternary operator to check if a string has an even or odd amount of letters. If the string has an odd amount of letters, it will return the letter that is at the in the middle by dividing the string in half and rounding that number up. If the string has an even amount of letters, it will return the middle two letters by substringing the first middle letter (inclusive) and the next two letters (exclusive).
    return string.length % 2 === 1 ? string[Math.ceil(string.length / 2)] : string.substring(string.length / 2 - 1, string.length / 2 + 1)

}
console.log(middleChar(middleLetters1));
console.log(middleChar(middleLetters2));




// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere {
    //Create the Sphere class that takes in a number (radius) as an argument.
    constructor(radius) {
        //Creates an object for radius.
        this.radius = radius
    }
    //Method that will calculate the area of a sphere.
    area() {
        return 4 * Math.PI * this.radius ** 2
    }
}
//Create multiple variables that are new instances of the Sphere class.
var sphere1 = new Sphere(4)
console.log(sphere1.area());

var sphere2 = new Sphere(8)
console.log(sphere2.area());

var sphere3 = new Sphere(12)
console.log(sphere3.area());


// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.


var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []


const sum = (arr) => {
    //Initialize an empty array and a variable equal to 0.
    let newArr = []
    let previousNum = 0

    for (i = 0; i < arr.length; i++) {
        //Go through a for loop of the array argument equal to its length and checks to see if index i is equal to 0.
        if (i === 0) {
            //Push that value into the new array if its true.
            newArr.push(arr[i])
        }
        else {
            //If index i is not equal to 0, then it will set previousNum to be the sum of the value at arr argument and the value of newArr at index of i - 1.
            previousNum = arr[i] + newArr[i - 1]
            //Pushes the sum into the new array.
            newArr.push(previousNum)
        }
    }
    //Returnt the entire new array.
    return newArr
}

console.log(sum(numbersToAdd1));
console.log(sum(numbersToAdd2));
console.log(sum(numbersToAdd3));
