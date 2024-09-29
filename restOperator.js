// rest with function and other arguments
function fun(a, b, ...c) {
    console.log(`${a} ${b}`); //Mukul Latiyan
    console.log(c);  //[ 'Lionel', 'Messi', 'Barcelona' ]
    console.log(c[0]); //Lionel
    console.log(c.length); //3
    console.log(c.indexOf('Lionel')); // 0
}
fun('Mukul', 'Latiyan', 'Lionel', 'Messi', 'Barcelona');
