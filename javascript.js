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


function playRound (computer, player) {
    // False input
    if (player != "rock" && player != "paper" && player != "scissors") {
        console.log("Only rock, paper and scissors are allowed!")
        return "Noone";
    }
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

function game () {
    let playerScore = 0;
    let computerScore = 0;

        let computerChoice = getComputerChoice();
        // Ask user for his choice
        let getPlayerChoice = prompt("Rock, Paper or Scissors? ");
        let playerChoice = getPlayerChoice.toLowerCase();

        // Play a single round
        let winner = playRound(computerChoice, playerChoice);
        //Print winner
        console.log("Your choice is " + playerChoice + ", the computer chose " + computerChoice + ". " + winner + " won.");

    // End of game with five points
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            console.log("You won!");
        }
        else {
            console.log("Computer won!");
        }
    }
}
// Call function to start game
game();

//NEW BRANCH?