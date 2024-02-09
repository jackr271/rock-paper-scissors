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