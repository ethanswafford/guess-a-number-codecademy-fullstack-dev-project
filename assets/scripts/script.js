let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

// 2️⃣ Compare human and computer guesses
function compareGuesses(humanGuess, computerGuess, targetNumber) {
    // Optional: Handle out-of-range guesses
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Please enter a number between 0 and 9!');
        return false; // automatically loses this round
    }

    const humanDifference = Math.abs(humanGuess - targetNumber);
    const computerDifference = Math.abs(computerGuess - targetNumber);

    // Human wins ties
    return humanDifference <= computerDifference;
}

// 3️⃣ Update scores based on the round winner
function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

// 4️⃣ Advance to the next round
function advanceRound() {
    currentRoundNumber++;
}