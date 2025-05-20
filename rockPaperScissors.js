// imports
const readline = require("readline");
const { start } = require("repl");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// score variables
let scorePlayer = 0;
let scoreCom = 0;

// diffrent text winning loosing, draw, rematch, foul
const welcomeMessage1 = "🎮 Welcome to Rock, Paper, Scissors CLI Game!";
const welcomeMessage2 =
    "You play against the computer. First to quit loses the fun!";
const enterMessage = "you like to start, press enter!";
const gameMessage =
    "\nChoose rock 'r', paper 'p', or scissors 's' (or type exit 'e' to quit): ";
const thanksMessage = "\nThanks for playing!";
const winMessage = "Congrats! You win!";
const loseMessage = "Sorry, you lost!";
const drawMessage = "Its a draw!";
const scoreMessage = ["The actual score is Player:", " - ", ":Computer"]; //"The actual score is Player:" + scorePlayer + " - " + scoreCom + ":Computer"
const rematchMessage = "You want a rematch?";
const foulMessage = "You enter a wrong word! Its a foul";

// list
const choices = ["rock", "paper", "scissors"];

//functions---------------------------------------------------

// function to get computer choice
/**
 * Returns a random choice for the computer: "rock", "paper", or "scissors".
 * @returns {string} The computer's choice.
 */
function getComChoice() {
    const randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}

// function to calculate winner
/**
 * Determines the winner of a round and updates the scores.
 * @param {string} player - The player's choice ("rock", "paper", or "scissors").
 * @param {string} computer - The computer's choice.
 * @returns {string} "win", "lose", or "draw" based on the result in the perspective of the player.
 */
function calcWinner(player, computer) {
    if (player === computer) {
        return "draw";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        scorePlayer++;
        return "win";
    } else {
        scoreCom++;
        return "lose";
    }
}

// function calcFinalWinner
/**
 * Determines the final winner based on the current scores.
 * @returns {string} "win", "lose", or "draw". In perspective of the player.
 */
function calcFinalWinner() {
    if (scoreCom == scorePlayer) {
        return "draw";
    }
    if (scoreCom > scorePlayer) {
        return "lose";
    } else {
        return "win";
    }
}

// function to present score
/**
 * Displays the current score. Ends the game if gameEnd is true.
 * @param {boolean} [gameEnd=false] - Whether to end the game and close readline.
 */
function presentScore(gameEnd = false) {
    console.log(
        scoreMessage[0] +
            scorePlayer +
            scoreMessage[1] +
            scoreCom +
            scoreMessage[2]
    );

    if (gameEnd) {
        rl.close();
        return;
    } else {
        return startGame();
    }
}

/**
 * Displays the result message based on the round outcome.
 * @param {string} result - "player", "computer", "draw", or "foul".
 */
function presentResult(result) {
    switch (result) {
        case "win":
            console.log(winMessage);
            break;
        case "lose":
            console.log(loseMessage);
            break;
        case "draw":
            console.log(drawMessage);
            break;
        case "foul":
            console.log(foulMessage);
            return startGame();
        default:
            break;
    }
}

/**
 * Prompts the player for their choice and calls the callback with the choice.
 * @param {function} callback - Function to call with the player's choice.
 */
function getPlayerChoice(callback) {
    // asking to make a move
    rl.question(gameMessage, (input) => {
        input = input.trim();
        if (input.length <= 0) {
            presentResult("foul");
            return startGame();
        }

        switch (input[0].toLowerCase()) {
            case "r":
                return callback("rock");
            case "p":
                return callback("paper");
            case "s":
                return callback("scissors");
            case "e":
                console.log(thanksMessage);
                presentResult(calcFinalWinner());
                return presentScore(true);
            default:
                console.log(foulMessage);
                return startGame();
        }
    });
}

/**
 * game function for a rock, paper, scissors game
 */
function startGame() {
    getPlayerChoice((playerChoice) => {
        // get computers choice
        const comChoice = getComChoice();

        // print both choices to the console
        console.log("Player chose:", playerChoice);
        console.log("Computer chose:", comChoice);

        // calculate winner and presenting it
        const result = calcWinner(playerChoice, comChoice)
        presentResult(result)

        // presenting score
        return presentScore()

    });
}


// app start ------------------------------------------------
// Welcome message
console.log(welcomeMessage1);
console.log(welcomeMessage2);
// asking for enter message to continue
rl.question(enterMessage, (input) => {
    scoreCom = 0;
    scorePlayer = 0;
    startGame();
});
