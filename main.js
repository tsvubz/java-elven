
const myParagraph = document.getElementById("description");


const myButton = document.querySelector("button");


function addDescription() {
  myParagraph.textContent = "This is information about Terence Svubure a JavaScript Programmer";
}


myButton.onclick = addDescription;