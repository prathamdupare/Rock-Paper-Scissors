function getComputerChoice() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * computerChoices.length);
  return computerChoices[randomIndex];
}

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const resultDiv = document.querySelector('.result');
const playerPoints = document.querySelector('.playerPoints')
const computerPoints = document.querySelector('.computerPoints')

rock.addEventListener("click", function () {
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  displayResult(playRound(playerSelection, computerSelection));
});



paper.addEventListener("click", function () {
  const playerSelection = "Paper";
  const computerSelection = getComputerChoice();
  displayResult(playRound(playerSelection, computerSelection));
});

scissors.addEventListener("click", function () {
  const playerSelection = "Scissors";
  const computerSelection = getComputerChoice();
  displayResult(playRound(playerSelection, computerSelection));
});

const computerSelection = getComputerChoice();

function pointsToPlayer() {

}

var playerPointsNum = 0;
var computerPointsNum = 0;

function playRound(playerSelection, computerSelection) {
  resultDiv.style.color = "white"
  if (playerSelection === computerSelection) {
    return `It's a tie. You chose ${playerSelection} and Computer also chose ${computerSelection}.`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") || 
    (playerSelection === "Paper" && computerSelection === "Rock") || 
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerPointsNum++;
    playerPoints.textContent = playerPointsNum.toString();
    return `You Won! You chose ${playerSelection} and Computer chose ${computerSelection}.` ;
  } else {
    computerPointsNum++;
    computerPoints.textContent = computerPointsNum.toString();
    return `You Lost! You chose ${playerSelection} and Computer chose ${computerSelection}.`;
  }
}

function displayResult(result) {
  if(playerPointsNum === 5) {
    resultDiv.style.color = "green"
    resultDiv.textContent = "Congratulations, You Won!";
    playerPoints.textContent = "0";
    computerPoints.textContent = "0";
    playerPointsNum = 0;
    computerPointsNum = 0;
  } else if(computerPointsNum === 5) {
    resultDiv.style.color = "red"
    resultDiv.textContent = "Sorry, You Lost!"
    playerPoints.textContent = "0";
    computerPoints.textContent = "0";
    playerPointsNum = 0;
    computerPointsNum = 0;
  } else {
    resultDiv.textContent = result
  } 
}
  
// make highlight when mouse is hovered 


const buttons = document.querySelectorAll('.container button')

buttons.forEach(button => {
  button.addEventListener("mouseenter", function onMouseHover() {
    button.style.backgroundColor = "#4E4E50"; // Use a valid color value here, like "red"
  });

  button.addEventListener("mouseleave", function onMouseLeave() {
    button.style.backgroundColor = ""; // Reset the background color to its default value
  });
});