function* innerGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

function* outerGenerator() {
    yield* innerGenerator();
}

const generator = outerGenerator();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
