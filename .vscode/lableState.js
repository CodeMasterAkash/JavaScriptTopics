let sum = 0, a = 1;

// Label for outer loop 
outerloop: while (true) {
    a = 1;

    // Label for inner loop 
    while (a < 3) {
        sum += a;
        if (sum > 12) {

            // Break outer loop from inner loop 
            break outerloop;
        }
        console.log("sum = " + sum);
        a++;
    }
}
