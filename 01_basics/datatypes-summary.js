// Primitive

// 7 types of primitive values in JavaScript
// 1. Number ( integer, float, double, etc.)
// 2. String (For text, sequence of characters)
// 3. Boolean (true or false)
// 4. Null (empty value, nothing, no value)
// 5. Undefined (variable declared but not assigned a value)
// 6. Symbol (ES6) ( used to create unique identifiers for object properties)
// 7. BigInt (ES11) (for very large integers, beyond the safe integer limit of Number type)

const score = 100; // Number
const scoreValue = 100.5; // Number
const isLoggedIn = false;
const outsideTemp = null;
const userEmail = undefined;
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false
const bigNumber = 3456543576654356754n; // BigInt ( cuz i used n in it)

// Non-primitive (Reference) types in JavaScript

// 1. Object
// 2. Array
// 3. Function 

const heros = ["shaktiman", "naagraj", "doga"]; // Array
let myObj = {
    name: "shahzeb",
    age: 20,
    class: "1st year"};

    const myFunction = function()
    {console.log("Hello world")};

    console.log(typeof outsideTemp); // symbol ( null is also a primitive type but typeof null returns object, this is a bug in JS)
    console.log(typeof myObj); // object
    console.log(typeof heros); // object
    