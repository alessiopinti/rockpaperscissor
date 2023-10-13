function getComputerChoice (){
  const names = ['rock', 'paper', 'scissors'];
  const random = names[Math.floor(Math.random()*names.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock'){
    if (computerSelection === 'rock') {
      return('Its a tie');
    }
    else if (computerSelection === 'paper'){
      return('You lose');
    }
    else if (computerSelection === 'scissors'){
      return('You win');
    }
  }

  if (playerSelection === 'paper'){
    if (computerSelection === 'rock') {
      return('You win');
    }
    else if (computerSelection === 'paper'){
      return('Its a tie');
    }
    else if (computerSelection === 'scissors'){
      return('You lose');
    }
  }

  if (playerSelection === 'scissors'){
    if (computerSelection === 'rock') {
      return('You lose');
    }
    else if (computerSelection === 'paper'){
      return('You win');
    }
    else if (computerSelection === 'scissors'){
      return('Its a tie');
    }
  }
  }

  
  

  const playerSelection = prompt('rock, paper or scissors?').toLowerCase();
  const computerSelection = getComputerChoice();
  
  console.log("Your choice is: " + playerSelection);
  console.log("The computer choice is: " + computerSelection);
  console.log(playRound(playerSelection, computerSelection));

  playRound(playerSelection, computerSelection);
  
  

  
 
   
 