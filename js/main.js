const container = document.getElementById("container");
const character = document.getElementById("character");

const containerWidth = parseInt(window.getComputedStyle(container).width);
const containerHeight = parseInt(window.getComputedStyle(container).height);

const characterWidth = parseInt(window.getComputedStyle(character).width);

character.style.left = "0px";
character.style.top = "0px";
let moveRight = true;
let moveDown = true;

let requestId;

let directionFreq = (Math.random() * 500) + 100;

setInterval(changeDirection, directionFreq);

function changeDirection() {
    let rNX = Math.floor(Math.random() * 2);
    switch (rNX) {
        case 0:
            moveRight = true;
            break;
        case 1:
            moveRight = false;
            break;
    }
    let rNY = Math.floor(Math.random() * 2);
    switch (rNY) {
        case 0:
            moveDown = true;
            break;
        case 1:
            moveDown = false;
            break;
    }
}

requestAnimationFrame(updatePosition);

function updatePosition() {
    let speed = 5;
    let rNX = Math.random() * speed;
    let rNY = Math.random() * speed;
    
    let currentPosLeft = parseInt(character.style.left);
    let currentPosTop = parseInt(character.style.top);

    // Crash into walls:
    if (currentPosLeft + (characterWidth / 2) + rNX > containerWidth) {
        moveRight = false;
    } else if (currentPosLeft + (characterWidth / 2) - rNX < 0) {
        moveRight = true;
    }
    if (currentPosTop + (characterWidth / 2) + rNY > containerHeight) {
        moveDown = false;
    } else if (currentPosTop + (characterWidth / 2) - rNY < 0) {
        moveDown = true;
    }

    // Update position:
    let newPosLeft, newPosTop;
    switch (moveRight) {
        case true:
            newPosLeft = currentPosLeft + rNX;
            character.style.left = `${newPosLeft}px`;
            break;
        case false:
            newPosLeft = currentPosLeft - rNX;
            character.style.left = `${newPosLeft}px`;
            break;
    }
    switch (moveDown) {
        case true:
            newPosTop = currentPosTop + rNY;
            character.style.top = `${newPosTop}px`;
            break;
        case false:
            newPosTop = currentPosTop - rNY;
            character.style.top = `${newPosTop}px`;
            break;
    }
    
    // let insectPosX = currentPosLeft;
    // let insectPosY = currentPosTop;
    // document.addEventListener("click", function(e) {
    //     if (e.clientX < insectPosX + 60 && 
    //         e.clientX > insectPosX - 60 &&
    //         e.clientY < insectPosY + 60 && 
    //         e.clientY > insectPosY - 60) {
    //             cancelAnimationFrame(requestId);
    //     }

    //     //30px - 15 åt varje håll
    // })
    requestId = requestAnimationFrame(updatePosition);
}
character.addEventListener("click", function() {
    cancelAnimationFrame(requestId);
    window.alert("YEESSSS");
})