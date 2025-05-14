// imports
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

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
const rematchMessage = "You want a rematch?";
const foulMessage = "You enter a wrong word! Its a foul";

// list
const choices = ["r", "p", "s"] //["rock", "paper", "scissors"];

// score variables
let scorePlayer = 0;
let scoreCom = 0;

//functions---------------------------------------------------

// function to get computer choice
function getComChoice() {
    const randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}
// function to calculate winner
function calcWinner(human, computer) {
    if (human === computer) {return "draw"}

    if ((human == "r" && computer == "s") ||
    (human == "p" && computer == "r") ||
    (human == "s" && computer == "p")) {return 'human'}
    else {return "computer"}
}
// function to present score
function presentScore() {}
// Game function
function startGame() {
    rl.question(gameMessage, (input) => {
        const playerChoice = input[0].toLowerCase();

        if (playerChoice == "e") {
            console.log(thanksMessage);
            presentScore();
            rl.close();
            return;
        }

        if (!choices.includes(playerChoice)) {
            console.log(foulMessage);
            return startGame();
        }

        console.log(calcWinner(playerChoice, getComChoice()));
    });
}

// app start ------------------------------------------------
// Welcome message
console.log(welcomeMessage1);
console.log(welcomeMessage2);
//Welcome message
rl.question(enterMessage, () => {
    scoreCom = 0;
    scorePlayer = 0;
    startGame();
});
