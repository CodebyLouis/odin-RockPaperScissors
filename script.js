function getComputerChoice() {
    let ComputerChoice = Math.random();

    if (ComputerChoice <= 1/3) {
        return "Rock";
    }

    else if (ComputerChoice >1/3 && ComputerChoice <=2/3) {
        return "Paper";
    } 
    
    else {
        return "Scissors"
    }

}

console.log(getComputerChoice());