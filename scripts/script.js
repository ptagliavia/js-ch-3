/*
Script for JS3, script.js
By Pat Tagliavia
02/12/2022
*/

let errSpan = document.getElementById('userInputErr')
let outputDiv = document.getElementById('outDiv')
document.getElementById("inputButton").onclick = heeHaw;

function heeHaw() {
    outputDiv.innerHTML = "";
    errSpan.style.display = "none";

    let userInputNum = document.getElementById("userInput").value;

    if(userInputNum<1 || isNaN(userInputNum)) {
        alert('input not valid');
        errSpan.style.display = "block";
    }
    else {
        for (let num = 1; num <= userInputNum; num++) {

            if (num % 5 === 0 && num % 3 === 0) {
                appendHeeHaw("Hee Haw!");
            } else if (num % 3 === 0) {
                appendHeeHaw("Hee!");
            } else if (num % 5 === 0) {
                appendHeeHaw("Haw!");
            } else {
                appendHeeHaw(num);
            }
        }
    }
}

function appendHeeHaw(appendText) {
    let node = outputDiv;
    let br = document.createElement("br")
    node.append(appendText, br);
}
