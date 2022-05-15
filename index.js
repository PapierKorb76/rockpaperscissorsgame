const btnScissors = document.querySelector('#scissors');
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const resultsContainer = document.querySelector('.results-container');

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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Nobody Won!';
        resultsContainer.appendChild(content);
    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = "You won! The " + playerSelection + " beats the " + computerSelection + "!";
            content.style.color = 'green';
            resultsContainer.appendChild(content);
    } else {
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = "You lost! The " + computerSelection + " beats the " + playerSelection + "!";
            content.style.color = 'red';
            resultsContainer.appendChild(content);
    }
}

// // function game() {
// //     let playerCont = 0;
// //     let PCCont = 0;
// //     for (let i = 0; i < 5; i++) {
// //         computerSelection = computerPlay();
// //         console.log("The PC Move: " + computerSelection);
// //         playerSelection = prompt("Insert your move: ");
// //         console.log(playRound(playerSelection, computerSelection));

// //         if (playRound(playerSelection, computerSelection).includes("You won!")) {
// //             playerCont++;
// //         } else if (playRound(playerSelection, computerSelection).includes("You lost!")) {
// //             PCCont++;
// //         } else if ("Nobody won!") {
// //             playerCont == playerCont;
// //             PCCont == PCCont;
// //         }
// //         console.log("Player: " + playerCont + "   VS   " + "PC: " + PCCont);
// //     }

// //     if (playerCont > PCCont) {
// //         return "You won the game with " + playerCont + " points";
// //     } else if (playerCont < PCCont) {
// //         return "You lost the game, the PC Won with " + PCCont + " points";
// //     } else {
// //         return "Tie! " + "Player Points: " + playerCont + " and " + "PC Points: " + PCCont;
// //     }
// // }

// let playerSelection;
// let computerSelection;
// console.log(game());