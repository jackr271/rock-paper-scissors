let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');

let buttons = document.querySelector('.buttons');

function resetGame () {
    if (playerScore > computerScore) {
        window.alert(`You won ${playerScore} to ${computerScore}! \nClick to play again.`);
    }
    else {
        window.alert(`You lost ${computerScore} to ${playerScore}! \nClick to play again.`);
    }
    playerScore = 0;
    computerScore = 0;

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

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
        tiesRound();
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors')
            playerWinsRound(playerSelection, computerSelection);
        else
            computerWinsRound(playerSelection, computerSelection);
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock')
            playerWinsRound(playerSelection, computerSelection);
        else
            computerWinsRound(playerSelection, computerSelection);
    }
    else {
        if (computerSelection === 'paper')
            playerWinsRound(playerSelection, computerSelection);
        else
            computerWinsRound(playerSelection, computerSelection);
    }

    if ((playerScore === 5) || (computerScore === 5)) {
        resetGame();
    }
}

function playerWinsRound (playerSelection, computerSelection) {
    window.alert(`Win! ${playerSelection} beats ${computerSelection}`);
    playerScore += 1;
    playerScoreDisplay.textContent = playerScore;
}

function computerWinsRound (playerSelection, computerSelection) {
    window.alert(`Loss! ${computerSelection} beats ${playerSelection}`);
    computerScore += 1;
    computerScoreDisplay.textContent = computerScore;
}

function tiesRound () {
    window.alert('Tie!');
}

buttons.addEventListener('click', (event) => {
    const target = event.target.getAttribute('name');

    switch (target) {
        case 'rock': console.log('Clicked!');
            playRound(playerSelection='rock', getComputerChoice());
            break;

        case 'paper': playRound(playerSelection='paper', getComputerChoice());
            break;

        case 'scissors': playRound(playerSelection='scissors', getComputerChoice());
            break;
    }
});