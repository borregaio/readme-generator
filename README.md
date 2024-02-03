# README File Generator

## Overview

The README File Generator is a command-line tool designed to streamline the process of creating professional and well-structured README files for your projects. By running the generator in your terminal and answering a series of prompts, you can effortlessly generate a README file tailored to your project's specifications.

## Demo Video

Watch the demo video [here](https://drive.google.com/file/d/1qIxdUSl03gTUbclC1HSiLUf66HlIJ7MR/view?usp=drive_link).

## Features

### User-Friendly Interface:
The tool provides a straightforward interface in the terminal, guiding users through a set of prompts to gather essential information about their project.

### Customizable Templates:
Generate README files with ease by answering prompts related to project details, installation instructions, usage guidelines, contribution guidelines, and more. The tool utilizes this input to create a comprehensive README template.

### Professional Output:
The resulting README file is formatted with markdown, ensuring a polished and standardized appearance. This makes it easy for others to quickly understand and engage with your project.

## Tech Stack
- JavaScript
- Node.js
- Inquirer

## Getting Started

1. **Clone the repository**
    ```console
    git clone https://github.com/borregaio/readme-generator
    ```

2. **Install dependencies**
    ```console
    npm install
    ```

3. **Open the index.js file in your terminal**
    ```console
    cd readme-generator
    node index.js
    ```

4. **Follow the Prompts:**
    Answer the prompts with relevant information about your project.

5. **Generated README:**
    Once you've completed the prompts, a professionally formatted README file will be created in the project's root directory.


## Steps Followed

### Firstly, a function is generated with the README file template and the template literals to add the user's input once the prompts have been answered:
```javascript
function generateMarkdown(data) {
  return `
  # ${data.projectName} ![License: ${data.projectLicense}](https://img.shields.io/badge/License-${data.projectLicense.replace(/\s+/g, '_')}-blue)

  ## Description
  ${data.projectDescription}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installCommand}
  
  ## Usage
  ${data.userInstructions}
  
  ## License
  ${data.projectLicense}
  
  ## Contributing
  ${data.contributionInstructions}
  
  ## Tests
  ${data.testCommand}
  
  ## Questions
  If you have any questions, you can contact me on the links below:
  - GitHub Username: [${data.githubUsername}](https://github.com/${data.githubUsername})
  - Email: ${data.emailAddress}
`;
}

module.exports = generateMarkdown;
```

### On the index.js file, require all the modules needed for this project:
```javascript
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
```

### An array of questions is created to be prompted to the user:
```javascript
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
      validate: input => (input !== '') ? true : 'Instructions are required',
    },
    {
      type: 'input',
      name: 'contributionInstructions',
      message: 'What does the user need to know about contributing to the repo?',
    }
  ];
```

### Use Inquirer to prompt the questions and catch the answers:
```javascript
inquirer.prompt(questions)
  .then(data => {
    const htmlContent = generateMarkdown(data)
    ;
```

### Finally, use the file system module to generate the final README file:
```javascript
    fs.writeFile('README.md', htmlContent, (err) => {
      if (err) {
        console.error('Error writing README file:', err);
      } else {
        console.log('Generating README...');
      }
    });
  })
  .catch(error => console.error('Error occurred:', error));
```