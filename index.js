function computerPlay(){
    let random = Math.floor(Math.random() * 3);
    let PC_Answer;

    switch(random){
        case 0:
            PC_Answer = "rock";
            break;
        case 1:
            PC_Answer = "paper";
            break;   
        case 2:
            PC_Answer = "scissors";
            break;   
    }
    return PC_Answer;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return "Nobody won!";
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "rock")){
        return "You won! The " + playerSelection + " beats the " + computerSelection + "!";
    }
    else{
        return "You lose! The " + computerSelection + " beats the " + playerSelection + "!";
    }
}
  const computerSelection = computerPlay();
  console.log("The PC Move: " + computerSelection);
  let playerSelection = prompt("Insert your move: ");
  console.log(playRound(playerSelection, computerSelection));
