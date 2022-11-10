let userRock = document.querySelector(".btn1");
let userPaper = document.querySelector(".btn2");
let userScissors = document.querySelector(".btn3");
let playersScore = document.querySelector("#playerScore");
let computersScore = document.querySelector("#computerScore");
let outputText = document.querySelector(".outputText");

let computerScore = 0;
let playerScore = 0;

userRock.addEventListener("click", () =>
  playRound(getComputerChoice(), "Rock")
);
userPaper.addEventListener("click", () =>
  playRound(getComputerChoice(), "Paper")
);
userScissors.addEventListener("click", () =>
  playRound(getComputerChoice(), "Scissors")
);

function getComputerChoice() {
  let computerValue = Math.random() * 100;
  let computerChoice = "Rock";

  if (computerValue < 34) {
    computerChoice = "Paper";
  } else if (computerValue >= 34 && computerValue < 67) {
    computerChoice = "Scissors";
  }

  return computerChoice;
}


function playRound(computerSelection, playerSelection) {
  if (computerScore < 5 && playerScore < 5) {
    if (
      playerSelection === "Rock" ||
      playerSelection === "Paper" ||
      playerSelection === "Scissors"
    ) {
      if (computerSelection === "Rock") {
        if (playerSelection === "Rock") {
          outputText.textContent = "It's a tie!";
          //console.log(computerScore);
          computersScore.textContent = computerScore.toString();
          //console.log(playerScore);
          playersScore.textContent = playerScore.toString();
        } else if (playerSelection === "Paper") {
          playerScore += 1;
          playersScore.textContent = playerScore.toString();
          computersScore.textContent = computerScore.toString();
          if (gameEnd()) {
            outputText.textContent = "Game ended! Reload page to try again.";
            return;
          }
          outputText.textContent = "You win! Paper beats Rock";
          //console.log(computerScore);
          //console.log(playerScore);
        } else {
          computerScore += 1;
          playersScore.textContent = playerScore.toString();
          computersScore.textContent = computerScore.toString();
          if (gameEnd()) {
            outputText.textContent = "Game ended! Reload page to try again.";
            return;
          }
          outputText.textContent = "You Lose! Rock Beats Scissors";
          //console.log(computerScore);
          //console.log(playerScore);
        }
      }
      if (computerSelection === "Paper") {
        if (playerSelection === "Rock") {
          computerScore += 1;
          playersScore.textContent = playerScore.toString();
          computersScore.textContent = computerScore.toString();
          if (gameEnd()) {
            outputText.textContent = "Game ended! Reload page to try again.";
            return;
          }
          outputText.textContent = "You Lose! Paper beats Rock";
          //console.log(computerScore);
          //console.log(playerScore);
        } else if (playerSelection === "Paper") {
          outputText.textContent = "It's a tie!";
          //console.log(computerScore);
          computersScore.textContent = computerScore.toString();
          //console.log(playerScore);
          playersScore.textContent = playerScore.toString();
        } else {
          playerScore += 1;
          playersScore.textContent = playerScore.toString();
          computersScore.textContent = computerScore.toString();
          if (gameEnd()) {
            outputText.textContent = "Game ended! Reload page to try again.";
            return;
          }
          outputText.textContent = "You win! Scissors beats Paper";
          //console.log(computerScore);
          //console.log(playerScore);
        }
      }
      if (computerSelection === "Scissors") {
        if (playerSelection === "Rock") {
          playerScore += 1;
          playersScore.textContent = playerScore.toString();
          computersScore.textContent = computerScore.toString();
          if (gameEnd()) {
            outputText.textContent = "Game ended! Reload page to try again.";
            return;
          }
          outputText.textContent = "You win! Rock beats Scissors";
          //console.log(computerScore);
          //console.log(playerScore);
        } else if (playerSelection === "Paper") {
          computerScore += 1;
          playersScore.textContent = playerScore.toString();
          computersScore.textContent = computerScore.toString();
          if (gameEnd()) {
            outputText.textContent = "Game ended! Reload page to try again.";
            return;
          }
          outputText.textContent = "You Lose! Scissors beats Paper";
          //console.log(computerScore);
          //console.log(playerScore);
        } else {
          outputText.textContent = "It's a tie!";
          //console.log(computerScore);
          computersScore.textContent = computerScore.toString();
          //console.log(playerScore);
          playersScore.textContent = playerScore.toString();
        }
      }
    } else {
      return (outputText.textContent = "Enter Valid Input!");
    }
  } else {
    outputText.textContent = "Game ended! Reload page to try again.";
  }
}

function gameEnd() {
  if (computerScore === 5 || playerScore === 5) {
    return true;
  }
  return false;
}
