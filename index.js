let getComputerChoice = () => {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * choices.length)];
};

let winner = (p, c) => {
    if (p === c) {
        return { result: "TIE", winner: 2 }; // Tie
    } else if ((p === "ROCK" && c === "PAPER") ||
               (p === "PAPER" && c === "SCISSORS") ||
               (p === "SCISSORS" && c === "ROCK")) {
        return { result: "Computer Wins", winner: 1 }; // Computer wins
    } else {
        return { result: "You Win", winner: 0 }; // Player wins
    }
};

let game = () => {
    let p = 0;
    let c = 0;

    document.querySelectorAll('.btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            let playerChoice = event.currentTarget.getAttribute('id');
            document.getElementById('choices').innerHTML = `You chose ${playerChoice}`;

            let computerChoice = getComputerChoice();
            document.getElementById('choices').innerHTML += `<br>Computer chose ${computerChoice}`;

            let roundResult = winner(playerChoice, computerChoice);

            if (roundResult.winner === 1) {
                c++;
            } else if (roundResult.winner === 0) {
                p++;
            }

            document.getElementById('score').innerHTML = `Player: ${p}, Computer: ${c}`;
            document.getElementById('outcome').innerHTML = roundResult.result;

            if (p === 5 || c === 5) {
                endGame(roundResult.result);
            }
        });
    });

    let endGame = (result) => {
        if (p > c) {
            document.getElementById('winner').innerHTML = "You won the game!";
        } else if (p < c) {
            document.getElementById('winner').innerHTML = "You lost the game!";
        } else {
            document.getElementById('winner').innerHTML = "It's a tie!";
        }

        document.getElementById('outcome').innerHTML = `Game Over. ${result}`;

        // You can add any additional logic or reset the game if needed
    };
};

game();



//TODO//
/* 
	after someone wins end game
	add a restart button
*/
