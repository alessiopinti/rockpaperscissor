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
  }

  const playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
  const computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection);
  
  

  
 
   
 