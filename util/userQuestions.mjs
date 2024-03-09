//create the questions

const questions = [
    { //use this data as a top bar display
        type: "input",
        message: "What is your GitHub username?",
        name: "username-github"
    },
    /* { //funsies
        type: "confirm",
        message: "Would you like to generate a logo?",
        name: "yesNoLogo"
    },
    { // more funsies
        type: "list",
        message: "...why did you run the program then??",
        choices: ["I didn't mean to click that", "Get me out of this program"],
        when(answers){
            
        }   
    } */
    {
        type: "list",
        message: "What shape would you like your logo?",
        choices: ["Square", "Circle", "Triangle"],
        name: "questShape"
    },
    {
        type: "input",
        message: "What color would you like your shape?",
        name: "questShapeColor"
    },
    {
        type: "input",
        message: "Enter three characters for your logo",
        name: "questString"
    },
    {
        type: "input",
        message: "What color would you like your characters to be?",
        name: "questFontColor"
    }
]