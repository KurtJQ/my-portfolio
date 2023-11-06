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

console.log(weekdayOrWeekend("Monday")) // It is a weekday.
console.log(weekdayOrWeekend('tuesday')) //  It is a weekday.
console.log(weekdayOrWeekend('SUNDAY')) // It is a weekend.
console.log(weekdayOrWeekend('Saturday')) // It is a weekend.
console.log(weekdayOrWeekend('today')) // Invalid Input
