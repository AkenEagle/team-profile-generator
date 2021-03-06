const inquirer = require("inquirer");
const {
  managerQuestions,
  addMoreEmployees,
  engineerQuestions,
  internQuestions,
} = require("./lib/questions");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const createTeamPage = require("./createTeamPage");
const createTeamPageStyling = require("./createTeamPageStyling");
const fs = require("fs");
const open = require("open");

const createManager = (managerAnswers) => {
  return new Manager(
    managerAnswers.manager_name,
    managerAnswers.manager_id,
    managerAnswers.manager_email,
    managerAnswers.manager_office
  );
};

const createEngineer = (engineerAnswers) => {
  return new Engineer(
    engineerAnswers.engineer_name,
    engineerAnswers.engineer_id,
    engineerAnswers.engineer_email,
    engineerAnswers.engineer_github
  );
};

const createIntern = (internAnswers) => {
  return new Intern(
    internAnswers.intern_name,
    internAnswers.intern_id,
    internAnswers.intern_email,
    internAnswers.intern_school
  );
};

const askTeamQuestions = async () => {
  // Ask manager questions
  const managerAnswers = await inquirer.prompt(managerQuestions);

  //   Create manager from answers
  const teamManager = createManager(managerAnswers);

  // Ask add more employees
  let moreEmployeesAnswers = await inquirer.prompt(addMoreEmployees);

  let engineers = [];
  let interns = [];

  //   If the user didn't select finish
  while (moreEmployeesAnswers.add_more_list !== "FINISH") {
    if (moreEmployeesAnswers.add_more_list === "Add ENGINEER") {
      // Ask Engineer questions
      const engineerAnswers = await inquirer.prompt(engineerQuestions);

      //   Create Engineer
      const teamEngineer = createEngineer(engineerAnswers);

      //   Add Engineer in the Engineers array
      engineers.push(teamEngineer);
    } else {
      // Ask Intern questions
      const internAnswers = await inquirer.prompt(internQuestions);

      //   Create Intern
      const teamIntern = createIntern(internAnswers);

      //   Add Intern in the Interns array
      interns.push(teamIntern);
    }

    // Return to the add more employees menu
    moreEmployeesAnswers = await inquirer.prompt(addMoreEmployees);
  }

  //   Create the HTML
  const pageHTML = createTeamPage(teamManager, engineers, interns);
  //   Create the CSS
  const pageCSS = createTeamPageStyling();
  //   Create the HTML file
  fs.writeFile("./dist/index.html", pageHTML, (err) => {
    if (err) throw err;
  });
  //   Create the CSS file
  fs.writeFile("./dist/styles.css", pageCSS, (err) => {
    if (err) throw err;
  });

  //   Open the page
  await open("./dist/index.html", { wait: true });

  //   Alert the user
  console.log(
    "Your generated Team Members page has been opened in your browser."
  );
};

askTeamQuestions();
