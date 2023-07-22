function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * computerChoices.length);
  return computerChoices[randomIndex];
}

function getPlayerChoice() {
  const playerChoices = prompt("What is your choice?");
  return playerChoices.toString().toLowerCase();
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie. You chose ${playerSelection} and Computer also chose ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You Won! You chose ${playerSelection} and Computer chose ${computerSelection}`;
  } else {
    return `You Won! You chose ${playerSelection} and Computer chose ${computerSelection}`;
  }
}

console.log(playRound(playerSelection, computerSelection));
