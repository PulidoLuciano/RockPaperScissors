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

let com = getComputerChoice();
let pla = "Scissors";

console.log(com);
console.log(playRound(pla, com));
