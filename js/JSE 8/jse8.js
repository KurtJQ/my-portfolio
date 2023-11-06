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

console.log(numberToWord(1)) // One
console.log(numberToWord(10)) // Ten
console.log(numberToWord(11)) // Out of Range
console.log(numberToWord("one")) // Invalid Input