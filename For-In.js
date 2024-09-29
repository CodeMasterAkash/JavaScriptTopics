let myObj = { a: 2, b: 4, c: 6 };
for (let key in myObj) {
    console.log(key, myObj[key]);
}

let obj = { x: 'Akash', y: 4 + 8, z: null }
for (var key in obj) {
    console.log(key, obj[key]);
}
