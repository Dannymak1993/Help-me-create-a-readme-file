const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage of this project?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'license',
        choices: ['MIT', 'Apache_2.0', 'GNU_GPLv3'],
    },
    {
        type: 'input',
        message: 'How can you contribute?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'What tests have been performed?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
])

    .then((response) => {
        const markdown = generateREADME(response);

        fs.writeFile('example/README.md', markdown, (err) =>
            err ? console.log(err) : console.log('Success! Your README.md file has been created.')
        );
    });

function generateREADME(response) {
    const {title, description, installation, usage, license, contribute, tests, email, username } = response;

    const badge = `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;

    const README = `

# ${title}

${badge}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

This project is licensed under the ${license} license.

## How to Contribute

${contribute}

## Tests

${tests}

## Questions

If you have any questions, please don't hesitate to reach out via email at [${email}](mailto:${email}) or through my [GitHub profile](https://github.com/${username}).
`;

    return README;
}