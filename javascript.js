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
      console.log('You chose Rock. The computer chose Rock. Its a tie');
      return 'You chose Rock. The computer chose Rock. Its a tie';
    }
    else if (computerSelection === 'paper'){
      console.log('You chose Rock. The computer chose Paper. You lose');
      return 'You chose Rock. The computer chose Paper. You lose';
    }
    else if (computerSelection === 'scissors'){
      console.log('You chose Rock. The computer chose Scissors. You Win');
      return 'You chose Rock. The computer chose Scissors. You Win';
    }
  }

  if (playerSelection === 'paper'){
    if (computerSelection === 'rock') {
      console.log('You chose Paper. The computer chose Rock. You Win.');
      return 'You chose Paper. The computer chose Rock. You Win.';
    }
    else if (computerSelection === 'paper'){
      console.log('You chose Paper. The computer chose Paper. Its a tie.');
      return 'You chose Paper. The computer chose Paper. Its a tie.';
    }
    else if (computerSelection === 'scissors'){
      console.log('You chose Paper. The computer chose Scissors. You Lose.');
      return 'You chose Paper. The computer chose Scissors. You Lose.';
    }
  }

  if (playerSelection === 'scissors'){
    if (computerSelection === 'rock') {
      console.log('You chose Scissors. The computer chose Rock. You Lose.');
      return 'You chose Scissors. The computer chose Rock. You Lose.';
    }
    else if (computerSelection === 'paper'){
      console.log('You chose Scissors. The computer chose Paper. You Win.');
      return 'You chose Scissors. The computer chose Paper. You Win.';
    }
    else if (computerSelection === 'scissors'){
      console.log('You chose Scissors. The computer chose Scissors. Its a tie.');
      return 'You chose Scissors. The computer chose Scissors. Its a tie.';
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  
 let firstPlayRound = playRound();
 let secondPlayRound = playRound();
 let thirdlayRound = playRound();
 let fourthPlayRound = playRound();
 let fifthPlayRound = playRound();

}

game();









  
  

  
 
   
 