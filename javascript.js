function getComputerChoice (){
  const names = ['rock', 'paper', 'scissors'];
  const random = names[Math.floor(Math.random()*names.length)];
  return random;
}

function playRound() {
  
  const playerSelection = prompt('rock, paper or scissors?').toLowerCase();
  const computerSelection = getComputerChoice();
  const rockVersusRock = 'You chose Rock. The computer chose Rock.';
  const rockVersusPaper = 'You chose Rock. The computer chose Paper.';
  const rockVersusScissors = 'You chose Rock. The computer chose Scissors.';
  const paperVersusRock = 'You chose Paper. The computer chose Rock.';
  const paperVersusPaper = 'You chose Paper. The computer chose Paper.';
  const paperVersusScissors = 'You chose Paper. The computer chose Scissors.';
  const scissorsVersusRock = 'You chose Scissors. The computer chose Rock.';
  const scissorsVersusPaper = 'You chose Scissors. The computer chose Paper.';
  const scissorsVersusScissors = 'You chose Scissors. The computer chose Scissors.';


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

  const rockVersusRock = 'You chose Rock. The computer chose Rock.';
  const rockVersusPaper = 'You chose Rock. The computer chose Paper.';
  const rockVersusScissors = 'You chose Rock. The computer chose Scissors.';
  const paperVersusRock = 'You chose Paper. The computer chose Rock.';
  const paperVersusPaper = 'You chose Paper. The computer chose Paper.';
  const paperVersusScissors = 'You chose Paper. The computer chose Scissors.';
  const scissorsVersusRock = 'You chose Scissors. The computer chose Rock.';
  const scissorsVersusPaper = 'You chose Scissors. The computer chose Paper.';
  const scissorsVersusScissors = 'You chose Scissors. The computer chose Scissors.';

  let firstPlayRound = playRound();
  if (firstPlayRound === rockVersusScissors ){ 
    playerScore += 1;
    console.log("You Win! Player score: " + playerScore + ". Computer score: " + computerScore);
  }
  else if ( firstPlayRound == rockVersusRock) {
   playerScore;
   computerScore;
   console.log("Its a tie! Player score: " + playerScore + ". Computer score: " + computerScore);
  }
  else if ( firstPlayRound == rockVersusPaper) {
    computerScore += 1;
    console.log("You lose! Player score: " + playerScore + ". Computer score: " + computerScore);
   }

   if (firstPlayRound === paperVersusRock ){ 
    playerScore += 1;
    console.log("You Win! Player score: " + playerScore + ". Computer score: " + computerScore);
  }
  else if ( firstPlayRound == paperVersusPaper) {
   playerScore;
   computerScore;
   console.log("Its a tie! Player score: " + playerScore + ". Computer score: " + computerScore);
  }
  else if ( firstPlayRound == paperVersusScissors) {
    computerScore += 1;
    console.log("You lose! Player score: " + playerScore + ". Computer score: " + computerScore);
   }

   if (firstPlayRound === scissorsVersusPaper ){ 
    playerScore += 1;
    console.log("You Win! Player score: " + playerScore + ". Computer score: " + computerScore);
  }
  else if ( firstPlayRound == scissorsVersusScissors) {
   playerScore;
   computerScore;
   console.log("Its a tie! Player score: " + playerScore + ". Computer score: " + computerScore);
  }
  else if ( firstPlayRound == scissorsVersusRock) {
    computerScore += 1;
    console.log("You lose! Player score: " + playerScore + ". Computer score: " + computerScore);
   }

   let secondPlayRound = playRound();
   if (secondPlayRound === rockVersusScissors ){ 
     playerScore += 1;
     console.log("You Win! Player score: " + playerScore + ". Computer score: " + computerScore);
   }
   else if ( secondPlayRound == rockVersusRock) {
    playerScore;
    computerScore;
    console.log("Its a tie! Player score: " + playerScore + ". Computer score: " + computerScore);
   }
   else if ( secondPlayRound == rockVersusPaper) {
     computerScore += 1;
     console.log("You lose! Player score: " + playerScore + ". Computer score: " + computerScore);
    }
    if (secondPlayRound === paperVersusRock ){ 
     playerScore += 1;
     console.log("You Win! Player score: " + playerScore + ". Computer score: " + computerScore);
   }
   else if ( secondPlayRound == paperVersusPaper) {
    playerScore;
    computerScore;
    console.log("Its a tie! Player score: " + playerScore + ". Computer score: " + computerScore);
   }
   else if ( secondPlayRound == paperVersusScissors) {
     computerScore += 1;
     console.log("You lose! Player score: " + playerScore + ". Computer score: " + computerScore);
    }
    if (secondPlayRound === scissorsVersusPaper ){ 
     playerScore += 1;
     console.log("You Win! Player score: " + playerScore + ". Computer score: " + computerScore);
   }
   else if ( secondPlayRound == scissorsVersusScissors) {
    playerScore;
    computerScore;
    console.log("Its a tie! Player score: " + playerScore + ". Computer score: " + computerScore);
   }
   else if ( secondPlayRound == scissorsVersusRock) {
     computerScore += 1;
     console.log("You lose! Player score: " + playerScore + ". Computer score: " + computerScore);
    }

    let thirdPlayRound = playRound();
    if (thirdPlayRound === rockVersusScissors ){ 
      playerScore += 1;
      console.log("You Win! Player score: " + playerScore + ". Computer score: " + computerScore);
    }
    else if ( thirdPlayRound == rockVersusRock) {
     playerScore;
     computerScore;
     console.log("Its a tie! Player score: " + playerScore + ". Computer score: " + computerScore);
    }
    else if ( thirdPlayRound == rockVersusPaper) {
      computerScore += 1;
      console.log("You lose! Player score: " + playerScore + ". Computer score: " + computerScore);
     }
     if (thirdPlayRound=== paperVersusRock ){ 
      playerScore += 1;
      console.log("You Win! Player score: " + playerScore + ". Computer score: " + computerScore);
    }
    else if ( thirdPlayRound == paperVersusPaper) {
     playerScore;
     computerScore;
     console.log("Its a tie! Player score: " + playerScore + ". Computer score: " + computerScore);
    }
    else if ( thirdPlayRound == paperVersusScissors) {
      computerScore += 1;
      console.log("You lose! Player score: " + playerScore + ". Computer score: " + computerScore);
     }
     if (thirdPlayRound === scissorsVersusPaper ){ 
      playerScore += 1;
      console.log("You Win! Player score: " + playerScore + ". Computer score: " + computerScore);
    }
    else if ( thirdPlayRound == scissorsVersusScissors) {
     playerScore;
     computerScore;
     console.log("Its a tie! Player score: " + playerScore + ". Computer score: " + computerScore);
    }
    else if ( thirdPlayRound == scissorsVersusRock) {
      computerScore += 1;
      console.log("You lose! Player score: " + playerScore + ". Computer score: " + computerScore);
     }

     let fourthPlayRound = playRound();
     if (secondPlayRound === rockVersusScissors ){ 
       playerScore += 1;
       console.log("You Win! Player score: " + playerScore + ". Computer score: " + computerScore);
     }
     else if ( fourthPlayRound == rockVersusRock) {
      playerScore;
      computerScore;
      console.log("Its a tie! Player score: " + playerScore + ". Computer score: " + computerScore);
     }
     else if ( fourthPlayRound == rockVersusPaper) {
       computerScore += 1;
       console.log("You lose! Player score: " + playerScore + ". Computer score: " + computerScore);
      }
      if (fourthPlayRound === paperVersusRock ){ 
       playerScore += 1;
       console.log("You Win! Player score: " + playerScore + ". Computer score: " + computerScore);
     }
     else if ( fourthPlayRound == paperVersusPaper) {
      playerScore;
      computerScore;
      console.log("Its a tie! Player score: " + playerScore + ". Computer score: " + computerScore);
     }
     else if ( fourthPlayRound == paperVersusScissors) {
       computerScore += 1;
       console.log("You lose! Player score: " + playerScore + ". Computer score: " + computerScore);
      }
      if (fourthPlayRound === scissorsVersusPaper ){ 
       playerScore += 1;
       console.log("You Win! Player score: " + playerScore + ". Computer score: " + computerScore);
     }
     else if ( fourthPlayRound == scissorsVersusScissors) {
      playerScore;
      computerScore;
      console.log("Its a tie! Player score: " + playerScore + ". Computer score: " + computerScore);
     }
     else if ( fourthPlayRound == scissorsVersusRock) {
       computerScore += 1;
       console.log("You lose! Player score: " + playerScore + ". Computer score: " + computerScore);
      }

      let fifthPlayRound = playRound();
      if (secondPlayRound === rockVersusScissors ){ 
        playerScore += 1;
        console.log("You Win! Player score: " + playerScore + ". Computer score: " + computerScore);
      }
      else if ( fifthPlayRound == rockVersusRock) {
       playerScore;
       computerScore;
       console.log("Its a tie! Player score: " + playerScore + ". Computer score: " + computerScore);
      }
      else if ( fifthPlayRound == rockVersusPaper) {
        computerScore += 1;
        console.log("You lose! Player score: " + playerScore + ". Computer score: " + computerScore);
       }
       if (fifthPlayRound === paperVersusRock ){ 
        playerScore += 1;
        console.log("You Win! Player score: " + playerScore + ". Computer score: " + computerScore);
      }
      else if ( fifthPlayRound == paperVersusPaper) {
       playerScore;
       computerScore;
       console.log("Its a tie! Player score: " + playerScore + ". Computer score: " + computerScore);
      }
      else if ( fifthPlayRound == paperVersusScissors) {
        computerScore += 1;
        console.log("You lose! Player score: " + playerScore + ". Computer score: " + computerScore);
       }
       if (fifthPlayRound === scissorsVersusPaper ){ 
        playerScore += 1;
        console.log("You Win! Player score: " + playerScore + ". Computer score: " + computerScore);
      }
      else if ( fifthPlayRound == scissorsVersusScissors) {
       playerScore;
       computerScore;
       console.log("Its a tie! Player score: " + playerScore + ". Computer score: " + computerScore);
      }
      else if ( fifthPlayRound == scissorsVersusRock) {
        computerScore += 1;
        console.log("You lose! Player score: " + playerScore + ". Computer score: " + computerScore);
       }
}

game();









  
  

  
 
   
 