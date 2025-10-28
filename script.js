function getComputerChoice() {
    const choice = Math.random();

    if (choice <= 1/3) {
        return "Rock";
    }
    else if (choice >1/3 && choice <=2/3) {
        return "Paper";
    }  
    else {
        return "Scissors";
    }

}

function getHumanChoice () {
    const choice = prompt ("Rock, Paper, or Scissors?");
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
};


function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice,computerChoice) {
        if (humanChoice === computerChoice){
            return "It's a tie";
        }
        else if (humanChoice === "Rock" && computerChoice ==="Scissors") {
            humanScore++;
            return "You win! Rock beats Scissors";
        }
        else if (humanChoice === "Scissors" && computerChoice ==="Paper") {
            humanScore++;
            return "You win! Scissors beats Paper";
        }
        else if (humanChoice === "Paper" && computerChoice ==="Rock") {
            humanScore++;
            return "You win! Paper beats Rock";
        }
        else {
            computerScore++;
            return "You loose!"
        }
    }

    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

}

playGame();


