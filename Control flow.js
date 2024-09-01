// CONTROL FLOW -->> CONDITIONAL STATEMNTS -->> if..else if ..else

// let hour = 17;

// if (hour >= 6 && hour < 12) console.log("Good morning");
// else if (hour >= 12 && hour < 18) console.log("Good afternoon");
// else console.log("Good evening");

// switch...case

// let role = "moderator";

// // switch (role) {
// //   case "guest":
// //     console.log("Guest User");
// //     break;

// //   case "moderator":
// //     console.log("Moderator User");
// //     break;

// //   default:
// //     console.log("Unknow User");
// // }

// // we can write the same with if..els

// if (role == -"guest") console.log("Guest User");
// else if (role === "moderator") console.log("Moderator User");
// else console.log("Unknow User");

//**********************/

// LOOP *for*, let assignment internally

// for (let i = 0; i <= 5; i++) {
//   if (i % 2 !== 0) console.log("hello world", i);
// }

//********************/

// LOOP *while* , let - externally

// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log("hello world", i);
//   i++;
// }

//*************************/

// LOOP *do-while* , run at least one time, because conditions at the end.
// let i = 9;
// do {
//   if (i % 2 !== 0) console.log("hello world", i);
//   i++;
// } while (i <= 5);

//*************************/

// LOOP *infinity loops*, when doing mistakes can crash browser or even PC
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     forgot to add i++;
// }

// while(true) {
// }

// let x = 0;
// do {
//     forgot to add x++
// } while (x < 5);

// for (let i = 0; i < 10; forgot to add i++)

//*****************************/

// LOOP *for-in* for objects, arrays

// const person = {
//   name: "Vidas",
//   age: 30,
// };

// for (let key in person) console.log(key, person[key]);

// const colors = ["red", "blue", "gree"];

// for (let index in colors) console.log(index, colors[index]);

//****************************/

// LOOP *for-of* for arrays (modern js)

// const colors = ["red", "blue", "gree"];
// for (let color of colors) console.log(color);

//****************************/

// ***** Exercise 1 ********

// v1

// // function max(a, b) {
// //   return a > b ? a : b;
// // }
// // let number = max(4, 7);
// // console.log(number);

// v2

// let number = max(9, 7);
// console.log(number);

// function max(a, b) {
//   if (a > b) return a;
//   else return b;
// }

//******* EXercise 2 *******/
// true or false
// function isLandscape(width, height) {
//   return width > height;
// }

// console.log(isLandscape(7, 10));

//******* EXercise 3 *******/

// const output = fizzBuzz(15);
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== "number") return NaN;

//   if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

//   if (input % 3 === 0) return "Fizz";

//   if (input % 5 === 0) return "Buzz";
//   else return input;
// }

//******* EXercise 4 *******/

// *****MY*****

// speedCheck(119);

// function speedCheck(speed) {
//   const limit = 70;
//   const pointPerKilometer = 5;
//   const points = Math.floor((speed - limit) / pointPerKilometer);

//   if (speed <= 70 || points === 0) console.log("ok");
//   else if (points >= 10) console.log("Suspended");
//   else console.log(points);
// }

// ******MOSH******

// checkspeed(74);

// function checkspeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed < speedLimit + kmPerPoint) {
//     console.log("OK");
//     return;
//   }

//   const points = Math.floor((speed - speedLimit) / kmPerPoint);
//   if (points >= 12) console.log("License suspended");
//   else console.log("Points", points);
// }

//******* EXercise 5 *******/

// showNumbers(10);

// // function showNumbers(limit) {
// //   for (let i = 0; i <= limit; i++) {
// //     if (i % 2 === 0) console.log(i, "EVEN");
// //     else console.log(i, "ODD");
// //   }
// // }

// // ******** Optionally*******
// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     const message = i % 2 ? "EVEN" : "ODD";
//     console.log(i, "message");
//   }
// }

//******* EXercise 6 *******/

// const array = [1, 2, true, NaN, null, 8];

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) if (value) count++;
//   return count;
// }

// console.log(countTruthy(array));

//******* EXercise 7 *******/

// const movie = {
//   title: "a",
//   releaseYear: 2019,
//   rating: 4.5,
//   director: "b",
// };

// showProperties(movie);

// function showProperties(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") console.log(key, obj[key]);
//   }
// }

//******* EXercise 8 Sum of Multiples  *******/

// console.log(sum(10));

// function sum(limit) {
//   let sum = 0;

//   for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

//   return sum;
// }

//******* EXercise 9 *******/ Avarage grade

// const marks = [50, 50, 100];

// // 1-59: F
// // 60-69: D
// // 70-79: C
// // 80-89: B
// // 90-100: A

// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//   const average = calculateAverage(marks);

//   if (average < 60) return "F";
//   else if (average < 70) return "D";
//   else if (average < 80) return "C";
//   else if (average < 90) return "B";
//   return "A";
// }

// function calculateAverage(array) {
//   let sum = 0;

//   for (let value of array) sum += value;
//   return sum / array.length;
// }

//******* EXercise 10 *******/ Stars

// showStars(1);

// My solution (also works)
// function showStars(rows) {
//   let stars = "";
//   for (i = 0; i <= row; i++) {
//     stars += "*";
//     if (i < row) console.log(stars);
//   }
// }

// Mosh solution - nested loop

// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (i = 0; i < row; i++) pattern += "*";
//     console.log(pattern);
//   }
// }

//******* EXercise 11 *******/ Prime numbers

// showPrimes(27);

// one fuction

// function showPrimes(limit) {
//   for (number = 2; number <= limit; number++) {
//     let isPrime = true;
//     for (factor = 2; factor < number; factor++) {
//       if (number % factor === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) console.log(number);
//   }
// }

// two functions for each job

// function showPrimes(limit) {
//   for (number = 2; number <= limit; number++)
//     if (isPrime(number)) console.log(number);
// }

// function isPrime(number) {
//   for (factor = 2; factor < number; factor++)
//     if (number % factor === 0) return false;
//   return true;
// }
