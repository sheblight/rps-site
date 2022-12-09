function getCPUChoice() {
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

function determineVictory(playerSelection, cpuSelection) {

    switch (cpuSelection) {
        case "ROCK":
            switch (playerSelection) {
                case "ROCK":
                    return "TIE";
                case "PAPER":
                    return "PLAYER";
                case "SCISSORS":
                    return "CPU";
                default:
                    return "TIE";
            }
        case "PAPER":
            switch (playerSelection) {
                case "ROCK":
                    return "CPU";
                case "PAPER":
                    return "TIE";
                case "SCISSORS":
                    return "PLAYER";
                default:
                    return "CPU";
            }
        case "SCISSORS":
            switch (playerSelection) {
                case "ROCK":
                    return "PLAYER";
                case "PAPER":
                    return "CPU";
                case "SCISSORS":
                    return "TIE";
                default:
                    return "PLAYER";
            }
        default:
            return "ERROR";
    }
}

function playRound(playerSelection, cpuSelection, playerChoiceElement, cpuChoiceElement) {
    let playerChoice = playerSelection.toUpperCase();

    // If player choice is undefined, throw rock.
    if (playerChoice != "ROCK" && playerChoice != "PAPER" && playerChoice != "SCISSORS") {
        playerChoice = "ROCK";
    }
    playerChoiceElement.textContent = `Player throws ${playerChoice}!`;
    cpuChoiceElement.textContent = `CPU throws ${cpuSelection}!`;
    return determineVictory(playerChoice, cpuSelection);
}

let playerScore = 0;
let cpuScore = 0;
const playerScoreText = document.querySelector(".player-score");
const cpuScoreText = document.querySelector(".cpu-score");
const playerChoiceText = document.querySelector(".player-choice");
const cpuChoiceText = document.querySelector(".cpu-choice");
const postGameElement = document.querySelector("div.post-game");
const winnerText = document.querySelector(".winner");
const buttonChoices = document.querySelectorAll('button.choice');
const retryButton = document.querySelector('button.retry');

function onPlayerMove() {
    const buttonClass = this.classList[0];
    const roundWinner = playRound(buttonClass, getCPUChoice(), playerChoiceText, cpuChoiceText);
    switch (roundWinner) {
        case "CPU":
            cpuScore++;
            break;
        case "PLAYER":
            playerScore++;
            break;
        default:
            break;
    }
    playerScoreText.textContent = `Player: ${playerScore}`;
    cpuScoreText.textContent = `CPU: ${cpuScore}`;

    if (playerScore < 5 && cpuScore < 5) return; 
    // update winner result and show post-game elements
    const gameWinner = Math.max(playerScore, cpuScore) == playerScore ? "Player" : "CPU";
    winnerText.textContent = `${gameWinner} wins the game!`;
    postGameElement.style.display = "block";

    // remove this event from all listeners if victory determined
    buttonChoices.forEach(button => button.removeEventListener('click', onPlayerMove));
}

function onResetGame() {
    playerScore = 0;
    cpuScore = 0;
    playerScoreText.textContent = `Player: ${playerScore}`;
    cpuScoreText.textContent = `CPU: ${cpuScore}`;
    playerChoiceText.textContent = "Make your move...";
    cpuChoiceText.textContent = "";
    
    // hide post game elements
    postGameElement.style.display = "none";
    buttonChoices.forEach(button => button.addEventListener('click', onPlayerMove));
}

onResetGame();
retryButton.addEventListener('click', onResetGame)