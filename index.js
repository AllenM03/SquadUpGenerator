const Engineer = require("/lib/engineer");
const Intern = require("/lib/intern");
const Manager = require("/lib/manager");
const inquirer = require("inquirer");
const fs = require("fs");
const Generator = require("./src/generator");
const htmlGenerator = require("./src/htmlGenerator");
let generatedTemplate = "";
let defaultID = 1

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
        .then(function({name, id, email, office}) {
            let manager = new Manager(name, id, email, office);
            let generator = new Generator();
            generatedTemplate += `${generator.manangerGenerator(manager)}`;
            menu();
          })
        } else {
          defaultID = 0;
          menu(); 
        }
    })
}

//Employee type
const menu = () => {
    defaultID++
    inquirer.prompt([
      {
        type: 'list',
        message: "Please select a new employee or end choice",
        name: 'menu',
        choices: ["Engineer".brightGreen,"Intern".brightMagenta, "End".brightRed]
      }  
    ])
    .then((response) => {
        if (response.menu === "Engineer".brightGreen){
            engineerQuestions();
        }   else if (response.menu === "Intern".brightMagenta) {
            internQuestions();
        }   else {
            endTeam();
        }
        
    })
}

//Engineer questions
const engineerQuestions = () => {
  inquirer.prompt([
      {
        type: 'input',
        message:"Please enter the engineer's name...".brightGreen,
        name: 'name',
        validate: (value) => {if (value){return true} else
        {return console.log("Please enter a valid name".blue.dim)}}
      },
      {
        type: 'input',
        message: "Please enter the engineer's employee ID",
        name: 'id',
        default: defaultID
      },
      {
        type: 'input',
        message: "Please enter the engineer's email address...".brightBlue,
        name: 'email',
        validate: (value) => {if (value){return true} else 
        {return console.log("Please enter a valid email address".red.dim)}}
      },
      {
        type: 'input',
        message: "Please enter the engineer's Github username...".brightBlue,
        name: 'github',
        validate: (value) => {if (value){return true} else 
        {return console.log("Please enter a valid Github username".red.dim)}}
      }
    ])
    .then(function({name, id, email, github}) {
      let engineer = new Engineer(name, id, email, github);
      let generator = new Generator();
      generatedTemplate += `\n            ${generator.engineerGenerator(engineer)}`
      menu();
    })
  }

// Intern questions
const internQuestions = () => {
  inquirer.prompt([ 
    {
      type: 'input',
      message: "Please enter the intern's name...".brightYellow,
      name: 'name',
      validate: (value) => {if (value){return true} else 
      {return console.log("Please enter a valid name".red.dim)}}
    },
    {
      type: 'input',
      message: "Please enter the intern's employee ID...".brightYellow,
      name: 'id',
      default: defaultID
    },
    {
      type: 'input',
      message: "Please enter the intern's email address...".brightYellow,
      name: 'email',
      validate: (value) => {if (value){return true} else 
      {return console.log("Please enter a valid email address".red.dim)}}
    },
    {
      type: 'input',
      message: "Please enter the intern's school...".brightYellow,
      name: 'school',
      validate: (value) => {if (value){return true} else 
      {return console.log("Please enter a valid school".red.dim)}}
    }
  ])