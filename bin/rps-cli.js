#!/usr/bin/env node

import {rps} from "../lib/rpsls.js"
import minimist from 'minimist';

var argv = minimist(process.argv.slice(2));

if (argv.h || argv.help) {
	console.log('Usage: node-rps [SHOT]
			Play Rock Paper Scissors (RPS)

			-h, --help      display this help message and exit
			-r, --rules     display the rules and exit

			Examples:
			node-rps        Return JSON with single player RPS result.
			e.g. {"player":"rock"}
			node-rps rock   Return JSON with results for RPS played against a simulated opponent.
			e.g {"player":"rock","opponent":"scissors","result":"win"}`);
	process.exit(0);
}

if (argv.r || argv.rules) {
	console.log('Rules for Rock Paper Scissors:

			- Scissors CUTS Paper
			- Paper COVERS Rock
			- Rock CRUSHES Scissors');
	process.exit(0);
}

let shot = argv._[0]

try {
	console.log(JSON.stringify(rps(shot)));
} catch (e) {
		console.log(`Usage: node-rps [SHOT]
				Play Rock Paper Scissors (RPS)

				-h, --help      display this help message and exit
				-r, --rules     display the rules and exit

				Examples:
				node-rps        Return JSON with single player RPS result.
				e.g. {"player":"rock"}
				node-rps rock   Return JSON with results for RPS played against a simulated opponent.
				e.g {"player":"rock","opponent":"scissors","result":"win"}`);
		console.log(`Rules for Rock Paper Scissors:
				- Scissors CUTS Paper
				- Paper COVERS Rock
				- Rock CRUSHES Scissors`); 

}

