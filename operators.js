// First Jscript code

// function square(number) {
//   return 1 + number;
// // }

// // console.log(square(2));

// // ctrl + /

// // x = 3;
// // ++x;

// // console.log(x++);

// // Strict Equality Operator (Type + Value)
// // console.log(1 === 1);

// //********//

// // // Lose Equality Operator
// // console.log(1 == "1");
// // console.log(true == "1");

// //********//

// // // Ternary Operator
// // let points = 110;
// // let type = points > 100 ? "Gold" : "silver";

// // console.log(type);

// //********//

// // Logical operator AND (&&), Returns TRUE is both operators TRUE

// // let highIncomes = true;
// // let goodCreditScore = true;
// // let eligibleForLoan = highIncomes && goodCreditScore;

// // console.log(eligibleForLoan);

// //********//

// // Logical operator OR (||), Returns TRUE if one of the operators is TRUE

// // let highIncomes = true;
// // let goodCreditScore = false;
// // let eligibleForLoan = highIncomes || goodCreditScore;

// // console.log(eligibleForLoan);

// //********//

// // Logical operator NOT (!)

// let highIncomes = true;
// let goodCreditScore = false;
// let eligibleForLoan = highIncomes || goodCreditScore;

// console.log("Eligible", eligibleForLoan);

// let applicationRefused = !eligibleForLoan;

// console.log("Application refuse", applicationRefused);

//*********************/

// Logical Operators with Non-booleans
// false || 'Vidas' - returns 'Vidas'
// false || "Vidas" || true - returns 'Vidas' (call short-circuit)

// let userColor = undefined;
// let defaultColor = "green";
// let selectedColor = userColor || defaultColor;
// console.log(selectedColor);

//************************/
// Excercise
let a = "red";
let b = "blue";
let c = a;
a = b;
b = c;

console.log(a);
console.log(b);
