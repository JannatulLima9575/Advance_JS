console.log("Hello DOM from JavaScript");
const heading = document.getElementsByTagName("h1");
console.log(heading);
heading[0].style.color = "Red";

const liCollection = document.getElementsByTagName("li");
for(const li of liCollection){
    console.log(li.innerText);
}
    