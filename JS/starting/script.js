"use strict";

// data types
// total 8 data types

const dataTypes = {
  // 8 primitive dataTypes
  "primitive": [Number, String, Boolean, BigInt, Symbol, undefined, null],

  // 1 non-primitive dataTypes
  "non-primitive": [Object]
};

console.log(dataTypes);


let firstName = "Rudra";
let lastName = "Sharma";

// this is example of concatenation 
console.log(firstName + lastName); // RudraSharma
console.log(firstName + " " + lastName); // Rudra Sharma
console.log(firstName, lastName); // Rudra Sharma

console.log("====================");

let price = 28;
let tax = 5;
let msg = ' Total ';

console.log(price + msg + tax); // `28 Total 5`

// this will concatenate (because first was string)
console.log(msg + price + tax); // ` Total 285`

// this will add because first was 'int' then concatenate because the 2nd was 'string'
// int + int => add and give int
// int + str => concatenate
console.log(price + tax + msg); // `34 Total `


console.log(price + tax + msg + tax + price); // `34 Total 528`


console.log("=================");

let name = "rudra";
console.log(`name : ${name}`); // `name : rudra`
let Name = 'rudra';
console.log(`Name : ${Name}`); // `Name : rudra`

console.log(`firstName : ${firstName}`);


console.log("=================");


let number = 20;
console.log(`number : ${number}`);

// this will give error
// let Number = 30;
// console.log(`Number : ${Number}`);

console.log("=================")


// conditional
// == and ===

const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log("=======");

console.log(num == str); // true
console.log(num == obj); // ture
console.log(obj == str); // true

console.log("=======");

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

console.log("=======");

let zeroP = +0;
let zeroN = -0;
console.log( zeroP == zeroN);  // true
console.log( zeroP === zeroN); // true

console.log("=======");

console.log([NaN].indexOf(NaN)); // -1
switch (NaN) {
  case NaN:
    console.log("Surprise"); // Nothing is logged
}
console.log(NaN == NaN) // false

// if a statement is false in == will === also give false in js
// false in '==' -> false in '==='

/*
   "A" == true -> false
=> "A" == 1 
=> "A" == "1"
=> false
*/

