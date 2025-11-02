function getComputerChoice() {
    const choice = Math.random();

    if (choice <= 1/3) {
        return "Doumbe";
    }
    else if (choice >1/3 && choice <=2/3) {
        return "Paper";
    }  
    else {
        return "Scissors";
    }

}

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

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const humanScoreDiv = document.querySelector(".human_score .stat-value");
const computerScoreDiv = document.querySelector(".computer_score .stat-value");
const restartBtn = document.querySelector("#restart");
const resultDiv = document.querySelector(".result");

function handleClick (playerChoice) {
    const result = playRound (playerChoice,getComputerChoice());
    resultDiv.textContent = result
    humanScoreDiv.textContent = humanScore;
    computerScoreDiv.textContent = computerScore;

    if (humanScore === 2 || computerScore === 2 ){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        restartBtn.style.display = "block";
    }
}

restartBtn.addEventListener("click",() => {
    humanScore = 0
    computerScore = 0
    humanScoreDiv.textContent = humanScore
    computerScoreDiv.textContent = computerScore
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    restartBtn.style.display = "none";
    resultDiv.textContent = "";
})



rock.addEventListener("click" , () => {handleClick("Rock")})
paper.addEventListener("click" , () =>{handleClick("Paper")})
scissors.addEventListener("click" , () =>{handleClick("Scissors")})

const fighterCards = document.querySelectorAll(".fighter-card");
const fighterFirstName = document.querySelector(".fighter-firstname");
const fighterNickName = document.querySelector(".fighter-nickname");
const fighterLastName = document.querySelector(".fighter-lastname");
const fighterBg = document.querySelector(".player-side")
const originalFirstName = fighterFirstName.textContent;
const originalNickName = fighterNickName.textContent;
const originalLastName = fighterLastName.textContent;
let isLocked = false;
let fighterChoice = "";

/* FIGHTER CARDS HOVER / RELEASE / CLICK */
fighterCards.forEach(cards => {
    cards.addEventListener("mouseenter",function (){
        if (!isLocked) {
        const fighterName = cards.dataset.fighter;
        fighterBg.style.backgroundImage =`url("Images/${fighterName}.png")`;
        fighterFirstName.textContent = cards.dataset.firstname;
        fighterNickName.textContent = `" ${cards.dataset.pseudo} "`;
        fighterLastName.textContent = cards.dataset.lastname;   

       }
});
    cards.addEventListener("click",function(){
        fighterCards.forEach(card => {
            card.classList.add("locked");
            card.style.border = "3px solid transparent";
            card.style.boxShadow = "none";
            card.style.filter = "saturate(0.2)";
        
        });
        const fighterName = cards.dataset.fighter;
        cards.style.border="3px solid blue";
        cards.style.boxShadow="0 0 20px 6px blue, 0 0 40px 12px blue inset";
        cards.style.filter = "saturate(1)";
        fighterBg.style.backgroundImage =`url("Images/${fighterName}.png")`
        fighterFirstName.textContent = cards.dataset.firstname;
        fighterNickName.textContent = `" ${cards.dataset.pseudo} "`;
        fighterLastName.textContent = cards.dataset.lastname;
        isLocked = true;
        fighterChoice = fighterName;
        console.log(fighterName)
    });   
});


const fighterSelection = document.querySelector(".fighter-selection")

     fighterSelection.addEventListener("mouseleave",function (){
        if (!isLocked){
        fighterBg.style.backgroundImage =`url("Images/Default.png")`
        fighterFirstName.textContent = originalFirstName;
        fighterNickName.textContent = originalNickName;
        fighterLastName.textContent = originalLastName;
        }
        
})

