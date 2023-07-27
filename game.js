function getComputerChoice(){
    let choice = Math.random();

    if(choice < 0.33) return "ROCK";
    else if(choice < 0.66) return "PAPER";
    else return "SCISSORS";
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    
    let selections = document.querySelectorAll(".roundSelection");

    selections[0].textContent = playerSelection;
    selections[1].textContent = computerSelection;

    if(computerSelection == playerSelection) return "DRAW"
    else if(playerSelection < computerSelection) return !(computerSelection == "SCISSORS" && playerSelection == "PAPER") ? "Player WINS" : "Computer WINS";
    else return !(playerSelection == "SCISSORS" && computerSelection == "PAPER") ? "Computer WINS" : "Player WINS";
}

function game(roundResult){
          
    if(roundResult == "Player WINS") playerScore++;
    else if(roundResult == "Computer WINS") computerScore++;

    let scores = document.querySelectorAll(".score");

    scores[0].textContent = playerScore;
    scores[1].textContent = computerScore;

    if(playerScore == 3 || computerScore == 3){
        winMessageContainer.classList.toggle('notVisible');
        optionsContainer.classList.toggle('notVisible');

        if(playerScore == 3) winMessageContainer.childNodes[1].textContent = "PLAYER wins!";
        else winMessageContainer.childNodes[1].textContent = "COMPUTER wins!";
    }
}

function resetGame(){
    computerScore = 0;
    playerScore = 0;

    winMessageContainer.classList.toggle('notVisible');
    optionsContainer.classList.toggle('notVisible');

    let scores = document.querySelectorAll(".score");

    scores[0].textContent = playerScore;
    scores[1].textContent = computerScore;
}

let winMessageContainer = document.querySelector("#winMessageContainer");
let options = document.querySelectorAll(".option");
let optionsContainer = document.querySelector("#optionsContainer");
let playAgainButton = document.querySelector("#playAgainButton");

let computerScore = 0;
let playerScore = 0;

playAgainButton.addEventListener("click", resetGame);

options.forEach(element => {
    element.addEventListener('click', () => game(playRound(element.textContent, getComputerChoice())));
});