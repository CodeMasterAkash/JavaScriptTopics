// Define variables with different primitive data types
const num = 10;
const str = "Hello";
const bool = true;
const undef = undefined;
const nul = null;
const sym = Symbol("symbol");
const bigInt = 9007199254740991n;

// Use typeof operator to determine the data type
console.log(typeof num);   // Output: "number"
console.log(typeof str);   // Output: "string"
console.log(typeof bool);  // Output: "boolean"
console.log(typeof undef); // Output: "undefined"
console.log(typeof nul);   // Output: "object"(typeof null is an oddity, it returns "object")
console.log(typeof sym);   // Output: "symbol"
console.log(typeof bigInt); // Output: "bigint"
