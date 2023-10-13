function getComputerChoice (){
  const names = ['rock', 'paper', 'scissors'];
  const random = names[Math.floor(Math.random()*names.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock'){
    if (computerSelection === 'rock') {
      console.log('Its a tie');
    }
    else if (computerSelection === 'paper'){
      console.log('You lose');
    }
    else if (computerSelection === 'scissors'){
      console.log('You win');
    }
  }

  if (playerSelection === 'paper'){
    if (computerSelection === 'rock') {
      console.log('You win');
    }
    else if (computerSelection === 'paper'){
      console.log('Its a tie');
    }
    else if (computerSelection === 'scissors'){
      console.log('You lose');
    }
  }
  
  if (playerSelection === 'scissors'){
    if (computerSelection === 'rock') {
      console.log('You lose');
    }
    else if (computerSelection === 'paper'){
      console.log('You win');
    }
    else if (computerSelection === 'scissors'){
      console.log('Its a tie');
    }
  }
  }

  
  

  const playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
  const computerSelection = getComputerChoice();
  console.log("Your choice is: " + playerSelection);
  console.log("The computer choice is: " + computerSelection);

  playRound(playerSelection, computerSelection);
  
  

  
 
   
 