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
    }
}

console.log(numberToRomanNumeral(1))
console.log(numberToRomanNumeral(4))
console.log(numberToRomanNumeral(9))
console.log(numberToRomanNumeral(10))
console.log(numberToRomanNumeral("one"))