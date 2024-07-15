let computer;
function getComputerChoice() {
    const choices =  ['rock', 'paper', 'scissors'];
    computer = choices[Math.floor(Math.random()*choices.length)];
    return computer;
}



let text;
function getHumanChoice() {
    
    let human = prompt("Make your choice!").toLowerCase();

    switch(human) {
        case "rock":
            return ("rock");
            break;
        case "paper":
            return ("paper");
            break;
        case "scissors":
            return ("scissors");
            break;
        default:
            return ("Rock, Paper or scissors?");
}
}

humanScore=0;
computerScore=0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");

    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");

    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");

    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");

    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");

    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");

    } else if (humanChoice === "scissors" && computerChoice === "scissors" 
        || humanChoice === "rock" && computerChoice === "rock" 
        || humanChoice === "paper" && computerChoice === "paper") {
           console.log("It's a TIE! Try Again!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);