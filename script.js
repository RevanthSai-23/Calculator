let screen = document.getElementById("display")
let buttons = document.querySelectorAll("button")
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        if (buttonText == "X") {
            buttonText = "*"
            screen.value += buttonText
        } else if (buttonText == "=") {
            screen.value = eval(screen.value);
        } else if (buttonText == "C") {
            screen.value = ''
        } else {
            screen.value += buttonText
        }
    })
}