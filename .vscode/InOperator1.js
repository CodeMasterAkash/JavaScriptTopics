// Illustration of in operator
const object = {
    val1: 'Geeksforgeeks',
    val2: 'Javascript',
    val3: 'operator',
    val4: 'in'
};

console.log('val1' in object);

delete object.val1;
console.log('val1' in object);

if ('val1' in object === false) {
    object.val1 = 'GEEKSFORGEEKS';
}

console.log(object.val1);
