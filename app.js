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

let computerScore = 0;
let playerScore = 0;

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
        playerScore += 1;
        console.log("You win! Paper beats Rock");
      } else {
        computerScore += 1;
        console.log("You Lose! Rock Beats Scissors");
      }
    }
    if (computerSelection === "Paper") {
      if (playerSelection === "Rock") {
        computerScore += 1;
        console.log("You Lose! Paper beats Rock");
      } else if (playerSelection === "Paper") {
        console.log("It's a tie!");
      } else {
        playerScore += 1;
        console.log("You win! Scissors beats Paper");
      }
    }
    if (computerSelection === "Scissors") {
      if (playerSelection === "Rock") {
        playerScore += 1;
        console.log("You win! Rock beats Scissors");
      } else if (playerSelection === "Paper") {
        computerScore += 1;
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
    let playerInput = prompt(`Enter either "Rock" or "Paper" or "Scissors"`);

    let playerChoice = capitalize(playerInput);

    return playerChoice;
}

function winner(){
    if(computerScore > playerScore){
        console.log("You Lost the game!");
        console.log("Computer - " + computerScore + " You - " + playerScore);
    }

    else if(playerScore > computerScore){
        console.log("You won the game!");
        console.log("Computer - " + computerScore + "  You - " + playerScore);
    }

    else{
        console.log("It's a tie!");
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();

        singleMatch(computerSelection, playerSelection);

        

        // console.log(computerScore);
        // console.log(playerScore);
    }
    winner();
}

game();
 

