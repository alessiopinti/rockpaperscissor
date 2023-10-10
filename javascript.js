function getComputerChoice (){
  const names = ['Rock', 'Paper', 'Scissors'];
  const random = names[Math.floor(Math.random()*names.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'Rock'){
    if (computerSelection == 'Rock') {
      console.log('Its a tie');
    }
    else if (computerSelection == 'Paper'){
      console.log('You lose');
    }
    else if (computerSelection == 'Scissors'){
      console.log('You win');
    }
  }
  }

  const playerSelection = prompt('Rock, Paper or Scissors?');
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  
  

  
 
   
 