// Number one way of event listener
const btn = document.getElementById("btn");
function changeBgColor() {
    document.body.style.backgroundColor = "Green";
}


// number two way of event listener
const changeBgColor2 = document.getElementById("btn2");
changeBgColor2.onclick = function yelloColor() {
    document.body.style.backgroundColor = "Yellow";
}

// number three way of event listener
const changeBgColor3 = document.getElementById("btn3");

changeBgColor3.onclick = redColor;
function redColor() {
    document.body.style.backgroundColor = "Red";
}