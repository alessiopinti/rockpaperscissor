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
  else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock")) {
    playerScore += 1;
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
  console.log("////////////////////");
  console.log("Game has ended");
  console.log("Playerscore: " + playerScore);
  console.log("Computer score: " + computerScore);
  console.log("No one wins!");
  console.log("////////////////////");
}
 else if(playerScore > computerScore){
  console.log("////////////////////");
  console.log("Game has ended");
  console.log("Playerscore: " + playerScore);
  console.log("Computer score: " + computerScore);
  console.log("You win!");
  console.log("////////////////////");
}
 else if(playerScore < computerScore){
  console.log("////////////////////");
  console.log("Game has ended");
  console.log("Playerscore: " + playerScore);
  console.log("Computer score: " + computerScore);
  console.log("You lose!");
  console.log("////////////////////");
}
}

game();











  
  

  
 
   
 