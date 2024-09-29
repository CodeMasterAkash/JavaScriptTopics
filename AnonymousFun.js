function greets() {
    console.log('Hello,I am JS Coder!!!');
}
console.log("Before");
setTimeout(greets, 3000);
console.log('After');

console.log('before');
setTimeout(() => {
    console.log('I am anonymous!');
}, 4000);
console.log('after');

const mul = function (a, b) {
    return a * b;
}
console.log(mul(5, 9));
