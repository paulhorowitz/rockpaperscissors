function computerPlay() {
    rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        compResult = "Rock";
    }
    else if (rand === 1) {
        compResult = "Scissors";
    }
    else compResult = "Paper";
    return compResult;
}

function game(playerSelection, computerSelection) {

    console.log(`Your choice was ${playerSelection}`)
    console.log(`The computers choice was ${computerSelection}`)
    if (computerSelection === "Rock") {
        if (playerSelection === "Rock") {
            console.log("It's a tie!")
        }
        else if (playerSelection === "Scissors") {
            console.log("You lose :-( ");
        }
        else if (playerSelection === "Paper") {
            console.log("You win!! Hooray!!")
        }
    }

    else if (computerSelection === "Paper") {
        if (playerSelection === "Rock") {
            console.log("You lose :-(")
        }
        else if (playerSelection === "Paper") {
            console.log("It's a tie!")
        }
        else if (playerSelection == "Scissors") {
            console.log("You win!! Hooray!!");
        }
    }

    else if (computerSelection === "Scissors") {
        if (playerSelection === "Rock") {
            console.log("You win!! Hooray!!")
        }
        else if (playerSelection === "Paper") {
            console.log("You lose :-(")
        }
        else if (playerSelection == "Scissors") {
            console.log("It's a tie!")
        }
    }
}


response = prompt("Enter Rock, Paper or Scissors");
game(response, computerPlay())