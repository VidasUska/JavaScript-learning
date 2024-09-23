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

// // to find index from index. first number elemnet, 2nd indext from where to find

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
// let numbers = [1, 2, 3, 4];
// let another = numbers;
// while (numbers.length > 0) numbers.pop(); // not recommended if long array, will be performing cost, (you will call it millinion time if array has million objects)

// console.log(numbers);
// console.log(another);

//******************** 8- Combining and Slicing Arrays **********//

// primitive values

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combine = first.concat(second);
// first[0] = 10;

// const slice = combine.slice(2, 4);

// console.log(combine);
// console.log(slice);

// //with (objects (type reference) are not copied himself, type reference are copied) if premetive - copied by value

// const first = [{ id: 1 }];
// const second = [4, 5, 6];
// first[0].id = 10;

// const combine = first.concat(second);

// const slice = combine.slice();

// console.log(combine);
// console.log(slice);

//**************** 9- The Spread Operator *************//

// const first = [{ id: 1 }];
// const second = [4, 5, 6];

// const combine = [...first, "a", ...second, "b"];

// const copy = [...combine]; // instead of: const copy = combine.slice();

// console.log(combine);
// console.log(copy);

//********************* 10- Iterating an Array *************//

// const numbers = [1, 2, 3];

// // for (let number in numbers) console.log(number);

// // // or

// numbers.forEach((number) => console.log(number));

// // this callback f can take secondary parameter index

// numbers.forEach((number, index) => console.log(number, index));

//********************* 11- Joining Arrays ***************//

// const numbers = [1, 2, 3];
// const joined = numbers.join(",");

// console.log(joined);

// const message = "This is my first message";
// const parts = message.split(" ");

// console.log(parts);

// const combined = parts.join("-");

// console.log(combined);

//********************** 12- Sorting Arrays ***************//

//when you have numbers and strings in the array (not an objects)
// const numbers = [2, 3, 1];

// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

//when you have objects in array need extra function

// const courses = [
//   { id: 1, name: "Node.js" },
//   { id: 2, name: "JavaScript" },
// ];

// courses.sort(function (a, b) {
//   if (a.name < b.name) return -1;
//   if (a.name > b.name) return 1;
// });

//it is letters sensitive, J comes first to N, but j comes after N.
//We can set letter to upper all lower cases or upper cases

// const courses = [
//   { id: 1, name: "Node.js" },
//   { id: 2, name: "javaScript" },
// ];

// courses.sort(function (a, b) {
//   const nameA = a.name.toUpperCase();
//   const nameB = b.name.toUpperCase();

//   if (nameA < nameB) return -1;
//   if (nameA > nameB) return 1;
// });

// console.log(courses);

//******************** 13- Testing the Elements of an Array *************//

// //"every" - If evry element match givent criterior, then true (at least one not, returns false)
// const numbers = [1, , -6, 2, 3];

// const allPositive = numbers.every(function (value) {
//   return value >= 0;
// });

// console.log(allPositive);

//"some" - enough one element to match given criterior
// const numbers = [1, , -6, 2, 3];

// const atLeastOnePossitive = numbers.some(function (value) {
//   return value >= 0;
// });

// console.log(atLeastOnePossitive);

//*********************** 14- Filtering an Array *************//

//example filtering open restorants
// const numbers = [1, , -6, 2, 3];

// const filtered = numbers.filter((n) => n >= 0);

// console.log(filtered);

//********************** 15- Mapping an Array ******************//

// const numbers = [1, , -6, 2, 3];

// const filtered = numbers.filter((n) => n >= 0);

// const item = filtered.map((n) => "<li>" + n + "</li>"); // returns: ['<li>1</li>', '<li>2</li>', '<li>3</li>']

// const html = "<ul>" + item.join("") + "</ul>"; // returns: <ul><li>1</li><li>2</li><li>3</li></ul>

// console.log(html);

//with object

// const numbers = [1, , -6, 2, 3];

// const filtered = numbers.filter((n) => n >= 0);

// const item = filtered.map((n) => ({ value: n }));

// console.log(item);

// //chaining!!!!!! // get rid off "const filtered"

// const numbers = [1, -6, 2, 3];

// const item = numbers
//   .filter((n) => n >= 0)
//   .map((n) => ({ value: n }))
//   .filter((obj) => obj.value > 1)
//   .map((obj) => obj.value); // returns: (2) [2, 3]

// console.log(item);

//************************** 16- Reducing an Array **************//

// example counting order items total
// const numbers = [1, -1, 2, 3];

// let sum = 0;

// for (let n of numbers) sum += n;

// console.log(sum);

// for simpler way use reduce method

// const numbers = [1, -1, 2, 3];

// const item = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(item);

//*************** 17- Exercise 1- Array from Range *************//

// const numbers = arrayFromRange(2, 9);

// console.log(numbers);

// function arrayFromRange(min, max) {
//   output = [];
//   for (let i = min; i <= max; i++) output.push(i);
//   return output;
// }

//***************** 18- Exercise 2- Includes **************//

// const numbers = [1, 2, 3, 4];

// console.log(includes(numbers, 4));

// function includes(array, searchElement) {
//   for (let element of array) if (element === searchElement) return true;
//   return false;
// }

//******************** 19- Exercise 3- Except ************//

const numbers = [1, 2, 3, 4, 1, 1, 2];

const output = except(numbers, [1, 2]);

console.log(output);

function except(array, exclude) {
  let output = [];
  for (let element of array)
    if (!exclude.includes(element)) output.push(element);
  return output;
}
