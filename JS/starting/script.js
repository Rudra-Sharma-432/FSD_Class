// data types
// total 8 data types

dataTypes = {
  // 8 primitive dataTypes
  "primitive": [Number, String, Boolean, BigInt, Symbol, undefined, null],

  // 1 non-primitive dataTypes
  "non-primitive": [Object]
}

console.log(dataTypes)


let firstName = "Rudra"
let lastName = "Sharma"

// this is example of concatenation 
console.log(firstName + lastName)
console.log(firstName + " " + lastName)
console.log(firstName, lastName)

console.log("====================")

let price = 28
let tax = 5
let msg = ' Total '

console.log(price + msg + tax)

// this will concatenate (because first was string)
console.log(msg + price + tax) 

// this will add because first was 'int' then concatenate because the 2nd was 'string'
// int + int => add and give int
// int + str => cconcatenate
console.log(price + tax + msg) 


