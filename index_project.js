const inquirer = require('inquirer');
const fs = require('fs');

const generatemarkdowncontent = ({ githubName, email, projectName, description, license, dependencies }) =>{
  return `
  # Project Name
  ${projectName}
  ![license](https://img.shields.io/badge/license-${license}-green)
  ## Table of Contents
  1. [Description](#description)
  2. [Github](#github)
  3. [Email](#email)
  3. [License](#license)
  4. [Dependencies](#dependencies)
  
  ## Description
  ${description}

  ## Github
  [myGithub](https://www.github.com/${githubName})

  ## Email
  ${email}

  ## License
  ${license}

  ## Dependencies
  ${dependencies}
  `
}

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
        type: "list",
        name: "license",
        message:"What kind of license should your project have?",
        choices: ["MIT", "Apache-2.0", "GPL-3.0", "BSD-3", "None"],
    },
    {
      type: "input",
      name: "dependencies",
      message:"What command should be run to install dependencies?",
  },
  ])

  .then((answers) => {
    // const htmlPageContent = generatemarkdowncontent(answers);
    // console.log(htmlPageContent)

    fs.writeFile('readme.MD', generatemarkdowncontent(answers), (err) =>
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

  
// //  .then((response) => {
//     console.log(response,"response");
//    const markdown =generateREADME(response);
//    fs.writeFile('README.MD', markdown, (err) =>
//    err ? console.log(err) : console.log('Successfully created README.MD!')
//  );

//   is generated with the title of my project and sections entitled Description, Installation, Usage, , Contributing, Tests, and Questions
