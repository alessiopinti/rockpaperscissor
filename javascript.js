function getComputerChoice (){
  const names = ['Rock', 'Paper', 'Scissors'];
  const random = names[Math.floor(Math.random()*names.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'Rock' && computerSelection === 'Rock') {
    console.log('Its a tie.');
  }
  else if (playerSelection === 'Rock' && computerSelection === 'Paper'){
    console.log('You win');
  }
  else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
    console.log('You lose');
  }


  }

  const playerSelection = prompt('Rock, Paper or Scissors?');
  const computerSelection = getComputerChoice();
  
  

  
 
   
 