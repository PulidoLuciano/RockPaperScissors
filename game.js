function getComputerChoice(){
    let choice = Math.random();

    if(choice < 0.33) return "ROCK";
    else if(choice < 0.66) return "PAPER";
    else return "SCISSORS";
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();

    if(computerSelection == playerSelection) return "DRAW"
    else if(playerSelection < computerSelection) return !(computerSelection == "SCISSORS" && playerSelection == "PAPER") ? "Player WINS" : "Computer WINS";
    else return !(playerSelection == "SCISSORS" && computerSelection == "PAPER") ? "Computer WINS" : "Player WINS";
}

function game(){
    let computerScore = 0;
    let playerScore = 0;
    
    while(computerScore < 3 && playerScore < 3){
        let computerSelection = getComputerChoice()
        let roundResult = playRound(prompt("Write the option you want"), computerSelection)
        
        if(roundResult == "Player WINS") playerScore++;
        else if(roundResult == "Computer WINS") computerScore++;

        console.log(computerSelection);
        console.log(roundResult);
        console.log(`--Scores--\nComputer: ${computerScore}\nPlayer: ${playerScore}`);
    }

    if(playerScore == 3) return "Player won the bo5"
    else return "Computer won the bo5"
}

game();
