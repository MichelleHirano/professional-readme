 //TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const util = require('util');

//API and Makrdown
const api = require('./utils/api');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = [
        {
            type:'input',
            name:'username',
            message: 'What is your Github username? (no @)',
            //validate
            validate: (value)=> {if (value){return true} else {return "I need a value to contine"}},
         },

         {
            type:'input',
            name:'repo',
            message: 'What is the name of your GitHub repo?',
            //validate
            validate: (value)=> {if (value){return true} else {return "I need a value to contine"}},
         },
    
        {
            type:'input',
            name:'title',
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
            message:  'Any additional contributors?',
        },
        {
            type:'checkbox',
            name:'license',
            message: 'Choose the appropriate license for this project:',
            choices:[
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
            name:'tests',
            message: 'If applicable, provide anytests written for your application and examples on how to run them.',
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
    ];

