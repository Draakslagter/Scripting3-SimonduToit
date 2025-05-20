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
let blockSpeed = 2;
let score = 0;
let scoreInterval = 0;
let currentPlayer = "";
let scoreboard = [];
const gameSpeed = 10;

function StartGame() {
    gameOver = false;
    gameOverDisplay.style.display = "none";
    score = 0;
    scoreInterval = 0;
    scoreDisplay.innerHTML = "Score: 0";
    blockSpeed = 2;
    character.classList.add("animaterun");
    currentPlayer = inputName.fname.value;
    moveBlock();
}

function moveBlock() {
    for (let block of blocks) {
    const currentTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));
    block.style.top = (currentTop + blockSpeed) + 'px';

    if (currentTop > 800) {
        block.style.top = '-500px';
    }
    }
    if (gameOver == false)
        {
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

function ShowLeaderBoard()
{
    if (leaderBoard.style.display == "block")
    {
        leaderBoard.style.display = "none";
    }
    else
    {
        leaderBoard.style.display = "block";
    }
}

function UpdateLeaderBoard(){
    console.log("updating");
    for (let rank of ranks)
    {
        let rankScore = parseInt(rank.innerHTML);
        console.log(rankScore);
        if (score > rankScore)
        {
            rank.innerHTML = score;
            console.log(ranks.item(rank));
            boardnames[ranks.item].innerHTML = currentPlayer;
        }
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
        }
    }
}, 10);