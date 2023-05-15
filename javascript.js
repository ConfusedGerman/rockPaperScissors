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

// count player and computer score
let computerScore = 0;
let playerScore = 0;

function game (playerChoice) {
    let computerChoice = getComputerChoice();

    // Play a single round
    let winner = playRound(computerChoice, playerChoice);

    // Update score
    if (winner === "Player") {
        playerScore ++;
    }
    else if (winner === "Computer") {
        computerScore ++;
    }

    //Print winner in div with id winners
    const container = document.querySelector('#winners');
    const div = document.createElement('div');

    //Print the overall winner and disable the click event listener
    if (playerScore === 5 || computerScore === 5) {
        div.textContent = winner + " won!";
        buttons.forEach((button) => {
            button.removeEventListener('click', buttonClickHandler);
          });
    }
    else {
        div.textContent = "Your choice is " + playerChoice + ", the computer chose " + computerChoice + ". " + winner + " won.";
    }
    container.appendChild(div);

}




// Define the event listener function, so that the click-event can be removed later from this function
function buttonClickHandler() {
    //retrieves the text content of the element that triggered the event
    let choice = this.textContent;
    game(choice.toLowerCase());
  }
  
  // Get the players choice buttons
  const buttons = document.querySelectorAll('button');
  
  // Add the event listener to each button
  buttons.forEach((button) => {
    button.addEventListener('click', buttonClickHandler);
  });