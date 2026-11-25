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

// btnSpace.addEventListener("click", );
// btnDel.addEventListener("click", );
// btnBack.addEventListener("click", restart);
btnDone.addEventListener("click", function(){
    alert("Your phone number is: " + phoneNumber);
});


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
}

function removeNumberAboveArrow(){
    phoneNumber.pop();
}

