// -------------------------------------------------------------------------------------------- functions

// types of functions

// 1- declaration

// function greet(name) {
//   return `Welcome, ${name}!`;
// }

// console.log(greet("Hasnain"));

// 2- expression

// const greet = function (name) {
//   return `Welcome, ${name}!`;
// };

// console.log(greet("Hasnain"));

// 3- Arrow

// const greet = (name) => `Welcome, ${name}!`;

// console.log(greet("Hasnain"));

// -----------------------  Practise task-1

// function sqr(num) {
//   return num * num;
// }

// console.log(sqr(6));

// ----------------------- Challenge 1: function-based calculator

// const calculator = (n1, n2, operation) => {
//   if (operation === "add") {
//     return n1 + n2;
//   } else if (operation === "subt") {
//     return n1 - n2;
//   } else if (operation === "mult") {
//     return n1 * n2;
//   } else if (operation === "dvd") {
//     return n1 / n2;
//   } else {
//     return "Invalid Operation";
//   }
// };

// console.log(calculator(12, 4, "add"));

// const operation = (n1, n2) => {
//   return n1 * n2;
// };

// console.log(operation(2, 3));

// const msg = (name) => {
//   console.log(`Welcome ${name}`);
// };
// msg("Hasnain");

//

// -------------------------------------------------------------------------------------------- Loops

// ------ for loop: repeats a block of code a specific number of times

// const qs = "Printing numbers from 1 to 10";
// console.log(qs);
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

//

// const qs = "even numbers from 1 to 20";
// console.log(qs);
// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//

// const qs = "numbers from 10 to 1";
// console.log(qs);
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

//

// const qs = "elements of an array";
// console.log(qs);
// const fruits = ["apple", "banana", "mango", "watermelon", "grapes", "orange"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

//

// -------------- Quick Task (easy level)

// Task 1: Print numbers from 1 to 50.

// for (let i = 0; i <= 50; i++) {
//   console.log(i);
// }

//

// Task 2: Print odd numbers from 1 to 30

// for (let i = 0; i <= 30; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

//

// Task 3: Print the names of 5 of your friends using an array.

// const friends = ["ali", "asif", "bashir", "hamid", "kashif"];
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

//

// -------------- Logic-Building Task (Medium Level)

// Task 1: Print the multiplication table of 5 (from 1 to 10).

// for (let i = 1; i <= 10; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

//

// Task 2:  Print the square of each number from 1 to 10 (e.g., 1² = 1, 2² = 4, 3² = 9, etc.).

// for (let i = 1; i <= 10; i++) {
//   square = i * i;
//   console.log(`${i}² = ${square}`);
// }

//

// Task 3:  Print only the names that have more than 4 characters from this array
// const names = ["Ali", "Ahmed", "Sara", "Fatima", "Zain", "Muhammad"];

// const names = ["Ali", "Ahmed", "Sara", "Fatima", "Zain", "Muhammad"];
// for (let i = 0; i < names.length; i++) {
//   if (names[i].length > 4) {
//     console.log(names[i]);
//   }
// }

//

// -------------- Challenge (Hard Level)

// 1️⃣ Create a FizzBuzz program using a for loop from 1 to 50:
// If a number is divisible by 3, print "Fizz".
// If a number is divisible by 5, print "Buzz".
// If a number is divisible by both 3 and 5, print "FizzBuzz".

// for (let i = 1; i < 11; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//

// 2️⃣ Sum of all numbers from 1 to 100 (output: 5050).

// let sum = 0;

// for (let i = 1; i < 10; i++) {
//   sum += i;
//   console.log(sum);
// }

//

// 3️⃣ Print the following pattern (for n = 5):

// *
// * *
// * * *
// * * * *
// * * * * *

// let pattern = "";

// for (let i = 0; i < 5; i++) {
//   pattern += "* ";
//   console.log(pattern);
// }

//

// ------ for while-loop: repeats a block of code as long as a condition is true.

// let busArrived = false;

// while (!busArrived) {
//   console.log("Bus not arrived yet.");
//   busArrived = true
// }
// console.log('Bus has arrived');

//

// Print numbers from 1 to 10

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//

// Print even numbers from 1 to 20

// let i = 1;
// while (i <= 20) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

//

// Print numbers from 10 to 1

// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

//

// Print elements of an array

// const fruits = ["Apple", "Banana", "Mango", "Orange"];

// let i = 0;

// while (i < fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }

//

// Task: print the sum of numbers from 1 to n
// n = 5;
// sum = 0;
// i = 1;

// while (i <= n) {
//   sum += i;
//   i++;
// }
// console.log(sum);

//

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

//

// Task 1:

// let i = 10;

// while (i >= 1) {
//   console.log(i);
//   i--;
// }

//

// Task 2: multiple of 3

// let i = 1;
// let n = 3;

// while (i <= 5) {
//   console.log(i * n);
//   i++;
// }

//

// Task 3: ----- check

// let i = 1;
// while (i <= 20) {
//   if (i != 13) {
//     console.log(i);
//   }
//   i++;
// }

//

// Task 4:

// i = 1;
// sum = 0;
// n = 50;

// while (i <= n) {
//   sum += i;
//   i++;
// }
// console.log(sum);

//

// Task 5:

// let i = 1;
// while (i <= 20) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
//   i++;
// }

//

// Task 6:

// let ask = prompt(" enter a number");

// let i = 1;
// while (condition) {
//   if (ask === 5) {
//     console.log("Correct number");
//   } else ask++;
// }
