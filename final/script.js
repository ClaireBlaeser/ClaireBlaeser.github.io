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
let arrowPosition = 0;
let arrowSpeed = 1;
let phoneNumber = [];

btnSpace.addEventListener("click", );
btnDel.addEventListener("click", );
btnBack.addEventListener("click", restart);
btnDone.addEventListener("click", function(){
    alert("Your phone number is: " + phoneNumber);
});


function arrowBackFourth() {
    if (done){
        return;
    }

    if (moveRight) {
        arrowPosition = arrowPosition + arrowSpeed;
        if (arrowPosition >= numbers.offsetWidth - arrow.offsetWidth) {
            arrowPosition = numbers.offsetWidth - arrow.offsetWidth;
            moveRight = false;
        }
    }
    else {
        arrowPosition = arrowPosition - arrowSpeed;
        if (arrowPosition <= 0) {
            arrowPosition = 0;
            moveRight = true;
        }
    }
}

function restart() {
    done = false;
    moveRight = true;
    arrowPosition = 0;
    arrowSpeed = 1;
    phoneNumber = [];
}