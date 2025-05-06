//Game Parts
const character = document.getElementById("character");
const blocks = document.getElementsByClassName("block");
const scoreDisplay = document.querySelector(".score");
const gameOverDisplay = document.querySelector(".gameover");
const startGameButton = document.querySelector(".startgame")

let gameOver = false;
let animationSpeed = 5;
let score = 0;
let scoreInterval = 0;

function StartGame() {
    gameOver = false;
    gameOverDisplay.style.display = "none";
    score = 0;
    scoreInterval = 0;
    scoreDisplay.innerHTML = "Score: 0";
    animationSpeed = 5;
    startGameButton.style.display = "none";
    character.classList.add("animaterun");
    SetBlockSpeed();
}

function SetBlockSpeed() {
    for (let block of blocks) {
        block.style.animation = "block " + animationSpeed + "s infinite linear";
        let rect = block.getBoundingClientRect();
        if (rect.left >= 200) {
            block.style.animationDelay = (animationSpeed * 0.5) + "s";
        }
        console.log(block.style.animation);
    }
}

function Jump() {
    character.classList.remove("animaterun");
    let addedAnim = "";
    if (character.style.left == "0px" && character.classList.length == 0) {
        character.classList.add("animateright");
        character.style.left = "425px";
        character.style.transform = "rotate(-90deg) scaleX(1)"
        addedAnim = "animateright";
    }
    else if (character.classList.length == 0) {
        character.classList.add("animateleft");
        character.style.left = "0px";
        character.style.transform = "rotate(90deg) scaleX(-1)"
        addedAnim = "animateleft";
    }
    if (character.classList.contains(addedAnim)) {
        setTimeout(function () {
            character.classList.remove(addedAnim)
            character.classList.add("animaterun");
            UpdateScore();
        }, 1000);
    }
}

function UpdateScore() {
    score++;
    scoreInterval++;
    scoreDisplay.innerHTML = "Score: " + score;
    if (scoreInterval == 10) {
        animationSpeed -= 0.1;
        SetBlockSpeed();
        scoreInterval = 0;
    }
}

let checkDead = setInterval(function () {
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    for (let block of blocks) {
        blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
        leftright = blockLeft - characterLeft;
        if (leftright >= 0 && leftright <= 25 && blockTop && blockTop >= 500 && blockTop <= 560) {
            gameOverDisplay.style.display = "block";
            startGameButton.style.display = "block";
            for (let block of blocks) {
                block.style.animation = "none";
            }
        }
    }
}, 10);