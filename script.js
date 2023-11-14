//? Svaret på hver av oppgavene skal konsoll logges

//* Assignment 1: Logging to the Console

//! log into the console: Hello world!
console.log("Hello world!");

//* Assignment 2: Variables
// Let defines a variable that can be changed later.
let x = 10;

// Const defines a variable that cannot be changed later.
const y = 5;

/* Creating a variable to shorten code The 2 variables above.
Output should be: "Resultatet er: 15" (hvor 15 er summen av variablene) */

//! Write code here
console.log(`Resultatet er: ${x + y}`);

//* Assignment 3:
// Use double operators to solve the parts below:

// Incrementing a number by 1.

//! Write code here
console.log(x++);

// Decrementing a number by 1.

//! Write code here
console.log(x--);

// Multiplying a number by itself.

//! Write code here
console.log(x**2);

// Dividing a number by itself.

//! Write code here
console.log(x**0);

//* Assignment 4:
/* Make an if else statement that returns a random string */

//! Write code here


//* Assignment 5:
/* Make a function that uses a parameter to check if a number is odd or even */

//! Write code here
function checkOddOrEven(num) {
    if (num % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

checkOddOrEven(5);


//* Assigment 6:

/* Make a variable called userTitle and set the content equal to "Mr." if userMale is true,
or to "Mrs." if userMale is false. Use the TERNARY conditional to do this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working. */

//! Write code here
let userMale = true;
let userTitle = userMale ? "Mr." : "Mrs.";
console.log(userTitle);

userMale = false;
userTitle = userMale ? "Mr." : "Mrs.";
console.log(userTitle);


//* Assigment 8:
/*
Write a function that takes in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Good night (name received)" if the hour received is 0-6
"Good morning (name received)" if the hour received is 6-12
"Good day (name received)" if the hour received is 12-18
"Good evening (name received)" if the hour received is 18-24
"Invalid time" if the hour received is greater than 24

Use whichever function syntax you want.
Use template literal in your return: `This is a template literal ${variable}`

Example console.log(yourFunction("Gunnar", 19)) should console log Good evening Gunnar
Console log the function a few times to show that it's working. */

//! Write code here
function greeting(name, hour) {
    if (hour >= 0 && hour <= 6) {
        return `Good night ${name}`;
    } else if (hour > 6 && hour <= 12) {
        return `Good morning ${name}`;
    } else if (hour > 12 && hour <= 18) {
        return `Good day ${name}`;
    } else if (hour > 18 && hour <= 24) {
        return `Good evening ${name}`;
    } else {
        return "Invalid time";
    }
}

console.log(greeting("Gunnar", 19));



//* Assignment 9:
/* Write a function that takes in 2 numbers as parameters.

In your function, check which of the numbers received is the largest,
then return the sum of the largest number divided by the smaller.

Use arrow function syntax.

Example: your function receives 13 and 24, it should return the sum of 24/13 */

//! Write code here
const largestDivide = (num1, num2) => Math.max(num1, num2) / Math.min(num1, num2);

console.log(largestDivide(13, 24));


//* Assignment 10:
/* Make a function that uses Switch/Case or if/else,
Random Number Generator, Methods, and Arrays with Objects */

//! Write code here

//* BAONUS assignment:
/*
EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make a function called coolMaker that takes in 1 parameter.

If the parameter received is a string:
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received is false,
return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

Use arrow function syntax.

Console log the function call with a few different datatypes to show that it's working
*/

//! Write code here