export { rps, rpsls }

function rps(shot) {
	let computer = Math.floor(Math.random()*3);
	computer = computer == 0 ? "rock" :
					computer == 1 ? "paper" :
					"scissors";

	if (shot == undefined) {
		return { player: computer };
	}

	let user = shot.toLowerCase();

	let options = ['rock', 'paper', 'scissor'];

	if (!options.includes(user)) {
			if (user === "lizard" || user === "spock") {
				console.error(`${shot} is out of range.`);
				throw new RangeError();
			} else {
				console.error(`${shot} is not a valid choice.`);
				throw new RangeError();
			}
		}

	let result = '';

	if (computer === user) {
		result = "tie";
	} else if (computer === "rock" && user === "scissors" || computer === "paper" && user === "rock" || computer === "scissors" && user === "paper") {
		result = "lose";
	} else {
		result = "win";
	}

	return { player: user,
		opponent: computer,
		result: result
	};
}

export function rpsls(shot) {
	let gameRules = {
		rock: {
			rock: 'tie',
			paper: 'win',
			scissors: 'lose',
			lizard: 'lose',
			spock: 'win'
		},
		paper: {
			rock: 'lose',
			paper: 'tie',
			scissors: 'win',
			lizard: 'win',
			spock: 'lose'
		},
		scissors: {
			rock: 'win',
            paper: 'lose',
            scissors: 'tie',
            lizard: 'lose',
            spock: 'win'
		},
		lizard: {
			rock: 'win',
            paper: 'lose',
            scissors: 'win',
            lizard: 'tie',
            spock: 'lose'
		},
		spock: {
			rock: 'lose',
            paper: 'win',
            scissors: 'lose',
            lizard: 'win',
            spock: 'tie'
		}
	}
	const ranNum = Math.trunc(Math.random() * 5);
	const choice = ["rock", "paper", "scissors", "lizard", "spock"];
	if(shot === undefined){
		return {"player": choice[ranNum]};
	}
	shot = shot.toLowerCase();
	
	if(!choice.includes(shot)){
		throw new RangeError("Shot is out of range");
	}
	
	let result = gameRules[choice[ranNum]][shot];
	
	return {player: shot, opponent: choice[ranNum], result: result}
}
