// JavaScript program to illustrate infinite loop
// Infinite loop because condition is not false
// condition should have been i>0.
for (let i = 5; i != 0; i += 2) {
    console.log(i);
}

let x = 5;
// Infinite loop because update statement
// is not provided
while (x == 5) {
    console.log("In the loop");
}
