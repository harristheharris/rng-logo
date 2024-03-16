//lets import all our tools

//imports inquirer
const inquirer = require('inquirer');
//imports our generateLogo modules
const generateLogo = require('./util/generateLogo.mjs');
//imports our questions
const questPkg = require('./util/userQuestions.mjs');
//imports fs (how will write the svg to a file)
const fsPkg = require('fs');

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
            let templateLogo = generateLogo(answers)
            //we write the templateLogo to a svg file(i think)
            fs.writeFileSync("logo.svg", templateLogo)
        })
}

init();