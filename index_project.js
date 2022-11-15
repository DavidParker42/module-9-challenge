const inquirer = require('inquirer');
const fs = require('fs');

const generatemarkdowncontent = ({ projectName, license, contribute, tests, questions }) =>{}

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

.then((answers) => {
  const htmlPageContent = generateHTML(answers);

  fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
});


  // const generateReadme = ({githubName, email, projectName, description, license})
  //   `${githubName}
    
  //   ${email}
    
  //   ${projectName}
    
  //   ${description}

  //   ${license}
    
  //   ${dependencies}`

  

//   is generated with the title of my project and sections entitled Description, Installation, Usage, , Contributing, Tests, and Questions
