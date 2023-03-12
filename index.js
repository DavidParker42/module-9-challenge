// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generatemarkdowncontent = ({ projectName, license, contribute, tests, questions }) =>{}

// TODO: Create an array of questions for user input
function promptGet(){
    const questions = [];
    inquirer
      .prompt([
        {
            type: 'input', 
            name: 'githubName',
            message: 'What is your GitHub username?',
        },
        {
            type:"input",
            name: "email",
            message:"What is your email address?",
        },
        {
            type: "input",
            name: "projectName",
            message:"What is your projects name?",
        },
        {
            type: "input",
            name: "description",
            message:"Please write a short description of your project",
        },
        {
            type: "checkbox",
            name: "license",
            message:"What kind of license should your project have?",
            choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
        },
        {
          type: "input",
          name: "dependencies",
          message:"What command should be run to install dependencies?",
      },
      ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
.then((response) => {
    console.log(response);
    fs.appendFile("response.txt", JSON.stringify(response, null, '\t'), (err) =>
      err ? console.error(err) : console.log("Saved")
    )
    });
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
