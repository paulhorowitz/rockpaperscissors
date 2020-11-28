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

    playerChoiceElement = document.getElementById("player-choice");
    computerChoiceElement = document.getElementById("computer-choice");
    outcomeElement = document.getElementById("outcome");
    playerChoiceElement.innerHTML = "You have chosen " + playerSelection;
    playerChoiceElement.style.color = "#BADA55";
    let delayInMilliseconds = 1000;
    scoreElement = document.getElementById("score-element")
    setTimeout (function() {
        computerChoiceElement.innerHTML = "The computer has chosen " + computerSelection;
    }, delayInMilliseconds);
    console.log(`Your choice was ${playerSelection}`)
    console.log(`The computers choice was ${computerSelection}`)
    setTimeout (function() {
        if (computerSelection === "rock") {
            if (playerSelection === "rock") {
                outcomeElement.innerHTML = "It's a tie!";
            }
            else if (playerSelection === "scissors") {
                outcomeElement.innerHTML ="You lose. Rock beats Scissors :-( ";
                computerScore += 1;
            }
            else if (playerSelection === "paper") {
                outcomeElement.innerHTML ="You win!! Paper beats Rock!! Hooray!!"
                playerScore += 1;
            }
        }
        else if (computerSelection === "paper") {
            if (playerSelection === "rock") {
                outcomeElement.innerHTML = "You lose. Paper beats Rock. :-(";
                computerScore += 1;
            }
            else if (playerSelection === "paper") {
                outcomeElement.innerHTML ="It's a tie!"
            }
            else if (playerSelection == "scissors") {
                outcomeElement.innerHTML ="You win!! Scissors beats Paper!! Hooray!!";
                playerScore += 1;
            }
        }

        else if (computerSelection === "scissors") {
            if (playerSelection === "rock") {
                outcomeElement.innerHTML = "You win!! Rock beats Scissors!! Hooray!!";
                playerScore += 1;
            }
            else if (playerSelection === "paper") {
                outcomeElement.innerHTML ="You lose. Scissors beats Paper :-("
                computerScore += 1;
            }
            else if (playerSelection == "scissors") {
                outcomeElement.innerHTML ="It's a tie!"
            }
        }
        scoreElement.innerHTML = "Current Score " + playerScore + " - " + computerScore;

        return(playerScore, computerScore)
    },2000)
    outcomeElement.innerHTML=""
    computerChoiceElement.innerHTML=""
}

function outcome(playerScore, computerScore) {
    if (computerScore + playerScore >= 5) {    
        if (computerScore > playerScore) {
            scoreElement.innerHTML="Computer wins the game "+computerScore + " to " + playerScore
        }
        else if (computerScore == playerScore) {
            scoreElement.innerHTML="It's a draw. Both teams have " + computerScore + " points"
        }

        else if (playerScore > computerScore) {
            scoreElement.innerHTML="You win the game!! " + playerScore + " to " + computerScore + "!! Well done!!"
        }
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
        outcome(playerScore, computerScore)
    });
    paper.addEventListener('click', () => {
        playerSelection = "paper";
        computerPlay()
        console.log(compResult)
        round(playerSelection, compResult)
        outcome(playerScore, computerScore)
    });
    scissors.addEventListener('click', () => {
        playerSelection = "scissors";
        computerPlay()
        round(playerSelection, compResult)
        outcome(playerScore, computerScore)  
    })
}
computerScore = 0
playerScore = 0
playerPress()