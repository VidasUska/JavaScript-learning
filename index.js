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

const numbers = [1, 2, 3, 4, 1, 5, 3, 7];

// we past element and it returns index of that element in the array, if not exist returns "-1"
console.log(numbers.indexOf("a")); // returns '-1'

console.log(numbers.indexOf(3)); // returns '2'

// to find index from index. first numer elemnet, 2nd indext from where to find

console.log(numbers.indexOf(3, 4)); // return '6'

// lastIndex returs index of that elemnet

console.log(numbers.lastIndexOf(1)); // returns '4'

// if element exist in array

console.log(numbers.indexOf(1) !== -1); // returns 'true' because it is not equal to '-1' (-1 means not exist)

// new method exist element

console.log(numbers.includes(1)); // returns 'true'
