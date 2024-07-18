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


function playGame() {

    let humanScore=0;
    let computerScore=0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose this round! Paper beats Rock");
            computerScore++;
    
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose this round! Rock beats Scissors");
            computerScore++;
    
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose this round! Scissors beats Paper");
            computerScore++;
    
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win this round! Paper beats Rock");
            humanScore++;
    
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win this round! Rock beats Scissors");
            humanScore++;
    
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win this round! Scissors beats Paper");
            humanScore++;
    
        } else if (humanChoice === "scissors" && computerChoice === "scissors" 
            || humanChoice === "rock" && computerChoice === "rock" 
            || humanChoice === "paper" && computerChoice === "paper") {
               console.log("It's a TIE!");
        }
    }


    for (let i=0; i<5; i++) {
        
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log("Your Score: " + humanScore);
        console.log("Computer's Score: " + computerScore);
    }
    
    if (humanScore> computerScore) {
        console.log("You Won the Game!");
    } else if (humanScore < computerScore) {
        console.log("You Lost the Game. Play again?");
    } else {
        console.log("It's a Tie! Play again?")
    }

}

playGame();