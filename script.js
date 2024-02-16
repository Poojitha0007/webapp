// Define a variable
var greeting = "Hello, World!";

// Print the greeting to the console
console.log(greeting);

// Define a function to add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Call the function and store the result
var sum = addNumbers(5, 3);

// Print the result to the console
console.log("The sum of 5 and 3 is: " + sum);

// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Iterate over the array and print each number
console.log("Numbers in the array:");
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Define an object representing a person
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Access properties and call methods of the person object
console.log("Person's full name: " + person.fullName());
console.log("Person's age: " + person.age);

// Define and call a function using arrow syntax (ES6)
var square = (x) => x * x;
console.log("Square of 5: " + square(5));
