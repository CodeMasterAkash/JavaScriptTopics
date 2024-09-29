function step1(callback) {
    setTimeout(() => {
        console.log('Step 1 is called!');
        callback();
    }, 2000)
}

function step2(callback) {
    setTimeout(() => {
        console.log('Step 2 is called!');
        callback();
    }, 1000)
}

function step3(callback) {
    setTimeout(() => {
        console.log('Step 3 is called!');
        callback();
    }, 500);
}

step1(() => {
    step2(() => {
        step3(() => {
            setTimeout(() => {
                console.log('All steps are completed');
            }, 400);

        });
    });
});