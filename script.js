// Lecture: let and const


// ES5
var name5 = 'Jane Smith';
var age = 23;
name5 = 'Jane Miller';
// console.log(name5);

// // ES6 const variables creates an immutable binding and will produce error
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);


// ES5 variables are function scoped
function driversLicense5(passedTest) {
  // console.log(firstName);
  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1990;
  }
  
  // console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
  
}

driversLicense5(true);


// ES6 variables are blocked scoped. Can only use variable after declaring and defining.
function driversLicense6(passedTest) {
  // console.log(firstName)
  let firstName = 'John';
  const yearOfBirth = 1990;
  
  if (passedTest) {
    firstName = 'John';
  }
  
  // console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense6(true);


// ES5 - value of i, due to function scoped
var i = 23;
for (var i = 0; i < 5; i++) {
  // console.log(i);
}
// console.log(i);

// ES6 - value of i, due to block scoped
let j = 23;
for (let j = 0; j < 5; j++) {
  // console.log(i);
}
// console.log(i);



/////////////////////////////////////////////
// Lecture: Blocks and IIFEs

// ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}

// console.log(a + b);
// console.log(c);


// ES5
(function() {
  var c = 3;
}());

// console.log(c);



///////////////////////////////////////////////
// Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2016 - year;
}

// ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J'));
// console.log(n.endsWith('th'));
// console.log(n.includes('oh'));
// console.log(`${firstName} `.repeat(5));



/////////////////////////////////////////////////
// Lecture: Arrow functions

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
  return 2017 - el;
});
console.log(ages5);

// ES6
// return is implicit
let ages6 = years.map(el => 2017 - el);
console.log(ages6);

// more than one parameter
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2017 - el}.`);
console.log(ages6);

// return is explicit for more than one line
ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);


























