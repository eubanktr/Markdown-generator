// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: "Enter the project title:",
    name: 'projTitle',
  },
  {
    type: 'input',
    message: "Please enter the description of your project:",
    name: 'projDescription',
  },
  {
    type: 'input',
    message: "Enter installation notes:",
    name: 'projNotes',
  },
  {
    type: 'input',
    message: "Please include usage information:",
    name: 'projUsage',
  },
  {
    type: 'input',
    message: "Include guidelines for contribution:",
    name: 'projContribution',
  },
  {
    type: 'input',
    message: "Include guidlines for testing:",
    name: 'projTesting',
  },
  {
    type: 'checkbox',
    message: "Please select license(s) below:",
    name: 'projLicense',
    choices: [
      'MIT',
      'GNU AGPLv3',
      'GNU GPLv3',
      'GNU LGPLv3',
      'Mozilla Public 2.0',
      'Apache 2.0',
      'Boost Software 1.0',
      'The Unlicense'
    ]
  },
  {
    type: 'input',
    message: "Enter your GitHub username:",
    name: 'projGit',
  },
  {
    type: 'input',
    message: "Enter an email address for questions from users:",
    name: 'projEmail',
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.appendFile(fileName, data), (err) =>
//       err ? console.error(err) : console.log('Success')
// };

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  
  .then((answers) => {
    // Use user feedback for... whatever!!
    
    const markDown = generateMarkdown(answers);
   
    fs.writeFile('testREADME.md', markDown, (err) =>
      err ? console.log(err) : console.log('success')
      );
    })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong)
    }
  });
}

// Function call to initialize app
init();

// initializing write function

