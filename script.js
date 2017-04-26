// Lecture: let and const


// // ES5
// var name5 = 'Jane Smith';
// var age = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// // ES6 const variables creates an immutable binding and will produce error
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);


// // ES5 variables are function scoped
// function driversLicense5(passedTest) {
//   console.log(firstName);
//   if (passedTest) {
//     var firstName = 'John';
//     var yearOfBirth = 1990;
//   }
//
//   console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
//
// }
//
// driversLicense5(true);


// // ES6 variables are blocked scoped. Can only use variable after declaring and defining.
// function driversLicense6(passedTest) {
//   console.log(firstName)
//   let firstName = 'John';
//   const yearOfBirth = 1990;
//
//   if (passedTest) {
//     firstName = 'John';
//   }
//
//   console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
// }
//
// driversLicense6(true);


// // ES5 - value of i, due to function scoped
// var i = 23;
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);
//
// // ES6 - value of i, due to block scoped
// let j = 23;
// for (let j = 0; j < 5; j++) {
//   console.log(i);
// }
// console.log(i);



/////////////////////////////////////////////
// Lecture: Blocks and IIFEs

// // ES6
// {
//   const a = 1;
//   let b = 2;
//   var c = 3;
// }
//
// console.log(a + b);
// console.log(c);
//
//
// // ES5
// (function() {
//   var c = 3;
// }());
//
// console.log(c);



///////////////////////////////////////////////
// Lecture: Strings

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;
//
// function calcAge(year) {
//   return 2016 - year;
// }

// ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J'));
// console.log(n.endsWith('th'));
// console.log(n.includes('oh'));
// console.log(`${firstName} `.repeat(5));



/////////////////////////////////////////////////
// Lecture: Arrow functions

// const years = [1990, 1965, 1982, 1937];
//
// // ES5
// var ages5 = years.map(function(el) {
//   return 2017 - el;
// });
// console.log(ages5);
//
// // ES6
// // return is implicit
// let ages6 = years.map(el => 2017 - el);
// console.log(ages6);
//
// // more than one parameter
// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2017 - el}.`);
// console.log(ages6);
//
// // return is explicit for more than one line
// ages6 = years.map((el, index) => {
//   const now = new Date().getFullYear();
//   const age = now - el;
//   return `Age element ${index + 1}: ${age}.`;
// });
// console.log(ages6);



///////////////////////////////////////////////
// Lecture: Arrow functions: lexical 'this' keyword

// // ES5
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//     // methods have access to 'this' keyword
//     var that = this;
//     document.querySelector('.green').addEventListener('click', function() {
//       var str = 'This is box number ' + that.position + ' and it is ' + that.color;
//       alert(str);
//     });
//     // document.querySelector('.green').addEventListener('click', function() {
//     //   var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//     //   alert(str);
//     // }.bind(this));
//   }
// }
// box5.clickMe();
//
//
// // ES6
// const box6 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//     // arrow functions do not have their own 'this' keyword
//     document.querySelector('.green').addEventListener('click', () => {
//       var str = `This is box number ${this.position} and it is ${this.color}`;
//       alert(str);
//     });
//   }
// }
// box6.clickMe();


// // Be careful using arrow functions on a method.
// const box66 = {
//   color: 'green',
//   position: 1,
//   clickMe: () => {
//
//     document.querySelector('.green').addEventListener('click', () => {
//       var str = `This is box number ${this.position} and it is ${this.color}`;
//       alert(str);
//     });
//   }
// }
// box66.clickMe();


// function Person(name) {
//   this.name = name;
// }
//
// // ES5
// Person.prototype.myFriends5 = function(friends) {
//
//   var arr = friends.map(function(el) {
//     return this.name + ' is friends with ' + el;
//   }.bind(this));
//
//   console.log(arr);
// }
//
// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);
//
//
// // ES6
// Person.prototype.myFriends6 = function(friends) {
//
//   var arr = friends.map(el => `${this.name} is friends with ${el}`);
//
//   console.log(arr);
// }
//
// new Person('John').myFriends6(friends);



////////////////////////////////////////////
// Lecture: Destructuring

// // ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john [1];
//
//
// // ES6
// const [name2, age2] = ['John', 26];
// console.log(name2);
// console.log(age2);
//
// const obj = {
//   firstName: 'John',
//   lastName: 'Smith'
// };
//
// const {firstName, lastName} = obj;
// console.log(firstName);
// console.log(lastName);
//
// // if you don't want variable names to match key names
// const {firstName: a, lastName: b} = obj;
// console.log(a);
// console.log(b);
//
//
// function calcAgeRetirement(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }
//
// const [age3, retirement] = calcAgeRetirement(1990);
// console.log(age3);
// console.log(retirement);



////////////////////////////////////////////////
// Lecture: Arrays

// const boxes = document.querySelectorAll('.box');
//
// // ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
//   cur.style.backgroundColor = 'dodgerblue';
// });
//
// // ES6
// // Create an new array instance from a node list.
// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// // ES5
// for (var i = 0; i < boxesArr5.length; i++) {
//
//   if (boxesArr5[i].className === 'box blue') {
//     continue;
//   }
//
//   boxesArr5[i].textContent = 'I changed to blue!';
//
// }

// // ES6
// // Loop over an array
// // Can can use const instead of let, if you don't reassign the variable inside the block
// for (const cur of boxesArr6) {
//   if (cur.className.includes('blue')) {
//     break;
//   }
//   cur.textContent = 'I changed to blue!';
// }
//
//
// // ES5
// var ages = [12, 17, 8, 21, 14, 11];
//
// var full = ages.map(function(cur) {
//   return cur >= 18;
// });
// console.log(full);
//
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);
//
// //ES6
// // To find index of element in an array
// console.log(ages.findIndex(cur => cur >= 18));
//
// // To find value of element in an array
// console.log(ages.find(cur => cur >= 18));



////////////////////////////////////////////////
// Lecture: Spread operator

// function addFourAges(a, b, c, d) {
//   return a + b + c + d;
// };
//
// var sum1 = addFourAges(18, 30, 12, 21);
//
// console.log(sum1);
//
// // ES5
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);
//
// // ES6
// // expand elements of an array or node list (iterable object)
// const sum3 = addFourAges(...ages);
// console.log(sum3);
//
//
// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// const bigFamily = [...familySmith, 'Lily', ...familyMiller];
// console.log(bigFamily);
//
// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];
//
// Array.from(all).forEach(cur => cur.style.color = 'purple');
// // all.forEach(cur => cur.style.color = 'purple');



//////////////////////////////////////////////////////
// Lecture: Rest parameters

// // ES5
// function isFullAge5() {
//   // console.log(arguments);
//   var argsArr = Array.prototype.slice.call(arguments);
//
//   argsArr.forEach(function(cur) {
//     console.log((2016 - cur) >= 18);
//   });
// }
//
// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);
//
//
// // ES6
// // used in function declaration to receive arbitrary number of parameters
// function isFullAge6(...years) {
//   years.forEach(cur => console.log((2016 - cur) >= 18));
// }
//
// isFullAge6(1990, 1999, 1965, 2016, 1987);



// ES5
function isFullAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1);
  
  argsArr.forEach(function(cur) {
    console.log((2016 - cur) >= limit);
  });
}

// isFullAge5(16, 1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);


// ES6
// used in function declaration to receive arbitrary number of parameters
function isFullAge6(limit, ...years) {
  years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);





















