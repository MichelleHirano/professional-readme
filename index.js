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
            name:'userName',
            message: 'What is your Github username? (no @)',
            default:'MichelleHirano',
            //validate
            validate: (value)=> {if (value){return true} else {return "I need a value to contine"}},
         },

         {
            type:'input',
            name:'repo',
            message: 'What is the name of your GitHub repo?',
            default:'det-it-done',
            //validate
            validate: (value)=> {if (value){return true} else {return "I need a value to contine"}},
         },
    
        {
            type:'input',
            name:'title',
            message: 'What is the project title?',
            default:'Get It Done',
            //validate
            validate: (value)=> {if (value){return true} else {return "I need a value to contine"}},
        },
        {
            type:'input',
            name:'description',
            message: 'Write a brief description of your project:',
            default: ' DESCRIPTION HERERERERERRE',
            //validate
            validate: (value)=> {if (value){return true} else {return "I need a value to contine"}},
        },
        {
            type:'input',
            name:'installation',
            message: 'How do you install your project?',
            default:'download',
            //validate
            validate: (value)=> {if (value){return true} else {return "I need a value to contine"}},  
        },
        {
            type:'input',
            name:'usage',
            message: 'What is this project used for',
            default: 'stuff',
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
        },

        {
            type:'input',
            name:'email',
            message: 'What is your email?',
            default:'michelle@gmail.com',
            //validate
            validate: (value)=> {if (value){return true} else {return "I need a value to contine"}}, 
        }
    ];

function writeToFile(fileName, data){
    fs.writeFile(fileName, data, err => {
        if (err){
            return console.log(err);
        }
        console.log("Success! Your README.md file has been generated")
    });
}

    const writeFileAsync = util.promisify(writeToFile);


async function init() {
    try{
        //inquirer questions
        const userResponse = await inquirer.prompt(promptUser);
        console.log("Your responses:", userResponse);
        console.log("Thank you for your responses! Fetching GitHub data...");

        //call GitHub
        const userInfo = await api.userName(userResponse);
        console.log("Your GitHub info:", userInfo);

        //generate Markdown
        console.log("Generating your README...");
        const markdown = generateMarkdown(userResponse, userInfo);
        console.log(markdown);

        //write to file
        await writeFileAsync('ExampleReadme.md', markdown);
    }
    catch(error){
        console.log(error);
    }
};

init();