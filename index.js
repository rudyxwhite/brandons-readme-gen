// TODO: Include packages needed for this application
 const fs = require('fs')
 const inquirer = require('inquirer')
 const markdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input


const userQuestions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name:'title'
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name:'description'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name:'installationProcess'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name:'usage'
    },
    {
        type: 'input',
        message: 'Please provide a screenshot from your assets folder in the correct format: "![alt text](assets/images/screenshot.png)"',
        name:'screenshot'
    },
    {
        type: 'input',
        message:'Please enter your github username.',
        name:'github'
    },
    {
        type: 'input',
        message: 'Please type the link to your repository.',
        name:'repo'
    },
    {
        type: 'input',
        message: 'Please enter any necessary contact information, such as email or a link to social media account.',
        name:'contact'
    },
    {
        type: 'list',
        message: 'Please select the license used for this project.',
        name:'license',
        choices: ['MIT', 'W3C', 'ISC', 'AAL', 'NTP', 'No license required!']
    },
    {
        type: 'input',
        message: 'How would someone contribute to this project?',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'If you wrote tests for your application, provide examples on how to run them here.',
        name: 'tests'
    }

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("New README written successfully!");
  }
})

}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(userQuestions)
        .then(data => {
            console.log("Data: ", data);  // Data [Object object]

            // pass the collected data to 
            let result = markdown(data);
            console.log("Markdown: ", result);
            writeToFile("newREADME.md", result);
        })
        .catch(err => {
            throw err;
        })

    

}

function generateMarkdown(data) {
    return;
}

// Function call to initialize app
init();

