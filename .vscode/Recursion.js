
let checkNumber = (number) => {

    // Two base case conditions.....
    if (number === 0) return (number + " is even");
    if (number === 1) return (number + " is odd");
    return checkNumber(number - 2);
}
console.log(checkNumber(5));
console.log(checkNumber(10));
console.log(checkNumber(13333));
