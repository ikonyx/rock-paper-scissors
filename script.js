let computer;
function getComputerChoice() {
    const choices =  ['rock', 'paper', 'scissors'];
    computer = choices[Math.floor(Math.random()*choices.length)];
    return computer;
}

let humanScore=0;
let computerScore=0;

const container = document.querySelector('#playerSelection');

const rock = document.querySelector("#btnRock");
const paper = document.querySelector("#btnPaper");
const scissors = document.querySelector("#btnScissors");

container.appendChild(rock); 
container.appendChild(paper);
container.appendChild(scissors);

rock.addEventListener("click", () => {
    playRound('rock', getComputerChoice());
});
paper.addEventListener("click", () => {
    playRound('paper', getComputerChoice());
});
scissors.addEventListener("click", () => {
    playRound('scissors', getComputerChoice());
});

const results = document.querySelector("#results");

const player = document.createElement('div');
player.id = 'player';
const cpu = document.createElement('div');
cpu.id ='cpu';

const playerScore = document.createElement('div');
playerScore.textContent = ("You: " + humanScore + "/5");
const playerChoice = document.createElement('img');
playerChoice.className = "selection";
    
const cpuScore = document.createElement('div');
cpuScore.textContent = ("Computer: " + computerScore + "/5");
const cpuChoice = document.createElement('img');
cpuChoice.className = "selection";


player.appendChild(playerScore);
player.appendChild(playerChoice);

cpu.appendChild(cpuScore);
cpu.appendChild(cpuChoice);

results.appendChild(player);
results.appendChild(cpu);


playerChoice.src = 'images/rock.png';
cpuChoice.src = 'images/rock.png';
    

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        playerChoice.src = 'images/rock.png';
        cpuChoice.src = 'images/paper.png';
        
    
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        playerChoice.src = 'images/scissors.png';
        cpuChoice.src = 'images/rock.png';
        
    
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        playerChoice.src = 'images/paper.png';
        cpuChoice.src = 'images/scissors.png';
        
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        playerChoice.src = 'images/paper.png';
        cpuChoice.src = 'images/rock.png';

    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        playerChoice.src = 'images/rock.png';
        cpuChoice.src = 'images/scissors.png';

    } else if (humanChoice === "scissors" && computerChoice === "paper") {   
        humanScore++;
        playerChoice.src = 'images/scissors.png';
        cpuChoice.src = 'images/paper.png';

    } else if (humanChoice === computerChoice) {   
        playerChoice.src = ('images/'+humanChoice+'.png');
        cpuChoice.src = ('images/'+humanChoice+'.png');
    } 
    
    cpuScore.textContent = ("Computer: " + computerScore + "/5");
    playerScore.textContent = ("You: " + humanScore + "/5");


    if (humanScore == 5) {
        

        const won = document.createElement('img');
        const gif = document.querySelector("#gif");
        gif.appendChild(won);
        
        won.src = 'images/won.gif';
        
        
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
            emojis: ['🎉', '⚡️', '💥', '✨', '🥳', '🎊'], emojiSize: 50,
        }).then(() => jsConfetti.addConfetti());
    }
    
    else if (computerScore == 5) {
    
        const lost = document.createElement('img');
        const gif = document.querySelector("#gif");
        gif.appendChild(lost);
        lost.src = 'images/lost.gif';
    }

    if (humanScore == 5 || computerScore == 5) {
        const refreshBtn = document.querySelector('#refreshBtn');
        refreshBtn.style.display = 'block';
        gif.style.display = 'block';

        function refreshPage() {
        window.location.reload();
        }
        refreshBtn.addEventListener("click", refreshPage);
    }
    }