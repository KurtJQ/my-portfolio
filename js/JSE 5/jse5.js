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