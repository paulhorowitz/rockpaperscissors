function computerPlay() {
    rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        compResult = "rock";
    }
    else if (rand === 1) {
        compResult = "scissors";
    }
    else compResult = "paper";
    return compResult;
}

function round(playerSelection, computerSelection) {

    playerChoiceElement = document.getElementById("player-choice")
    computerChoiceElement = document.getElementById("computer-choice")
    playerChoiceElement.innerHTML = "You have chosen " + playerSelection;
    console.log(`Your choice was ${playerSelection}`)
    console.log(`The computers choice was ${computerSelection}`)
    if (computerSelection === "rock") {
        if (playerSelection === "rock") {
            console.log("It's a tie!");
        }
        else if (playerSelection === "scissors") {
            console.log("You lose. Rock beats Scissors :-( ");
            computerScore += 1;
        }
        else if (playerSelection === "paper") {
            console.log("You win!! Paper beats Rock!! Hooray!!")
            playerScore += 1;
        }
    }

    else if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            console.log("You lose. Paper beats Rock. :-(")
            computerScore += 1;
        }
        else if (playerSelection === "paper") {
            console.log("It's a tie!")
        }
        else if (playerSelection == "scissors") {
            console.log("You win!! Scissors beats Paper!! Hooray!!");
            playerScore += 1;
        }
    }

    else if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            console.log("You win!! Rock beats Scissors!! Hooray!!")
            playerScore += 1;
        }
        else if (playerSelection === "paper") {
            console.log("You lose. Scissors beats Paper :-(")
            computerScore += 1;
        }
        else if (playerSelection == "scissors") {
            console.log("It's a tie!")
        }
    }
}

function game() {
    if (computerScore > playerScore) {
        console.log(`Computer wins the game ${computerScore} to ${playerScore}`)
    }
    else if (computerScore == playerScore) {
        console.log(`It's a draw. Both teams have ${computerScore} points`)
    }

    else if (playerScore > computerScore) {
        console.log(`You win the game!! ${playerScore} to ${computerScore}!! Well done!!`)
    }
}

function playerPress () {
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    rock.addEventListener('click', () => {
        playerSelection = "rock";
        computerPlay()
        round(playerSelection, compResult)
    });
    paper.addEventListener('click', () => {
        playerSelection = "paper";
        computerPlay()
        round(playerSelection, compResult)
    });
    scissors.addEventListener('click', () => {
        playerSelection = "scissors";
        computerPlay()
        round(playerSelection, compResult)
    })
}
computerScore = 0
playerScore = 0
playerPress()