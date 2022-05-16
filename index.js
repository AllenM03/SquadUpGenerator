const Engineer = require("/lib/engineer");
const Intern = require("/lib/intern");
const Manager = require("/lib/manager");
const inquirer = require("inquirer");
const fs = require("fs");
const Generator = require("./src/generator");
const htmlGenerator = require("./src/htmlGenerator");

// Manager questions
const starter = () => {
    inquirer .prompt([
      {
        type: 'confirm',
        message: "Would you like to add a manager?".brightGreen,
        name: 'manager',
      },
    ])
    .then(({manager}) => {
      if(manager){
        inquirer.prompt([
          {
            type: 'input',
            message: "Please enter the team manager's name...".brightMagenta,
            name: 'name',
            validate: (value) => {if (value){return true} else 
            {return console.log("Please enter a valid name".red.dim)}}
          },
          {
            type: 'input',
            message: "Please enter the team manager's employee ID...".brightMagenta,
            name: 'id',
            default: defaultID
          },
          {
            type: 'input',
            message: "Please enter the team manager's email address...".brightMagenta,
            name: 'email',
            validate: (value) => {if (value){return true} else 
            {return console.log("Please enter a valid email address".red.dim)}}
            },
            {
                type: 'input',
                message: "Please enter the team manager's office number...".brightMagenta,
                name: 'office',
                validate: (value) => {if (value){return true} else 
                {return console.log("Please enter a valid office number".red.dim)}}
              }
            ])
          }
        }
    })
}

