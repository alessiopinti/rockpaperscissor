let playerScore = 0;
let computerScore = 0;

function getComputerChoice (){
  let names = ['rock', 'paper', 'scissors'];
  let random = names[Math.floor(Math.random()*names.length)];
  return random;
}

function playRound() {
  
  let playerSelection = prompt('rock, paper or scissors?').toLowerCase();
  let computerSelection = getComputerChoice();


  if (playerSelection === computerSelection){
    console.log("You chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);
    console.log("Its a tie.");
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    console.log("---------------------------------");
  }
  else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock")) {
    computerScore += 1;
    console.log("You chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);
    console.log("You Win!");
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    console.log("---------------------------------");
  }
  else {
    computerScore += 1;
    console.log("You chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);
    console.log("You lose!");
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    console.log("---------------------------------");
  }
}

function game() {
playRound();
playRound();
playRound();
playRound();
playRound();
if(playerScore === computerScore){
  console.log("Game has ended");
  console.log("Playerscore: " + playerScore);
  console.log("Computer score: " + computerScore);
  console.log("No one wins!");
}
else if(playerscore > computerScore){
  console.log("Game has ended");
  console.log("Playerscore: " + playerScore);
  console.log("Computer score: " + computerScore);
  console.log("You win!");
}
else {
  console.log("Game has ended");
  console.log("Playerscore: " + playerScore);
  console.log("Computer score: " + computerScore);
  console.log("You lose!");
}

}

game();










  
  

  
 
   
 