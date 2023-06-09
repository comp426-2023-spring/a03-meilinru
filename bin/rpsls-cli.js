#!/usr/bin/env node
//Import all packages
import minimist from "minimist";
import { rpsls } from '../lib/rpsls.js';
const argv = minimist(process.argv.slice(2));
if(argv.h || argv.help){
    //Help documentation
    console.log('Usage: node-rpsls [SHOT]' +
    'Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!' +
    '' +
    '  -h, --help        display this help message and exit' + 
    '  -r, --rules       display the rules and exit' +
    ''+
    'Examples:' +
    '  node-rpsls        Return JSON with single player RPSLS result.'+
    '                    e.g. {"player":"rock"}' +
    '  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.' +
    '                    e.g {"player":"rock","opponent":"Spock","result":"lose"}');
    process.exit(0); //Exit successfully
}
if(argv.r || argv.rules) {
    //Rules documentation
    console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:' +
    ''+
    '- Scissors CUTS Paper'+
    '- Paper COVERS Rock' +
    '- Rock SMOOSHES Lizard' +
    '- Lizard POISONS Spock' +
    '- Spock SMASHES Scissors' +
    '- Scissors DECAPITATES Lizard' +
    '- Lizard EATS Paper' +
    '- Paper DISPROVES Spock' +
    '- Spock VAPORIZES Rock' +
    '- Rock CRUSHES Scissors');
    process.exit(0);
}
//Try-catch block for error handling
try{
    const result = rpsls(argv._[0]);
    console.log(JSON.stringify(result));
    process.exit(0); //Exit successfully
}
catch(error){
    if (error instanceof RangeError){
        console.log('Usage: node-rpsls [SHOT]' +
        'Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!' +
        '' +
        '  -h, --help        display this help message and exit' + 
        '  -r, --rules       display the rules and exit' +
        ''+
        'Examples:' +
        '  node-rpsls        Return JSON with single player RPSLS result.'+
        '                    e.g. {"player":"rock"}' +
        '  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.' +
        '                    e.g {"player":"rock","opponent":"Spock","result":"lose"}');
        //Display rules
        console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:' +
        ''+
        '- Scissors CUTS Paper'+
        '- Paper COVERS Rock' +
        '- Rock SMOOSHES Lizard' +
        '- Lizard POISONS Spock' +
        '- Spock SMASHES Scissors' +
        '- Scissors DECAPITATES Lizard' +
        '- Lizard EATS Paper' +
        '- Paper DISPROVES Spock' +
        '- Spock VAPORIZES Rock' +
        '- Rock CRUSHES Scissors');
        process.exit(1); //Exit with error
    }
}
