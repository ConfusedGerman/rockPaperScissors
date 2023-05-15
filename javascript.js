// Determine computers choice
function getComputerChoice () {
    let choice = "";
    // Random number between zero and one
    let random = Math.random();
    if (random <= 1/3) {
        return choice = "rock";
    }   else if (random <= 2/3) {
        return choice = "paper";
    }   else {
        return choice = "scissors";
    }
}

//Determine the winner of a single round
function playRound (computer, player) {
    // Tie
    if (computer === player) {
        return "Noone";
    }
    else if (computer === "rock" && player === "scissors") {
        return "Computer";
    }

    else if (computer === "paper" && player === "rock") {
        return "Computer";
    }

    else if (computer === "scissors" && player === "paper") {
        return "Computer";
    }
    else {
        return "Player";
    }
}

let computerScore = 0;
let playerScore = 0;

function game (playerChoice) {
    let computerChoice = getComputerChoice();

    // Play a single round
    let winner = playRound(computerChoice, playerChoice);
    //Print winner in div with id winners
    const container = document.querySelector('#winners');
    const div = document.createElement('div');
    div.textContent = "Your choice is " + playerChoice + ", the computer chose " + computerChoice + ". " + winner + " won.";
    container.appendChild(div);

}




//get players choice from UI (buttons)
const buttons = document.querySelectorAll('button');

//for the button clicked return the buttons text and play a round with the choice
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let choice = button.textContent;
        game(choice.toLowerCase());
    });
});