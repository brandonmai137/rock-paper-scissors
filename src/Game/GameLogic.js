export function getComputerSelection() {
    let computerSelection = Math.floor(Math.random() * 3 + 1);
    return computerSelection;

}


export async function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection == computerSelection) {
        let result = "tie"
        return result;
    }
    
    
    switch (playerSelection) {
        case 1:
            computerSelection == 2 ? result = "lose" : result = "win";
            break;

        case 2:
            computerSelection == 1 ? result = "win" : result = "lose";
            break;

        case 3:
            computerSelection == 1 ? result = "lose" : result = "win";
            break;
    }
    return result; 

}

//rock = 1, paper = 2, scissors = 3