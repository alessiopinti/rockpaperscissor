function getComputerChoice (){
  const names = ['rock', 'paper', 'scissors'];
  const random = names[Math.floor(Math.random()*names.length)];
  return random;
}

function playRound() {
  
  const playerSelection = prompt('rock, paper or scissors?').toLowerCase();
  const computerSelection = getComputerChoice();
  const rockVersusRock = 'You chose Rock. The computer chose Rock. Its a tie';
  const rockVersusPaper = 'You chose Rock. The computer chose Paper. You lose';
  const rockVersusScissors = 'You chose Rock. The computer chose Scissors. You Win';

  const paperVersusRock = 'You chose Paper. The computer chose Rock. You Win.';
  const paperVersusPaper = 'You chose Paper. The computer chose Paper. Its a tie.';
  const paperVersusScissors = 'You chose Paper. The computer chose Scissors. You Lose.';

  const scissorsVersusRock = 'You chose Scissors. The computer chose Rock. You Lose.';
  const scissorsVersusPaper = 'You chose Scissors. The computer chose Paper. You Win.';
  const scissorsVersusScissors = 'You chose Scissors. The computer chose Scissors. Its a tie.';

  if (playerSelection === 'rock'){
    if (computerSelection === 'rock') {
      console.log(rockVersusRock);
      return rockVersusRock;
    }
    else if (computerSelection === 'paper'){
      console.log(rockVersusPaper);
      return rockVersusPaper;
    }
    else if (computerSelection === 'scissors'){
      console.log(rockVersusScissors);
      return rockVersusScissors;
    }
  }

  if (playerSelection === 'paper'){
    if (computerSelection === 'rock') {
      console.log(paperVersusRock);
      return paperVersusRock;
    }
    else if (computerSelection === 'paper'){
      console.log(paperVersusPaper);
      return paperVersusPaper;
    }
    else if (computerSelection === 'scissors'){
      console.log(paperVersusScissors);
      return paperVersusScissors;
    }
  }

  if (playerSelection === 'scissors'){
    if (computerSelection === 'rock') {
      console.log(scissorsVersusRock);
      return scissorsVersusRock;
    }
    else if (computerSelection === 'paper'){
      console.log(scissorsVersusPaper);
      return scissorsVersusPaper;
    }
    else if (computerSelection === 'scissors'){
      console.log(scissorsVersusScissors);
      return scissorsVersusScissors;
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









  
  

  
 
   
 