let student = {
    rollNo: 1202,
    name: "Akash",
    course: "MCA CS"
};

let num1 = 20;

let num2 = num1;
let student2 = student;

console.log(num2);
console.log(student2);

num1 = 15;
delete student.name;
console.log(num2);
console.log(student2);
