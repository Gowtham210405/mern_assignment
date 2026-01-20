const courses = ["javascript", "react", "node", "mongodb", "express"];

//filter()
const longCourses = courses.filter(course => course.length > 5);
console.log(longCourses);

//map()
const upperCourses = courses.map(course => course.toUpperCase());
console.log(upperCourses);

//reduce()
const courseString = upperCourses.reduce(
    (result, course) => result + " | " + course
);
console.log(courseString);

//find()
const foundReact = courses.find(course => course === "react");
console.log(foundReact);

//findIndex()
const nodeIndex = courses.findIndex(course => course === "node");
console.log(nodeIndex);
