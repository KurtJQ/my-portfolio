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