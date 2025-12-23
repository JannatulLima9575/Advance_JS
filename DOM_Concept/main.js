console.log("Hello DOM from JavaScript");
const heading = document.getElementsByTagName("h1");
console.log(heading);
heading[0].style.color = "Red";

const liCollection = document.getElementsByTagName("li");
for(const li of liCollection){
    console.log(li.innerText);
}

// getElementById and getElementsByClassName can also be used similarly.
// You can also manipulate the DOM elements as needed.
const popularHeading = document.getElementById("title2");
popularHeading.style.color = "Green";

const title2Text = document.getElementById("title2").innerText;
console.log(title2Text);
document.getElementById("title2").innerText = "Top DOM Methods Updated";


const ol = document.getElementById("append");
const li = document.createElement("li");
li.innerText = "appendChild";
ol.appendChild(li);
console.log(ol);
