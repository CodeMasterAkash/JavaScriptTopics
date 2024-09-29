const array = [1, 2, 3, 4, 5];
 
for (const item of array) {
    console.log(item);
}

//object Map using for...of loop
const map = new Map([
    ["name", "Akash"],
    ["age", 25],
    ["city", "Noida"]
]);

for ([key, value] of map) {
    console.log(`${key}: ${value}`);
}
