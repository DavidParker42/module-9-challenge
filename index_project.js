const inquirer = require('inquirer');
const fs = require('fs');

const generatemarkdowncontent = ({ projectName, license, contribute, tests, questions }) =>{}

inquirer
  .prompt([
    {
        type: 'input', 
        name: 'projectName',
        message: 'What is your projects name?',
    },
    {
        type:"input",
        name: "license",
        message:"What license did you use?",
    },
    {
        type: "input",
        name: "contribute",
        message:"how cna others contribute to this project?",
    },
    {
        type: "input",
        name: "tests",
        message:"how can others use the test",
    },
    {
        type: "input",
        name: "questions",
        message:"",
    },
  ])

  .then((answers) => {
    const htmlPageContent = generatemarkdowncontent(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
    
  

//   is generated with the title of my project and sections entitled Description, Installation, Usage, , Contributing, Tests, and Questions
