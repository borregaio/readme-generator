const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'emailAddress',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your project\'s name?',
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Please write a short description of your project:',
    },
    {
      type: 'list',
      name: 'projectLicense',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'installCommand',
      message: 'What command should be run to install dependencies?',
      default: 'npm i',
    },
    {
      type: 'input',
      name: 'testCommand',
      message: 'What command should be run to run tests?',
      default: 'npm test',
    },
    {
      type: 'input',
      name: 'userInstructions',
      message: 'What does the user need to know about using the repo?',
    },
    {
      type: 'input',
      name: 'contributionInstructions',
      message: 'What does the user need to know about contributing to the repo?',
    }
  ];

// Use inquirer to prompt the questions
inquirer.prompt(questions)
  .then(data => {
    const htmlContent = generateMarkdown(data)
    ;

    // Write the HTML content to a file (e.g., userInfo.html)
    fs.writeFile('README.md', htmlContent, (err) => {
      if (err) {
        console.error('Error writing HTML file:', err);
      } else {
        console.log('User information saved to README.md');
      }
    });
  })
  .catch(error => console.error('Error occurred:', error));
  

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
