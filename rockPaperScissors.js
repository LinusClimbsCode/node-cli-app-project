// imports
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// diffrent text winning loosing, draw, rematch, foul
const win = "Congrats! You win!";
const lose = "Sorry, you lost!";
const draw = "Its a draw!";
const rematch = "You want a rematch?";
const foul = "You enter a wrong word! Its a foul";

// list
const choices = ["rock", "paper ", "scissors "];

// score variables
let scoreHum = 0;
let scoreCom = 0;

//functions---------------------------------------------------

// Game function
function startGame() {
    console.log("game on");
}



// app start ------------------------------------------------
// Welcome message
console.log("🎮 Welcome to Rock, Paper, Scissors CLI Game!");
console.log("You play against the computer. First to quit loses the fun!");
//Welcome message
rl.question("you like to start, press enter!", () => {
    rl.close();
    startGame();
});


