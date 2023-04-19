#!/usr/bin/env node

import {rps} from "../lib/rpsls.js"
import minimist from 'minimist';

var arg = minimist(process.argv.slice(2));

if (arg.h || arg.help) {
	help();
	process.exit();
}

if (arg.r || arg.rules) {
	rules();
	process.exit();
}

try {
	console.log(JSON.stringify(rps(argument._[0])));
} catch (error) {
	if (error instanceof RangeError) {
		console.log('Input is not in range');
		rules();
		process.exit();
	}
}

function help() {
   console.log(
     'Usage: node-rps [SHOT]
     Play Rock Paper Scissors (RPS)

	-h, --help      display this help message and exit
	-r, --rules     display the rules and exit

	Examples:
	node-rps        Return JSON with single player RPS result.
			e.g. {"player":"rock"}
	node-rps rock   Return JSON with results for RPS played against a simulated opponent.
			e.g {"player":"rock","opponent":"scissors","result":"win"}`
	);

function rules(){
    console.log(
        `Rules for Rock Paper Scissors:
        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors`
    );
