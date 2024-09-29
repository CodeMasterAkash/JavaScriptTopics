function sum(...numbers) {
    return numbers.reduceRight((acc, curr) => acc + curr, 0);
}
console.log(sum(2, 5, 6, 8, 5));

//array destructuring
const[a,b,...rest]=[2,4,6,8,0,1];
console.log(rest);
// console.log(reverse);