//lets import all our tools

//imports inquirer
import inquirer from 'inquirer';
//imports our generateLogo modules
import generateLogo from './util/generateLogo.mjs';
//imports our questions
import questPkg from './util/userQuestions.mjs';
//imports fs (how will write the svg to a file)
import fsPkg from 'fs';
//import a test function
import { testFunction } from './util/generateLogo.mjs';

//keep variables whole and making new ones when necassary
const questions = questPkg;
const fs = fsPkg;

console.log(questions);
console.log(generateLogo);

//We need to initalize the app... 

function init() {
    //... and ask the questions
    inquirer
    .prompt(questions)
        //then we use the answers to generate the logo
        .then(answers => {
            console.log(answers);
            testFunction(answers.questShape)
            let templateLogo = generateLogo(answers)
            //we write the templateLogo to a svg file(i think)
            fs.writeFileSync("logo.svg", templateLogo)
        })
}

init();