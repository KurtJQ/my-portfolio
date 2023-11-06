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
    }
}

console.log(season("October"));
