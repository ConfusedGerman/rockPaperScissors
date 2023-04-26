function getComputerChoice () {
    let choice = "";
    let random = Math.random();
    if (random <= 1/3) {
        return choice = "Rock";
    }   else if (random <= 2/3) {
        return choice = "Paper";
    }   else {
        return choice = "Scissors";
    }
}