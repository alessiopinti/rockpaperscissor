function getComputerChoice (){
  const names = ['Rock', 'Paper', 'Scissors'];
  const random = names[Math.floor(Math.random()*names.length)];
  console.log(random);

}

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));