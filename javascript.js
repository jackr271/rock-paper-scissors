// no input, returns 'rock' 'paper' or 'scissors' by random chance
function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) // selects a random integer between 0 and 2
    switch (num) {
        case 0: return 'rock'; // no need for break because true case > function returns

        case 1: return 'paper';

        case 2: return 'scissors';
    }
}

// inputs player's and computer's choices, returns win, lose, or tie result as string
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie!';
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors')
            return `Win! ${playerSelection} beats ${computerSelection}`;
        else
            return `Loss! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock')
            return `Win! ${playerSelection} beats ${computerSelection}`;
        else
            return `Loss! ${computerSelection} beats ${playerSelection}`;
    }
    else {
        if (computerSelection === 'paper')
            return `Win! ${playerSelection} beats ${computerSelection}`;
        else
            return `Loss! ${computerSelection} beats ${playerSelection}`;
    }
}

// prompts the player 5 times to play a 5-round game of rock-paper-scissors
function playGame() {
    let score = 0;
    for (i = 0; i < 5; i++) {
        let playerSelection;
        do {
            playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
        } while (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) // loops until user inputs correct choice

        let result = playRound(playerSelection, getComputerChoice()); // gets round result
        console.log(result); // displays result to user

        if (result.charAt(0) === 'W') // adds to user's score for a win, subtracts from a loss
            score++;
        else if (result.charAt(0) === 'L') 
            score--;
    }

    console.log((score === 0) ? // a bit of practice with nesting ternary operators 
        "You tied the match!"
        : (score >= 0) ?
            "You won the match!"
            : "You lost the match!");
}