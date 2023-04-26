function getComputerChoice () {
    let choice = "";
    let random = Math.random();
    console.log(random);
    if (random <= 1/3) {
        return choice = "Rock";
    }   else if (random <= 2/3) {
        return choice = "Paper";
    }   else {
        return choice = "Scissors";
    }
}

let computerChoice = getComputerChoice();
let playerChoice = getComputerChoice().toLowerCase;
function playRound (computer, player) {
    if (computerChoice === playerChoice) {
        return console.log("Tie!")
    }
    else if (computer == "Rock" && player == "scissors") {
        return "Computer won!";
    }

    else if (computer == "Paper" && player == "rock") {
        return "Computer won!";
    }

    else if (computer == "Scissors" && player == "paper") {
        return "Computer won!";
    }
    else {
        return "Player won!";
    }
}