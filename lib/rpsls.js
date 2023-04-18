export function rps(shot) {
	const options = ["rock", "paper", "scissors"];
	if (shot == undefined) {
		return {player: options[Math.floor(Math.random() * 3)]};
	}
}

export function rpsls(shot) {
	const options = ["rock", "paper", "scissors", "lizard", "spock"];
	if (shot == undefined) {
		return {player: options[Math.floor(Math.random() * 5)]};
	}
}
