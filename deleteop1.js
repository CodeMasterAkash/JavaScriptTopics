// Define an object with a non-configurable property
let obj = {
    name: "John"
};

Object.defineProperty(obj, 'age', {
    value: 30,
    configurable: true // Making 'age' property non-configurable
});

console.log(obj); // { name: 'John', age: 30 }

// Attempt to delete the non-configurable property 'age'
let result = delete obj.age;
console.log(result); // false, deletion fails

console.log(obj); // { name: 'John', age: 30 }
