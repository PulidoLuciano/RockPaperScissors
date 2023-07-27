function getComputerChoice(){
    let choice = Math.random();

    if(choice < 0.33) return "Rock";
    else if(choice < 0.66) return "Paper";
    else return "Scissors";
}