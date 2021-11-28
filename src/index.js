const inquirer = require("inquirer");
const { managerQuestions, addMoreEmployees } = require("./lib/questions");
const Manager = require("./lib/Manager");

const askQuestions = async () => {
  // Ask manager questions
  const managerAnswers = await inquirer.prompt(managerQuestions);
  //   Create manager from answers
  const teamManager = new Manager(
    managerAnswers.manager_name,
    managerAnswers.manager_id,
    managerAnswers.manager_email,
    managerAnswers.manager_office
  );
  // Ask add more employees
  let moreEmployeesAnswers = await inquirer.prompt(addMoreEmployees);
  //   If the user didn't select finish
  while (moreEmployeesAnswers.add_more_list !== "FINISH") {
    console.log("SELECT FINISH!!!");
    moreEmployeesAnswers = await inquirer.prompt(addMoreEmployees);
  }
};

askQuestions();
