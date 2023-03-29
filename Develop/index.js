// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user input to input answers
//Nmae, Description, Installation, Usage, Contributing, and Tests, 
const questions = [
{
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project?',
},

{
    type: 'input',
    name: 'description',
    message: 'Please enter a description of your project',
},
{
    type: 'input',
    name: 'installation',
    message: 'Please tell us the steps to install your project',

},
{
    type: 'input',
    name: 'usage',
    message: 'How will this project be used? Please provide screenshots as needed',

},

 {
    type: 'input',
    name: 'contributors',
    message: 'list your contributors and there Github links',
 },

{ 
    type: 'input',
    name:'tests',
    message: 'Please write test examples for your application',
},

{   
    type: 'list',
    name:'license',
    message: 'Choose your license',
    choices: ['MIT', 'Mozilla', 'Modified BSD', 'Zlib', 'None'],

},
{
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',
},

{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address for people to contact you with questions:',
},
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(`File ${fileName} has been generated!`);
    });
  }
// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=> {
        const fileName = 'README.md';
        const data = generateMarkdown(answers);
        writeToFile(fileName, data);
    })
    .catch((error) => {
        console.error(error);
    });
}

// Function call to initialize app
init();
