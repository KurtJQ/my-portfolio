var firstGrade = prompt("Enter your First Grade")
var secondGrade = prompt("Enter your Second Grade")
var thirdGrade = prompt("Enter your Third Grade")
var fourthGrade = prompt("Enter your Fourth Grade")

firstGrade = parseInt(firstGrade)
secondGrade = parseInt(secondGrade)
thirdGrade = parseInt(thirdGrade)
fourthGrade = parseInt(fourthGrade)

function averageGrade(grade1, grade2, grade3, grade4){
    let avgGrade = (grade1 + grade2 + grade3 + grade4) / 4
    console.log(firstGrade)
    console.log(secondGrade);
    console.log(thirdGrade);
    console.log(fourthGrade);
    console.log(avgGrade)
    if (avgGrade < 75){
        alert("Average: " + avgGrade + "\nYou Failed")
    }
    else if (avgGrade >= 75 && avgGrade <= 100){
        alert("Average: " + avgGrade + "\nYou Passed!")
    }
    else if (avgGrade > 100){
        alert("Invalid Input")
    }
}

averageGrade(firstGrade, secondGrade, thirdGrade, fourthGrade)