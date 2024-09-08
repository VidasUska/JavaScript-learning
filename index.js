// ---------------------ARRAYS------------------------------//

//************* 2- Adding Elements **************//

// const numbers = [3, 4];

// // End - adds value (indexes) at the end of array
// numbers.push(5, 6);

// //Begining - adds values (indexes) at beginning of array
// numbers.unshift(1, 2);

// //Midle - adds values in the middle of array. 1st number: starting index, 2nd how many delete, the rest is what to add.
// numbers.splice(2, 0, 8, 8, 8);

// console.log(numbers);

//****************** 3- Finding Elements (Primitives) ************//

// const numbers = [1, 2, 3, 4, 1, 5, 3, 7];

// // we past element and it returns index of that element in the array, if not exist returns "-1"
// console.log(numbers.indexOf("a")); // returns '-1'

// console.log(numbers.indexOf(3)); // returns '2'

// // to find index from index. first numer elemnet, 2nd indext from where to find

// console.log(numbers.indexOf(3, 4)); // return '6'

// // lastIndex returs index of that elemnet

// console.log(numbers.lastIndexOf(1)); // returns '4'

// // if element exist in array

// console.log(numbers.indexOf(1) !== -1); // returns 'true' because it is not equal to '-1' (-1 means not exist)

// // new method exist element

// console.log(numbers.includes(1)); // returns 'true'

//********************** 4- Finding Elements (Reference Types) *****************//
// javascript array find in internet

// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];

// const found = courses.find(function (course) {
//   return course.name === "b";
// });

// console.log(found);

// Find index. (-1 if not exist. If exist shows index of first element of given criterion)

// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];

// const found = courses.findIndex(function (course) {
//   return course.name === "a";
// });

// console.log(found);

//----------------- 5- Arrow Functions -----------------//

// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];

// const found = courses.findIndex((course) => course.name === "a");

// console.log(found);

//**************** 6- Removing Elements ****************//

// at the end
// const numbers = [1, 2, 3, 4, 5, 6];

// const last = numbers.pop();

// console.log(numbers);
// console.log(last);

// // at the beginning

// const first = numbers.shift();
// console.log(numbers);
// console.log(first);

// // in the middle

// numbers.splice(1, 1);
// console.log(numbers);

//******************* 7- Emptying an Array ***********//

//---Option 1
// let numbers = [1, 2, 3, 4];
// let another = numbers;

// numbers = [];           // solution works if you do not have other multiple reference to this array
// console.log(numbers);
// console.log(another);

// //---Option 2
// let numbers = [1, 2, 3, 4];
// let another = numbers;
// numbers.length = 0;

// console.log(numbers);
// console.log(another);

// //---Option 3
// let numbers = [1, 2, 3, 4];
// let another = numbers;
// numbers.splice(0, numbers.length);

// console.log(numbers);
// console.log(another);

//---Option 3
let numbers = [1, 2, 3, 4];
let another = numbers;
while (numbers.length > 0) numbers.pop(); // not recommended if long array, will be performing cost, (you will call it millinion time if array has million objects)

console.log(numbers);
console.log(another);
