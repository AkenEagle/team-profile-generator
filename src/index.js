const inquirer = require("inquirer");
const { managerQuestions, addMoreEmployees } = require("./lib/questions");
const Manager = require("./lib/Manager");

const askQuestions = async () => {
  // Ask manager questions
  const managerAnswers = await inquirer.prompt(managerQuestions);
  //   Create manager
  const teamManager = new Manager(managerAnswers.manager_name);
  // Ask add more employees
  const moreEmployeesAnswers = await inquirer.prompt(addMoreEmployees);
};

askQuestions();
