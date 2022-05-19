const btnScissors = document.querySelector('#scissors');
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const resultsContainer = document.querySelector('.results-container');
const computerPoints = document.querySelector('#computer-h2');
const playerPoints = document.querySelector('#player-h2');
const computerSign = document.querySelector('.computer-points');
const playerSign = document.querySelector('.player-points');

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
        playerCont++;
        playerPoints.innerHTML = playerCont;
        content.classList.add('content');
        content.textContent = "You won! The " + playerSelection + " beats the " + computerSelection + "!";
        content.style.color = 'green';
        resultsContainer.appendChild(content);
    } else if (playerCont == 5) {
        content.classList.add('content');
        content.textContent = "Player win this match!";
        content.style.color = 'yellow';
        resultsContainer.appendChild(content);
        document.location.reload();
    } else if (PCCont == 5) {
        content.classList.add('content');
        content.textContent = "PC win this match!";
        content.style.color = 'yellow';
        resultsContainer.appendChild(content);
        document.location.reload();

    } else {
        PCCont++;
        computerPoints.innerHTML = PCCont;
        content.classList.add('content');
        content.textContent = "You lost! The " + computerSelection + " beats the " + playerSelection + "!";
        content.style.color = 'red';
        resultsContainer.appendChild(content);
    }
}