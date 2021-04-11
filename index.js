 //TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const util = require('util');

// TODO: Create an array of questions for user input
inquirer.prompt(
    [
        {
            type:'input',
            name:'projectTitle',
            message: 'What is the project title?',
            //validate
            validate: (value)=> {if (value){return true} else {return "I need a value to contine"}},
        },
        {
            type:'input',
            name:'description',
            message: 'Write a brief description of your project:',
            //validate
            validate: (value)=> {if (value){return true} else {return "I need a value to contine"}},
        },
        {
            type:'input',
            name:'installation',
            message: 'How do you install your project?',
            //validate
            validate: (value)=> {if (value){return true} else {return "I need a value to contine"}},  
        },
        {
            type:'input',
            name:'usage',
            message: 'What is this project used for',
            //validate
            validate: (value)=> {if (value){return true} else {return "I need a value to contine"}},  
        },
        {
            type:'input',
            name:'credits',
            message: 'List any contributors:',
            //validate
            validate: (value)=> {if (value){return true} else {return "I need a value to contine"}},  
        },
        {
            type:'list',
            name:'license',
            message: 'Choose the appropriate license for this project:',
            choice:[
                "apache",
                "academic",
                "GNU",
                "ISC",
                "MIT",
                "mozilla",
                "open"
            ],
            //validate
            validate: (value)=> {if (value){return true} else {return "I need a value to contine"}},  
        },
        {
            type:'input',
            name:'username',
            message: 'GitHub username:',
            //validate
            validate: (value)=> {if (value){return true} else {return "I need a value to contine"}}, 
        },
        {
            type:'input',
            name:'email',
            message: 'What is your email?',
            //validate
            validate: (value)=> {if (value){return true} else {return "I need a value to contine"}}, 
        }
    ]
)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
