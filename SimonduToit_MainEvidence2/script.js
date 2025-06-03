//Game Parts
const character = document.getElementById("character");
const blocks = document.getElementsByClassName("block");
const apple = document.getElementById("points");
const scoreDisplay = document.querySelector(".score");
const gameOverDisplay = document.querySelector(".gameover");
const leaderBoard = document.getElementById("scoreboard");
const inputName = document.getElementById("inputname");
const ranks = document.getElementsByClassName("rank");
const boardnames = document.getElementsByClassName("name");
const jumpAudio = document.getElementById("jumpSound");
const loseAudio = document.getElementById("loseSound");
const appleAudio = document.getElementById("coinSound");

let gameOver = false;
let blockSpeed = 1;
let score = 0;
let scoreInterval = 0;
let currentPlayer = "";
let scoreboard = [{ name: "Le Poisson Steve", score: 500 }, { name: "", score: 0 }, { name: "", score: 0 }, { name: "", score: 0 }, { name: "", score: 0 }, { name: "", score: 0 }, { name: "", score: 0 }, { name: "", score: 0 }, { name: "", score: 0 }, { name: "", score: 0 }];
const gameSpeed = 10;

function StartGame() {
    if (localStorage.getItem("scoreboard1") !== null) {
        RetrieveScores();
    }
    UpdateLeaderBoard();
    gameOver = false;
    gameOverDisplay.style.display = "none";
    score = 0;
    scoreInterval = 0;
    scoreDisplay.innerHTML = "Score: 0";
    blockSpeed = 3;
    character.classList.add("animaterun");
    currentPlayer = inputName.fname.value;
    for (let block of blocks) {
        block.style.top = Math.floor(Math.random() * -500) + "px";
    }
    apple.style.top = Math.floor(Math.random() * -5000) + "px";
    moveBlock();
}

function moveBlock() {
    for (let block of blocks) {
        const currentTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));
        block.style.top = (currentTop + blockSpeed) + 'px';

        if (currentTop > 800) {
            block.style.top = Math.floor(Math.random() * -500) + "px";
        }
    }
    let currentTop = parseInt(window.getComputedStyle(apple).getPropertyValue('top'));
    apple.style.top = (currentTop + blockSpeed + 1) + 'px';
    if (currentTop > 800) {
        apple.style.top = Math.floor(Math.random() * -5000) + "px";
    }
    if (gameOver == false) {
        setTimeout(moveBlock, gameSpeed);
    }
}

function Jump() {
    character.classList.remove("animaterun");
    let addedAnim = "";
    jumpAudio.play();
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
        }, 700);
    }
}

function UpdateScore() {
    score++;
    scoreInterval++;
    scoreDisplay.innerHTML = "Score: " + score;
    if (scoreInterval == 10) {
        blockSpeed += 0.5;
        scoreInterval = 0;
    }
}

function ShowLeaderBoard() {
    if (leaderBoard.style.display == "grid") {
        leaderBoard.style.display = "none";
    }
    else {
        leaderBoard.style.display = "grid";
    }
}

function UpdateLeaderBoard() {
    for (i = 0; i < 10; i++) {
        if (score > scoreboard[i].score) {
            scoreboard.splice(-1);
            scoreboard.push({ name: currentPlayer, score: score });
            scoreboard.sort((a, b) => {
                if (b.score < a.score) {
                    return -1;
                }
                if (b.score > a.score) {
                    return 1;
                }
                return 0;
            });
            break;
        }
    }
    for (i = 0; i < 10; i++) {
        ranks.item(i).innerHTML = scoreboard[i].score;
        boardnames.item(i).innerHTML = scoreboard[i].name;
    }
    SaveScores();
}

function SaveScores() {
    if (typeof (Storage) !== "undefined") {
        for (i = 0; i < 10; i++) {
            localStorage.setItem("scoreboard" + i, JSON.stringify(scoreboard[i]))
        }
    }
}

function RetrieveScores() {
    for (i = 0; i < 10; i++) {
        scoreboard[i] = JSON.parse(localStorage.getItem("scoreboard" + i))
    }
}

function CheckObstacle() {
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    for (let block of blocks) {
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
        let leftright = blockLeft - characterLeft;
        if (leftright >= 5 && leftright <= 40 && blockTop >= 600 && blockTop <= 650) {
            loseAudio.play();
            gameOverDisplay.style.display = "block";
            gameOver = true;
            block.style.top = '-500px';
            UpdateLeaderBoard();
            ShowLeaderBoard();
        }
    }
}

function CheckApple() {
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    let appleLeft = parseInt(window.getComputedStyle(apple).getPropertyValue("left"));
    let appleTop = parseInt(window.getComputedStyle(apple).getPropertyValue("top"));
    leftright = appleLeft - characterLeft;
    if (leftright >= -50 && leftright <= 50 && appleTop >= 540 && appleTop <= 570) {
        UpdateScore();
        appleAudio.play();
        apple.style.top = Math.floor(Math.random() * -5000) + "px";
    }
}

let checkDead = setInterval(function () {
    CheckApple();
    CheckObstacle();
}, 10);