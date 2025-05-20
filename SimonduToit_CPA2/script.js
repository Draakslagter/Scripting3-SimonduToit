//Game Parts
const character = document.getElementById("character");
const blocks = document.getElementsByClassName("block");
const scoreDisplay = document.querySelector(".score");
const gameOverDisplay = document.querySelector(".gameover");
const leaderBoard = document.getElementById("scoreboard");
const inputName = document.getElementById("inputname");
const ranks = document.getElementsByClassName("rank");
const boardnames = document.getElementsByClassName("name");

let gameOver = false;
let blockSpeed = 3;
let score = 0;
let scoreInterval = 0;
let currentPlayer = "";
let scoreboard = [{ name: "Le Poisson Steve", score: 500 }, { name: "", score: 0 }, { name: "", score: 0 }, { name: "", score: 0 }, { name: "", score: 0 }, { name: "", score: 0 }, { name: "", score: 0 }, { name: "", score: 0 }, { name: "", score: 0 }, { name: "", score: 0 }];
const gameSpeed = 10;

function StartGame() {
    RetrieveScores();
    UpdateLeaderBoard();
    gameOver = false;
    gameOverDisplay.style.display = "none";
    score = 0;
    scoreInterval = 0;
    scoreDisplay.innerHTML = "Score: 0";
    blockSpeed = 3;
    character.classList.add("animaterun");
    currentPlayer = inputName.fname.value;
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
    if (gameOver == false) {
        setTimeout(moveBlock, gameSpeed);
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

function SaveScores()
{
    if (typeof(Storage) !== "undefined")
    {
        for (i = 0; i < 10; i++)
        {
            localStorage.setItem("scoreboard" + i, JSON.stringify(scoreboard[i]))
        }
    }
}
function RetrieveScores()
{
    for (i = 0; i < 10; i++)
        {
           scoreboard[i] = JSON.parse(localStorage.getItem("scoreboard" + i))
        }
}

let checkDead = setInterval(function () {
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    for (let block of blocks) {
        blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
        leftright = blockLeft - characterLeft;
        if (leftright >= 5 && leftright <= 40 && blockTop && blockTop >= 600 && blockTop <= 650) {
            gameOverDisplay.style.display = "block";
            gameOver = true;
            block.style.top = '-500px';
            UpdateLeaderBoard();
            ShowLeaderBoard();
        }
    }
}, 10);