let ticTacToe = []
let singlePlayer = true;
let turns = 0;

function StartGame()
{
    location.reload();
    // turns=0;
    // ticTacToe.length = 0;
    // for (let i =0; i<9;i++)
    // {
    //     document.getElementById(i.toString()).innerHTML = "";
    //     document.getElementById(number.toString()).onclick = "putInGrid(" + (i-1).toString() + ")".toString();
    // }
    // document.getElementById("displayBox").innerHTML = "Player 1's Turn";
}

function putInGrid(number){
    
    if (singlePlayer)
    {
        document.getElementById(number.toString()).innerHTML = "X";
        ticTacToe[number] = 0;
        
        document.getElementById(number.toString()).onclick = "";
        if (turns < 8)
        {
            document.getElementById("displayBox").innerHTML = "Player 2's Turn";
        }
    }
    else
    {
        ticTacToe[number] = 1;  
        document.getElementById(number.toString()).innerHTML = "O";
        document.getElementById("displayBox").innerHTML = "Player 1's Turn";
        document.getElementById(number.toString()).onclick = "";
}
singlePlayer=!singlePlayer;
checkWin();
turns ++;
    }



function checkWin()
{
    if (ticTacToe[0] == 1 && ticTacToe [0] == ticTacToe[3] && ticTacToe[0] == ticTacToe[6] 
        || ticTacToe[1] == 1 && ticTacToe [1] == ticTacToe[4] && ticTacToe[1] == ticTacToe[7]
        || ticTacToe[2] == 1 && ticTacToe [2] == ticTacToe[5] && ticTacToe[2] == ticTacToe[8]
        || ticTacToe[0] == 1 && ticTacToe [0] == ticTacToe[1] && ticTacToe[0] == ticTacToe[2]
        || ticTacToe[3] == 1 && ticTacToe [3] == ticTacToe[4] && ticTacToe[3] == ticTacToe[5]
        || ticTacToe[6] == 1 && ticTacToe [6] == ticTacToe[7] && ticTacToe[6] == ticTacToe[9]
        || ticTacToe[0] == 1 && ticTacToe [0] == ticTacToe[4] && ticTacToe[0] == ticTacToe[8]
        || ticTacToe[2] == 1 && ticTacToe [2] == ticTacToe[4] && ticTacToe[2] == ticTacToe[6])
    {
        document.getElementById("displayBox").innerHTML = "Player 2 Wins";
    }
    else if(ticTacToe[0] == 0 && ticTacToe [0] == ticTacToe[3] && ticTacToe[0] == ticTacToe[6] 
        || ticTacToe[1] == 0 && ticTacToe [1] == ticTacToe[4] && ticTacToe[1] == ticTacToe[7]
        || ticTacToe[2] == 0 && ticTacToe [2] == ticTacToe[5] && ticTacToe[2] == ticTacToe[8]
        || ticTacToe[0] == 0 && ticTacToe [0] == ticTacToe[1] && ticTacToe[0] == ticTacToe[2]
        || ticTacToe[3] == 0 && ticTacToe [3] == ticTacToe[4] && ticTacToe[3] == ticTacToe[5]
        || ticTacToe[6] == 0 && ticTacToe [6] == ticTacToe[7] && ticTacToe[6] == ticTacToe[9]
        || ticTacToe[0] == 0 && ticTacToe [0] == ticTacToe[4] && ticTacToe[0] == ticTacToe[8]
        || ticTacToe[2] == 0 && ticTacToe [2] == ticTacToe[4] && ticTacToe[2] == ticTacToe[6])
        {
            document.getElementById("displayBox").innerHTML = "Player 1 Wins";
        }
        else if (turns == 8)
        {
            document.getElementById("displayBox").innerHTML = "It's a Draw";
        }
}