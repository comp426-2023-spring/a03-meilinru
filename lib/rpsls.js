export function rps(shot) {
	const hand = ["rock", "paper", "scissors"];
	const computer = hand[Math.floor(Math.random() * hand.length)];
	if (shot == null) {
		return {"player": computer}
	}
	if (!choices.includes(shot)){
        	throw new RangeError("Invalid input")
    	}
    	
	if (shot === computer) {
        const result = "tie";
        return {"player": shot, "opponent": computer, "result": result}
      } else if (
        (shot === "rock" && computer === "scissors") ||
        (shot === "paper" && computer === "rock") ||
        (shot === "scissors" && computer === "paper")
      ) {
        const result = "win"
        return {"player": shot, "opponent": computer, "result": result}
      } else {
        const result = "lose"
        return {"player": shot, "opponent": computer, "result": result}
      }
}

export function rpsls(shot) {
	const hand = ["rock", "paper", "scissors", "lizard", "spock"];
	const computer = hand[Math.floor(Math.random() * hand.length)];
	if (shot == null) {
		return {"player": computer};
	}
	
	if (!choices.includes(shot)){
        throw new RangeError("Invalid input")
    }
    
    if (shot === computer) {
        const result = "tie";
        return {"player": shot, "opponent": computer, "result": result}
      } else if (
        (shot === "rock" && computer === "scissors") ||
        (shot === "paper" && computer === "rock") ||
        (shot === "rock" && computer === "lizard") ||
        (shot === "lizard" && computer === "spock") ||
        (shot === "spock" && computer === "scissors") ||
        (shot === "scissors" && computer === "lizard") ||
        (shot === "lizard" && computer === "paper") ||
        (shot === "paper" && computer === "spock") ||
        (shot === "spock" && computer === "rock") ||
        (shot === "scissors" && computer === "paper")
      ) {
        const result = "win"
        return {"player": shot, "opponent": computer, "result": result}
      } else {
        const result = "lose"
        return {"player": shot, "opponent": computer, "result": result}
      }

}
