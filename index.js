


let getComputerChoice = () => {
	const choices = ["ROCK", "PAPER", "SCISSORS"]
	return choices[Math.floor(Math.random()*choices.length)]
}

let getPlayerChoice = () => {
	let choice = prompt("Choose Rock, Paper, or Scissors").toUpperCase()
	return choice
}

let winner = () => {
	let p = getPlayerChoice()
	let c = getComputerChoice()
	console.log(`Computer chose ${c}`);
	if (p === c) console.log("TIE")
	else if (p === "ROCK" && c === "PAPER") {
		console.log("Computer Wins")
		return 1
	}
	else if (p === "ROCK" && c === "SCISSORS") {
		console.log("You Win")
		return 0
	}
	else if (p === "PAPER" && c === "ROCK") {
		console.log("You Win")
		return 0
	}
	else if (p === "PAPER" && c === "SCISSORS") {
		console.log("Computer Wins")
		return 1
	}
	else if (p === "SCISSORS" && c === "ROCK") {
		console.log("Computer Wins")
		return 1
	}
	else if (p === "SCISSORS" && c === "PAPER") {
		console.log("You win")
		return 0
	}
}

let game = () => {
	let p = 0
	let c = 0
	//for (var i=0; i<5; i++) {
		let w = winner()
		if (w === 1) c++
		if (w === 0) p++
	//}
	console.log(p)
	console.log(c)
	if (p > c) console.log("You won the game")
	else if (p < c) console.log("You Lost the game")
	else console.log("Tie")
}
game()

