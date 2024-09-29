function greeting(name) {
    console.log('Hello Welcome to Callbacks, ' + name);
}

function userInput(callback) {
    var name = prompt('Please enter your name!');
    callback(name);
}

userInput(greeting);
console.log(typeof userInput);
