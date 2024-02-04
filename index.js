const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions
const questions = [
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your GitHub username?',
      validate: input => (input !== '') ? true : 'Username is required',
    },
    {
      type: 'input',
      name: 'emailAddress',
      message: 'What is your email address?',
      validate: input => (input !== '') ? true : 'Email is required',
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your project\'s name?',
      validate: input => (input !== '') ? true : 'Project name is required',
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Please write a short description of your project:',
      validate: input => (input !== '') ? true : 'Description is required',
    },
    {
      type: 'list',
      name: 'projectLicense',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
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
      validate: input => (input !== '') ? true : 'Instructions are required',
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

    // Write the user input to a README file
    fs.writeFile('README.md', htmlContent, (err) => {
      if (err) {
        console.error('Error writing README file:', err);
      } else {
        console.log('Generating README...');
      }
    });
  })
  .catch(error => console.error('Error occurred:', error));
