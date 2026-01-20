const marks = [78, 92, 35, 88, 40, 67];

//filter()
const passedMarks = marks.filter(mark => mark >= 40);
console.log(passedMarks);

//map()
const graceMarks = marks.map(mark => mark + 5);
console.log(graceMarks);

//reduce()
const highestMark = marks.reduce(
    (max, mark) => mark > max ? mark : max
);
console.log(highestMark);

//find()
const firstFail = marks.find(mark => mark < 40);
console.log(firstFail);

//findIndex()
const indexOf92 = marks.findIndex(mark => mark === 92);
console.log(indexOf92);
