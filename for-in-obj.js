const courses = {
    // Declaring a courses object
    firstCourse: "C++ STL",
    secondCourse: "DSA Self Paced",
    thirdCourse: "CS Core Subjects"
};

// Creating a new empty object with
// prototype set to courses object
const student1 = Object.create(courses);

// Defining student1 properties and methods
student1.id = 123;
student1.firstName = "Prakhar";
student1.showEnrolledCourses = function () {
    console.log(courses);
}

// Iterating over all properties of
// student1 object
for (let prop in student1) {
    console.log(prop + " -> "
        + student1[prop]);
}
