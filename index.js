// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation information: ',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information: ',
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license: ',
        choices: ['Apache', 'Boost', 'BSD', 'Other']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributing guidelines: '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter tests information: '
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: '
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./files/${fileName}`, generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => writeToFile('README.md', answers))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
