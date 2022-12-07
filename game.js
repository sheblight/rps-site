function getComputerChoice() {
    let value = Math.random();
    if (value > 2/3) {
        return "ROCK";
    }
    else if (value > 1/3) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}

function determineVictory(playerSelection, computerSelection) {

    switch (computerSelection) {
        case "ROCK":
            switch (playerSelection) {
                case "ROCK":
                    return "TIE";
                case "PAPER":
                    return "PLAYER";
                case "SCISSORS":
                    return "COMPUTER";
                default:
                    return "TIE";
            }
        case "PAPER":
            switch (playerSelection) {
                case "ROCK":
                    return "COMPUTER";
                case "PAPER":
                    return "TIE";
                case "SCISSORS":
                    return "PLAYER";
                default:
                    return "COMPUTER";
            }
        case "SCISSORS":
            switch (playerSelection) {
                case "ROCK":
                    return "PLAYER";
                case "PAPER":
                    return "COMPUTER";
                case "SCISSORS":
                    return "TIE";
                default:
                    return "PLAYER";
            }
        default:
            return "ERROR";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toUpperCase();
    // If player choice is undefined, throw rock.
    if (playerChoice != "ROCK" && playerChoice != "PAPER" && playerChoice != "SCISSORS") {
        playerChoice = "ROCK";
    }
    alert(`Player throws ${playerChoice}, Computer throws ${computerSelection}!`);
    return determineVictory(playerChoice, computerSelection);
}


function game() {
    let playerScore = 0;
    let cpuScore = 0;
    for (let i=0; i<5;i++) {
        let choice = prompt("Rock, paper, scissors... (what is your choice?) ");
        let result = playRound(choice, getComputerChoice());
        
        // Determine round result
        switch (result) {
            case "PLAYER":
                playerScore++;
                break;
            case "COMPUTER":
                cpuScore++;
                break;
            default:
                break;
        }
        alert(`Player score ${playerScore}, Computer score ${cpuScore}`);
    }

    // Declare final result
    if (playerScore > cpuScore) {
        console.log("Player wins!");
    }
    else if (playerScore == cpuScore) {
        console.log("The game is a tie!");
    }
    else {
        console.log("Computer wins!");
    }

}

console.log(game());