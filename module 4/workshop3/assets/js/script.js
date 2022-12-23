
let currentnumber = ""
let allow = false

function display(arg) {

if (arg !== "clear") {
if (isNaN(arg) == false) {
allow = true
currentnumber = currentnumber + arg
document.getElementById("result").value = currentnumber
} else if (isNaN(arg) == true && allow == true) {
currentnumber = currentnumber + arg
document.getElementById("result").value = currentnumber
allow = false
} else if (isNaN(arg) == true && allow == false) {
return
}

} else if (arg == "clear") {
currentnumber = ""
document.getElementById("result").value = currentnumber
allow = false
}
}

function calculate() {
document.getElementById("result").value = eval(currentnumber)
currentnumber = eval(currentnumber)
}

