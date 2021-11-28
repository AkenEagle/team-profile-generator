const inquirer = require("inquirer");
const questions = require("./lib/questions");

inquirer.prompt(questions);

console.log("hi");
