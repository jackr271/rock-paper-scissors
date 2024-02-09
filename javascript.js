function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) // selects a random integer between 0 and 2
    switch (num) {
        case 0: return 'rock'; // no need for break because true case > function returns

        case 1: return 'paper';

        case 2: return 'scissors';
    }
}