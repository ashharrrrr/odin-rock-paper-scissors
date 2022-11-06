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

function capitalize(input) {
  let strInput = input.toString();
  let lowerCase = strInput.toLowerCase();
  let upperCase = strInput.charAt(0);
  return upperCase.toUpperCase() + lowerCase.slice(1);
}

function singleMatch(computerSelection, playerSelection) {

  if (
    playerSelection === "Rock" ||
    playerSelection === "Paper" ||
    playerSelection === "Scissors"
  ) {
    if (computerSelection === "Rock") {
      if (playerSelection === "Rock") {
        console.log("It's a tie!");
      } else if (playerSelection === "Paper") {
        console.log("You win! Paper beats Rock");
      } else {
        console.log("You Lose! Rock Beats Scissors");
      }
    }
    if (computerSelection === "Paper") {
      if (playerSelection === "Rock") {
        console.log("You Lose! Paper beats Rock");
      } else if (playerSelection === "Paper") {
        console.log("It's a tie!");
      } else {
        console.log("You win! Scissors beats Paper");
      }
    }
    if (computerSelection === "Scissors") {
      if (playerSelection === "Rock") {
        console.log("You win! Rock beats Scissors");
      } else if (playerSelection === "Paper") {
        console.log("You Lose! Scissors beats Paper");
      } else {
        console.log("It's a tie!");
      }
    }
  } else {
    return console.log("Enter Valid Input!");
  }
}

function getPlayerChoice(){
    let playerInput = prompt("Enter your choice!");

    let playerChoice = capitalize(playerInput);

    return playerChoice;
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

singleMatch(computerSelection, playerSelection);
 

