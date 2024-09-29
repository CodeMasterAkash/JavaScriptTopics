let obj = {
    name: "John"
};

Object.defineProperty(obj, 'age', {
    value: 30,
    configurable: false // Making 'age' property non-configurable
});

console.log(obj);