// function to generate markdown for README
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
