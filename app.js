const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];
function chooseRole() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What kind of employee do you want to add?",
        choices: ["Manager", "Engineer", "Intern", "Nobody"],
      },
    ])
    .then((answers) => {
      switch (answers.role) {
        case "Manager":
           addManager()
          break;
        case "Engineer":
             addEngineer()
          break;
        case "Intern":
           addIntern()
          break;
        default:
          buildTeam();
      }
    });
}
function addManager(){
    inquirer
    .prompt([
      {
        type: "input",
        name: "eName",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "eId",
        message: "What is your ID?",
    },
    {
        type: "input",
        name: "eEmail",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "github",
        message: "What is Github name?",
    },
]).then((answers) => {
    let manager = new Manager(answers.eName, answers.eId, answers.eEmail, answers.github)
    employees.push(manager)
    chooseRole()
})
function addEngineer (){
    inquirer
    .prompt([
      {
        type: "input",
        name: "eName",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "eId",
        message: "What is your ID?",
    },
    {
        type: "input",
        name: "eEmail",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "github",
        message: "What is Github name?",
    },
]).then((answers) => {
    let engineer = new Engineer(answers.eName, answers.eId, answers.eEmail, answers.github)
    employees.push(engineer)
    chooseRole()
})
    function addIntern(){
        inquirer
        .prompt([
          {
            type: "input",
            name: "eName",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "eLocation",
            message: "What is your location?",
        },
        {
            type: "input",
            name: "eEmail",
            message: "What email?",
        },
        {
            type: "input",
            name: "eSchool",
            message: "What school did you attend?",
        },

]).then((answers) => {
    let Intern = new Intern(answers.eName, answers.eLocation, answers.eEmail, answers.eSchool)
    employees.push(Intern)
    chooseRole()
})
    function buildTeam (){
    if (!fs.existsSync(OUTPUT_DIR)){
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(employees), "utf8")
    }
   chooseRole()  
