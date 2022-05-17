const btnScissors = document.querySelector('#scissors');
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const resultsContainer = document.querySelector('.results-container');
const computerPoints = document.querySelector('#computer-h2');
const playerPoints = document.querySelector('#player-h2');
const computerSign = document.querySelector('.computer-points');
const playerSign = document.querySelector('.player-points');


/*
console.log(btnScissors.id);
console.log(btnRock.id);
console.log(btnPaper.id);
*/

    btnScissors.addEventListener('click', () => {
        return playRound(btnScissors.id, computerPlay());
    });
    
    btnRock.addEventListener('click', () => {
        return playRound(btnScissors.id, computerPlay());
    });
    
    
    btnPaper.addEventListener('click', () => {
        return playRound(btnScissors.id, computerPlay());
    });
    


function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    let PC_Answer;

    switch (random) {
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

let playerCont = 0;
let PCCont = 0;

function playRound(playerSelection, computerSelection) {
    const content = document.createElement('div');

    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        content.classList.add('content');
        content.textContent = 'Nobody Won!';
        resultsContainer.appendChild(content);
    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
            playerCont ++;
            playerPoints.innerHTML = playerCont;
            content.classList.add('content');
            content.textContent = "You won! The " + playerSelection + " beats the " + computerSelection + "!";
            content.style.color = 'green';
            resultsContainer.appendChild(content);
    } else {
            PCCont ++;
            computerPoints.innerHTML = PCCont;
            content.classList.add('content');
            content.textContent = "You lost! The " + computerSelection + " beats the " + playerSelection + "!";
            content.style.color = 'red';
            resultsContainer.appendChild(content);
    }
}



// function game() {
//     let playerCont = 0;
//     let PCCont = 0;
//     while(playerCont != 5 || PCCont != 5)
//     computerSelection = computerPlay();
//         if (content.style.color == 'green') {
//             playerCont++;
//             playerPoints.style.color = 'blue';
//             playerPoints = playerCont;
//         } else if (playRound(playerSelection, computerSelection).includes("You lost!")) {
//             PCCont++;
//         } else if ("Nobody won!") {
//             playerCont == playerCont;
//             PCCont == PCCont;
//         }
//         console.log("Player: " + playerCont + "   VS   " + "PC: " + PCCont);

//     if (playerCont > PCCont) {
//         return "You won the game with " + playerCont + " points";
//     } else if (playerCont < PCCont) {
//         return "You lost the game, the PC Won with " + PCCont + " points";
//     } else {
//         return "Tie! " + "Player Points: " + playerCont + " and " + "PC Points: " + PCCont;
//     }
// }