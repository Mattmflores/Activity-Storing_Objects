let classroom = {
    name: "Intro to JavaScript",
    teacher: {
      name: "Mr J.",
    },
    students: [
      {
        id: 11211,
        firstName: "Joe",
        lastName: "Duggins",
        assignmentGrades: [
          {
            assignmentId: 101,
            score: 5
          },
          {
            assignmentId: 102,
            score: 8
          },
          {
            assignmentId: 103,
            score: 6
          },
          {
            assignmentId: 104,
            score: 27
          }
        ]
      },
      {
        id: 11512,
        firstName: "Sarah",
        lastName: "Crate",
        assignmentGrades: [
          {
            assignmentId: 101,
            score: 3
          },
          {
            assignmentId: 102,
            score: 5
          },
          {
            assignmentId: 103,
            score: 7
          },
          {
            assignmentId: 104,
            score: 20
          }
        ]
      }
    ],
    assignments: [
      {
        id: 101,
        name: "Intro",
        pointsPossible: 5,
      },
      {
        id: 102,
        name: "Lesson 1",
        pointsPossible: 10,
      },
      {
        id: 103,
        name: "Lesson 2",
        pointsPossible: 10,
      },
      {
        id: 104,
        name: "Final",
        pointsPossible: 30,
      }
    ]
  };

// Problem One
// Joe Duggins got a score of 8 on the assignment with id 102. Given this assignment id, 
// how would you find out the name and the total points possible for that assignment?
console.log("Problem One")

function getNameAndPoints(assignmentid){
    let name = ""
    let pointsPossible = ""
    for (let i = 0; i < classroom.assignments.length; i++){     // Create a loop that iterates though the array of assignments
        if (classroom.assignments[i].id===assignmentid){        // checking if the id property matches the given value 102.
            name = classroom.assignments[i].name                       // If it does, log the name and points possible properties of that index
            pointsPossible = classroom.assignments[i].pointsPossible
        }
    }
    return `${pointsPossible}-${name}`
}
console.log(getNameAndPoints(102))

// Problem Two
// How would you calculate the total points possible in the course?
console.log("Problem Two")

function calcPointsCourse(){
    let totalPoints = 0
    for (let i = 0; i < classroom.assignments.length; i++){                 // Iterate through the assignment array, add up all the values
        totalPoints += parseInt(classroom.assignments[i].pointsPossible)    // of the points possible, and assign it to a variable
    }
    return totalPoints
}
console.log(calcPointsCourse())

// Problem Three
// Given the student id 11512, how would you calculate the total score that 
// student has earned among all of their assignments? (The sum of all of their scores)
console.log("Problem Three")

function calcScoresOfStudent(studentid){
    let studentTotalScores = 0      // creat a variable to keep track of student grades
    for (let i = 0; i < classroom.students.length; i++){    // loop through array of students
        if (classroom.students[i].id===studentid){      // if student id matches...
            for (let j = 0; j < classroom.students[i].assignmentGrades.length; j++){        // use nested loop to iterate through grades then
                studentTotalScores += parseInt(classroom.students[i].assignmentGrades[j].score)//  add each grade to variable
            }
        }
    }
    return studentTotalScores
}
console.log(calcScoresOfStudent(11512))

// Problem Four
// Given a student id, how would you compute that student's grade percentage?

// Hint: A grade percentage is typically a number from 0 - 100. So this number would be the ratio
//  between the sum of all of the students scores divided by the total number of
// points possible. gradePercentage = sumOfStudentsPoints / totalPointsPossible

// For example, the grade percentage of Joe Duggins is 82. (5 + 8 + 6 + 27) / (5 + 10 + 10 + 30) 
// Write the algorithm on how you would compute the grade percentage given the data structure above.
console.log("Problem Four")

function calcGradePercent(studentid){
    let studentGrade = Math.round((calcScoresOfStudent(studentid) / calcPointsCourse()) *100)
    return studentGrade      // returns algorithm to calc grade rounded to nearest integer
}
console.log(calcGradePercent(11211)) //ex: Joe Duggins

// Problem Five
// How would you compute the average grade percentage of all the students in the class?
console.log("Problem Five")

function computeGradeAverageAll(classroom){  
    let totalGrade = 0 // Creat a variabe to keep track of Total Student Grade
    for (let i = 0; i < classroom.students.length; i++){            // loop through the array of students
        totalGrade += calcGradePercent(classroom.students[i].id)    // and add up each value of their grade to the totalGrade variable
    }
    let gradeAverageAll = Math.round(totalGrade / classroom.students.length) // grade average = Sum of grade of students divided by # of students
    return gradeAverageAll
}
console.log(computeGradeAverageAll(classroom))
