const page = document.getElementById("phone-display");
const numbers = document.getElementById("number-track");
const arrow = document.getElementById("arrow");
const popAction = document.getElementById("popup-actions");
const btnDone = document.getElementById("btn-done");
const btnBack = document.getElementById("btn-restart");
const btnSpace = document.getElementById("btn-space");
const btnDel = document.getElementById("btn-delete");

let done = false;
let moveRight = true;
let arrowPosition = 5;
let arrowSpeed = 1;
let phoneNumber = [];

setInterval(function() {
    if (done){
        return;
    }

    if (moveRight) {
        arrowPosition = arrowPosition + arrowSpeed;
        if (arrowPosition >= 95) {
            arrowPosition = 95;
            moveRight = false;
        }
    }
    else {
        arrowPosition = arrowPosition - arrowSpeed;
        if (arrowPosition <= 5) {
            arrowPosition = 5;
            moveRight = true;
        }
    }
    arrow.style.left = arrowPosition + "%";
    console.log(arrowPosition);
}, 50);

function restart() {
    done = false;
    moveRight = true;
    arrowPosition = 0;
    arrowSpeed = 1;
    phoneNumber = [];
}

function numAboveArrow(){
    let num = Math.floor(arrowPosition / 10);
    return num;
}

function addNumberAboveArrow(){
    let num = numAboveArrow();
    phoneNumber.push(num);
    updatePhoneNumberDisplay();
}

function removeNumberAboveArrow(){
    phoneNumber.pop();
    updatePhoneNumberDisplay();
}

function updatePhoneNumberDisplay(){
    let spaces = ["", "", "", "", "", "", "", "", "", ""];
    for (let i = 0; i < phoneNumber.length; i++) {
        spaces[i] = phoneNumber[i];
    }
    page.textContent = "("+spaces[0]+spaces[1]+spaces[2]+") "+spaces[3]+spaces[4]+spaces[5]+"-"+spaces[6]+spaces[7]+spaces[8]+spaces[9];
}

btnSpace.addEventListener("click", addNumberAboveArrow);
btnDel.addEventListener("click", removeNumberAboveArrow);
btnBack.addEventListener("click", restart);
btnDone.addEventListener("click", function(){
    alert("Your phone number is: " + phoneNumber);
});


updatePhoneNumberDisplay();

