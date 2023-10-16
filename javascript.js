function getComputerChoice (){
  const names = ['rock', 'paper', 'scissors'];
  const random = names[Math.floor(Math.random()*names.length)];
  return random;
}

function playRound() {
  
  const playerSelection = prompt('rock, paper or scissors?').toLowerCase();
  const computerSelection = getComputerChoice();
  if (playerSelection === 'rock'){
    if (computerSelection === 'rock') {
      console.log('Its a tie');
      return 'Its a tie';
    }
    else if (computerSelection === 'paper'){
      console.log('You lose! Paper beats Rock');
      return 'You lose';
    }
    else if (computerSelection === 'scissors'){
      console.log('You win! Rock beats Scissors');
      return 'You win';
    }
  }

  if (playerSelection === 'paper'){
    if (computerSelection === 'rock') {
      console.log('You win! Paper beats Rock');
      return'You win';
    }
    else if (computerSelection === 'paper'){
      console.log('Its a tie');
      return 'Its a tie';
    }
    else if (computerSelection === 'scissors'){
      console.log('You lose! Scissors beat Paper');
      return'You lose';
    }
  }

  if (playerSelection === 'scissors'){
    if (computerSelection === 'rock') {
      console.log('You lose. Rock beats Scissors');
      return'You lose';
    }
    else if (computerSelection === 'paper'){
      console.log('You win');
      return'You win. Scissors beat Rock';
    }
    else if (computerSelection === 'scissors'){
      console.log('Its a tie');
      return'Its a tie';
    }
  }
}



function game() {
  playRound();
}

game();







  
  

  
 
   
 