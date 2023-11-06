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