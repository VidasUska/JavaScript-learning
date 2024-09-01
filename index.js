//**************** 1 ***********// Ojectliterally syntax

//Object-oriented programing OOP

// const circus = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true,
//   draw: function () {
//     console.log("draw");
//   },
// };

// circus.draw();
// If function is an part of the object we call it - Method (method of object)

//**************** 2 ***********// Factory functions

// Take OOP from above

// function createCircle(radius, lok) {
//   return {
//     radius,
//     lok,
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// const circle2 = createCircle(10, "ki");
// console.log(circle2);

// const circle1 = createCircle(7, 8);
// console.log(circle1);

//****************  3 ***********// Constructor function

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(1);
// console.log(circle);

//my test~~~~~~~

// function Circle(radius, location) {
//   this.radius = radius;
//   this.location = location;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(6, "home");
// console.log(circle);

// ************ 4 *************//  Dynamic Nature of Objects

// const circle = {
//   radius: 1,
// };

// circle.color = "green";
// circle.draw = function () {};

// delete circle.radius;
// delete circle.draw;

// // Also const cannot be reasigned to new objet: circle = {} - like all constants

// console.log(circle);

//***************** 5 **************/ Constructor Property

//***************** 6 *************/ Functions are Objects

// const Circle1 = new Function(
//   "radius",
//   `
//   this.radius = radius;
//   this.draw = function() {
//  console.log('testtt')
//   }`
// );

// // const circle = new Circle1(41);

// // console.log(circle);

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);

// const circle = new Circle(1);

// console.log(circle);

//*********** 7 ************//   Value vs Reference Types

//*********** 8 ************//   Enumerating Properties of an Object

// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };

// for (let key in circle) console.log(key, circle[key]);

// for (let key of Object.keys(circle)) console.log(key);

// for (let entry of Object.entries(circle)) console.log(entry);

// if ("radius" in circle) console.log("yes");  // to see if given object has property or mrthod.

//************ 9 **************//  Cloning an Object

// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };

// const another = {};
// for (let key in circle) another[key] = circle[key];  // old method.

// const another = Object.assign({ color: "green" }, circle);   // Object.assign copies properties from one or more source object in to a target object we can used clone or combine into single obj

// const another = { ...circle };  // Spread operator takes properties and place here

// console.log(another);

// console.log(circle);

//************** 10 ****************//   Garbage Collection - will automaticly deallocate memory

//************** 11  ***************// Math.  javascript Math documentation in internet

//************* 12 ****************//  String. in internet - Javascript string documentations

// const message = 'hi'; // String promitive

// const another = new String('hi'); // Object

// const message = 'This is my \n first message';

//************* 13 **************//   Template Literals.

// const message = "This is my\n first message";
// console.log(message);

// //************* 14  **************//    Date. Built in object in String (javascript data - internet)

// const now = new Date();    // now.toISOString() // now.toDateString()

// const date1 = new Date("May 11 2018 09:00");

// const date2 = new Date(2018, 4, 11, 9);

//***************** 15 Exercise 1 Address Object ********//

// let address = {
//   street: 1,
//   city: "Kaunas",
//   zipCode: "FF123",
// };

// // for (let key in address) console.log(key, address[key]);
// function showAddress() {
//   for (let key in address) console.log(key, address[key]);
// }

// showAddress(address);

//************* 16- Exercise 2- Factory and Constructor Functions **************//

// //------ Factoty f ------//

// function showAddress(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode, // if key and value the same we can drop the value. (use only zipCode)
//   };
// }

// let address1 = showAddress("a", "b", "c");

// // //--------- Constructor f --------//

// function ShowAddress(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }

// let address2 = new ShowAddress("a", "b", "c");

// //************** 17- Exercise 3- Object Equality**********//

// // Refer to funcion in above.

// function areEqual(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode
//   );
// }

// function areSame(address1, address2) {
//   return address1 === address2;
// }

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));

//************* 18- Exercise 4- Blog Post Object ***********//

// let post = {
//   title: "Amazing Post",
//   body: "This is test body",
//   views: 8,
//   comments: [
//     { author: "Vidas", body: "Comment body" },
//     { author: "John", body: "Second body" },
//   ],
//   isLive: true,
// };

// console.log(post);

//************** 19- Exercise 5- Constructor Functions **********//

//-------- ready to post, so views, comments are npt included, isLive - false

// function Post(title, body, author) {
//   (this.title = title),
//     (this.body = body),
//     (this.author = author),
//     (this.views = 0),
//     (this.comments = []),
//     (this.isLive = false);
// }

// // let poster = new Post("Amazing Post", "This is test body", "Vidas");
// // console.log(poster);

// //*********** 20- Exercise 6- Price Range Object ********//

let priceRange = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
];

olololololo;
