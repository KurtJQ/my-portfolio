function JSE3(){
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
}

function JSE4(){
    let input = prompt("What time is it?")

    function greetMe(time){
        time = time.toUpperCase()
        console.log(time);
        if(time == "MORNING"){
            alert("Good Morning!")
        }
        else if(time == "AFTERNOON"){
            alert("Good Afternoon!")
        }
        else if(time == "EVENING"){
            alert("Good Evening!")
        }
        else{
            alert("Good Day!")
        }
    }

    greetMe(input)
}

function JSE5(){
    let magicWord = "OPEN SESAME"

    function checkMagicWord(){
        let input = prompt("What is the Magic Word?")
        input = input.toUpperCase()

        if(input == magicWord){
            alert("You opened the magic program successfully!")
        }
        else{
            alert("Please try again")
            checkMagicWord()
        }
    }

    checkMagicWord()
}

function JSE6(){
    let input = prompt("What year is it?")
    input = parseInt(input)
    
    function checkCentury(year){
        if(year > 0 && year <= 2023){
            let century = Math.ceil(year/100)
            if (century % 10 == 1){
                return century + "st Century"
            }
            if (century % 10 == 2){
                return century + "nd Century"
            }
            if (century % 10 == 3){
                return century + "rd Century"
            }
            return century + "th Century"
        }
        else{
            return "Invalid Year has been inputted"
        }
    }
    
    alert(checkCentury(input))
}

function JSE7(){
    let hour = prompt("How many Hours?")
    hour = parseInt(hour)
    let minute = prompt("How many Minutes?")
    minute = parseInt(minute)
    let second = prompt("How many Seconds?")
    second = parseInt(second)
    
    function miliseconds(hours, minutes, seconds){
        let secondMS = seconds * 1000
        let minutesMS = (minutes * 60) * 1000
        let hoursMS = (hours * 3600) * 1000
    
        return secondMS + minutesMS + hoursMS + "ms"
    }
    
    alert(miliseconds(hour, minute, second))
}

function JSE8(){
    input = prompt("Enter Number to Convert (1-10)")
    input = parseInt(input)

    function numberToWord(input){
        if (typeof input === "string"){
            return "Invalid Input"
        }
        switch(input){
            case 1:
                return "One"
            case 2:
                return "Two"
            case 3:
                return "Three"
            case 4:
                return "Four"
            case 5:
                return "Five"
            case 6:
                return "Six"
            case 7:
                return "Seven"
            case 8:
                return "Eight"
            case 9:
                return "Nine"
            case 10:
                return "Ten"
            default:
                return "Out of Range"
        }
    }
    
    alert(input + " is " + numberToWord(input))
}

function JSE9(){
    input = prompt("Enter number to convert to Roman Numeral (1-10)")
    input = parseInt(input)

    function numberToRomanNumeral(input){
        if(typeof input == "string"){
            return "Invalid Input"
        }
    
        switch(input){
            case 1:
                return "I"
            case 2:
                return "II"
            case 3:
                return "III"
            case 4:
                return "IV"
            case 5:
                return "V"
            case 6:
                return "VI"
            case 7:
                return "VII"
            case 8:
                return "VIII"
            case 9:
                return "IX"
            case 10:
                return "X"
            default:
                return "Invalid Input"
        }
    }
    
    alert(input + " is " + numberToRomanNumeral(input))
}

function JSE10(){
    input = prompt("Enter the Day Names")

    function weekdayOrWeekend(input){
        input = input.toLowerCase()
    
        switch(input){
            case "monday":
                return "It is a Weekday"
            case "tuesday":
                return "It is a Weekday"
            case "wednesday":
                return "It is a Weekday"
            case "thursday":
                return "It is a Weekday"
            case "friday":
                return "It is a Weekday"
            case "saturday":
                return "It is a Weekend"
            case "sunday":
                return "It is a Weekend"
            default:
                return "Invalid Input"
        }
    }
    
    alert(weekdayOrWeekend(input))
}

function JSE11(){
    input = prompt("Enter Month Name")

    function season(month){
        switch(month.toLowerCase()){
            case "march":
            case "april":
            case "may":
                return "Spring"
            case "june":
            case "july":
            case "august":
                return "Summer"
            case "september":
            case "october":
            case "november":
                return "Fall"
            case "december":
            case "january":
            case "february":
                return "Winter"
            default:
                return "Invalid Input"
        }
    }

    alert(season(input))
}