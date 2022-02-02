// Oppgave 1

const hideButton = document.getElementById("remove-btn");
hideButton.addEventListener("click", hideText);

function hideText() {
    document.getElementById("remove").style.display = "none";
};


// Oppgave 2

const changeButton = document.getElementById("change-btn");
changeButton.addEventListener("click", changeText);

function changeText() {
    document.getElementById("change").innerHTML = "Teksten er nå endret";
};


// Oppgave 3

const textInput = document.getElementById("input");
textInput.addEventListener("keyup", replaceText);

function replaceText() {
    const inputText = document.querySelector('input').value;
    document.getElementById("input-text").innerHTML = inputText;
}


// Oppgave 4


const myList = ["item one", "item two", "item three"];

const buttonPress = document.getElementById("write-list");
buttonPress.addEventListener("click", writeList);

function writeList() {
    myList.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        ul.appendChild(li);
      })
}



// Oppgave 5

const makeElement = document.getElementById("create")
makeElement.addEventListener("click", produceElement);

var htmlType = document.getElementById("select").value;

var elementType = document.getElementById("select");
elementType.addEventListener('click', function(event) { 
    htmlType = event.target.value;
}) 

function produceElement() {
    const writtenText = document.getElementById("text").value;
    const finishedText = document.createElement(htmlType);
    finishedText.innerHTML = writtenText;
    placeholder.appendChild(finishedText);
}


// Oppgave 6

const removeBtn = document.getElementById("remove-li");
removeBtn.addEventListener("click", removeList);

const children = document.getElementById("list");

function removeList() {
    children.removeChild(children.firstChild)
}


// Oppgave 7

var characterAmount = "0";

const letterLimit = document.getElementById("name");
letterLimit.addEventListener("keypress", styleChanger);

const button = document.getElementById("order");

function styleChanger(){
    characterAmount++;
    if (characterAmount >= 5) {
        button.disabled = true;
        button.style.border = "solid red";
    }
}


// Oppgave 8

const borderButton = document.getElementById("color");
borderButton.addEventListener("click", addBorder);

var listItems = document.querySelectorAll('.children li');

function addBorder() {
   listItems[0].style.border = "solid green";
   listItems[2].style.border = "solid green";
   listItems[4].style.border = "solid green";
   listItems[1].style.border = "solid pink";
   listItems[3].style.border = "solid pink";
}
