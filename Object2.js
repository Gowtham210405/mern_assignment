const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

//Calculate total marks
const values = Object.values(marks);
const totalMarks = values.reduce((sum, mark) => sum + mark, 0);
console.log("Total Marks:", totalMarks);

//Calculate average marks
const averageMarks = totalMarks / values.length;
console.log("Average Marks:", averageMarks);

//Find the highest scoring subject
let highestSubject = "";
let highestMarks = 0;

for (let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks = marks[subject];
    highestSubject = subject;
  }
}

console.log(highestSubject);

//Add a new subject computer
marks.computer = 90;
console.log("Updated Marks:", marks);
