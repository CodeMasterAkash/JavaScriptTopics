function geekFunc() {
    let a = 10;
    try {
        console.log("Value of variable a is : " + a);
    }
    catch (e) {
        console.log("Error: " + e.description);
    }
}
geekFunc();
