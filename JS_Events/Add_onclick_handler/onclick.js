const button = document.getElementById('myButton');
const bgDiv = document.getElementById('bg');
const clickedButton = document.getElementById('click');
const listDiv = document.getElementById('list');
const fruitsName = document.getElementById('myButton2');

function changeBackgroundColor() {
    bgDiv.style.backgroundColor = 'Green'
}

function handleClick() {
    alert('Button was clicked!');
    const newItem = document.createElement('li');
    listDiv.appendChild(newItem);
    newItem.textContent = fruitsName.value;
    fruitsName.value = '';
}