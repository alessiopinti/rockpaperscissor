function getComputerChoice (){
  const names = ['Rock', 'Paper', 'Scissors'];
  const random = names[Math.floor(Math.random()*names.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {
    let bla = prompt('Rock, Paper or Scissors?');
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));