let petName = 'Rocky' // Global variable
myFunction()

function myFunction() {
    fruit = 'apple'; // Considered global
    console.log(typeof petName +
        '- ' +
        'My pet name is ' +
        petName)
}

console.log(typeof petName +'- ' +
    'My pet name is ' +
    petName +
    ' \nFruit name is ' +
    fruit);
