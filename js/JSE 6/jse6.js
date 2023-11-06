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