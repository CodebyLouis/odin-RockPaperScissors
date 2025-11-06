function getComputerChoice() {
    const choice = Math.random();

    if (choice <= 1/3) {
        return "Doumbe";
    }
    else if (choice >1/3 && choice <=2/3) {
        return "Zebo";
    }  
    else {
        return "Baki";
    }

}

let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
let isLocked = false;
let fighterChoice = "";
let clipLink = ""

function playRound (humanChoice,computerChoice) {
    if (humanChoice === computerChoice){
        drawScore++;
        clipLink = "Images/GIF/DRAW.gif"
        return "It's a tie";
    }
    else if (humanChoice === "Doumbe" && computerChoice ==="Zebo") {
        humanScore++;
        clipLink = "Images/GIF/DOUMBE ZEBO.gif"
        return "You win!";
    }
    else if (humanChoice === "Baki" && computerChoice ==="Doumbe") {
        humanScore++;
        clipLink = "Images/GIF/BAKI DOUMBE.gif";
        return "You win!";
    }
    else if (humanChoice === "Zebo" && computerChoice ==="Baki") {
        humanScore++;
        clipLink="Images/GIF/ZEBO BAKI.gif";
        return "You win!";
    }
    else if (humanChoice ==="Doumbe" && computerChoice ==="Baki") {
        clipLink = "Images/GIF/BAKI DOUMBE.gif";
        computerScore++;
        return "You loose!"
    }
    else if (humanChoice ==="Baki" && computerChoice ==="Zebo") {
        clipLink="Images/GIF/ZEBO BAKI.gif";
        computerScore++;
        return "You loose!"
    }
        else if (humanChoice ==="Zebo" && computerChoice ==="Doumbe") {
        clipLink = "Images/GIF/DOUMBE ZEBO.gif"
        computerScore++;
        return "You loose!"
    }

}

const fightBtn = document.querySelector(".fight-button");
const lineFight = document.querySelectorAll(".line");
const winsScoreDiv = document.querySelector(".wins_score .stat-value");
const loosesScoreDiv = document.querySelector(".looses_score .stat-value");
const drawsScoreDiv = document.querySelector(".draws_score .stat-value");
const restartBtn = document.querySelector(".restart-button");
const resultDiv = document.querySelector(".result");
const gameInfo = document.querySelector(".game-info");
const fightContainer = document.querySelector(".fight-container")
const gifFight = document.querySelector(".gif-fight") ;
const resultOverlay = document.querySelector(".result-overlay");
const resultText = document.querySelector(".result-text");

restartBtn.addEventListener("click",() => {
    humanScore = 0;
    computerScore = 0;
    drawScore = 0;
    winsScoreDiv.textContent = humanScore;
    loosesScoreDiv.textContent = computerScore;
    drawsScoreDiv.textContent = drawScore;
    fightBtn.disabled=true;
    restartBtn.style.display="none";
    lineFight.forEach(line =>{
        line.style.backgroundColor = "gray";
    })
    fightBtn.style.display = "inline-block";

    fighterCards.forEach(card => {
        card.style.pointerEvents = "auto";
        card.classList.remove("locked", "selected"); 
    });

    isLocked = false;  

    fighterBg.src = "Images/Default.png";
    fighterFirstName.textContent = originalFirstName;
    fighterNickName.textContent = originalNickName;
    fighterLastName.textContent = originalLastName;
    fighterBg.classList.remove("selected");

})

if(isLocked === false){
    fightBtn.disabled = true;
}

fightBtn.addEventListener("click",() => {
    const result = playRound(fighterChoice,getComputerChoice());
    winsScoreDiv.textContent = humanScore;
    loosesScoreDiv.textContent = computerScore;
    drawsScoreDiv.textContent = drawScore;
    gifFight.src=clipLink;
    gameInfo.style.display="none";
    fightContainer.style.display="block";
    console.log(clipLink)

    let overlayClass = "";
    let text = "";
    
    if (result === "You win!") {
        overlayClass = "win";
        text = "YOU WIN!";
    } else if (result === "You loose!") {
        overlayClass = "lose";
        text = "YOU LOSE!";
    } else {
        overlayClass = "draw";
        text = "DRAW!";
    }
    
    // Affiche l'overlay immédiatement
    resultText.textContent = text;
    resultOverlay.className = "result-overlay show " + overlayClass;
    
    // Cache l'overlay après 1.5 secondes
    setTimeout(() => {
        resultOverlay.classList.remove("show");
    }, 1500);
    

    if ((humanScore + drawScore + computerScore)===5 ){
        fightBtn.disabled = true;
        fightBtn.style.display = "none";
        lineFight.forEach(line =>{
        line.style.backgroundColor = "#052383";
    })

    fighterCards.forEach(card => {
        card.style.pointerEvents = "none"; 
    });
         
    }
    if((humanScore + drawScore + computerScore)===5){
    restartBtn.style.display = "inline-block";
    }
})



/* -------- FIGHTER SELECTION VISUAL ---------*/
const fighterCards = document.querySelectorAll(".fighter-card");
const fighterFirstName = document.querySelector(".fighter-firstname");
const fighterNickName = document.querySelector(".fighter-nickname");
const fighterLastName = document.querySelector(".fighter-lastname");
const fighterBg = document.querySelector(".fighter-img")
const originalFirstName = fighterFirstName.textContent;
const originalNickName = fighterNickName.textContent;
const originalLastName = fighterLastName.textContent;



/* FIGHTER CARDS HOVER / RELEASE / CLICK */
fighterCards.forEach(cards => {
    cards.addEventListener("mouseenter",function (){
        if (!isLocked) {
        const fighterName = cards.dataset.fighter;
        fighterBg.src =`Images/${fighterName}.png`;
        fighterFirstName.textContent = cards.dataset.firstname;
        fighterNickName.textContent = `" ${cards.dataset.pseudo} "`;
        fighterLastName.textContent = cards.dataset.lastname;   
        fighterBg.classList.add("hovered");
       }
});
    cards.addEventListener("click",function(){
        fighterCards.forEach(card => {
            card.classList.remove("selected");  
            card.classList.add("locked");       
        
        });
        lineFight.forEach(line =>{
            line.style.backgroundColor = "#ff0404";
         })
        fighterBg.classList.add("selected");
        fighterBg.classList.remove("hovered");
        
        const fighterName = cards.dataset.fighter;
        cards.classList.add("selected");
        fighterBg.src =`Images/${fighterName}.png`
        fighterFirstName.textContent = cards.dataset.firstname;
        fighterNickName.textContent = `" ${cards.dataset.pseudo} "`;
        fighterLastName.textContent = cards.dataset.lastname;
        isLocked = true;
        fighterChoice = fighterName;


        if (humanScore < 2 && computerScore < 2) {
        fightBtn.disabled = false;
    }

    });   
});


const fighterSelection = document.querySelector(".fighter-selection")

     fighterSelection.addEventListener("mouseleave",function (){
        if (!isLocked){
        fighterBg.src ="Images/Default.png";
        fighterFirstName.textContent = originalFirstName;
        fighterNickName.textContent = originalNickName;
        fighterLastName.textContent = originalLastName;
        fighterBg.classList.remove("hovered");
        }
        
})
