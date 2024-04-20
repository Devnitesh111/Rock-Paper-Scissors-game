function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('player-choice').innerText = `Your choice: ${playerChoice}`;
    document.getElementById('computer-choice').innerText = `Computer's choice: ${computerChoice}`;

    const outcome = determineWinner(playerChoice, computerChoice);

    document.getElementById('outcome').innerText = outcome;
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}
