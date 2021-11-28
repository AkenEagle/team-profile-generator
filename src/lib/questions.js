const managerQuestions = [
  {
    name: "manager_name",
    message: "What's the team manager's name?",
    type: "input",
  },
  {
    name: "manager_id",
    message: "What's the team manager's employee ID?",
    type: "number",
  },
  {
    name: "manager_email",
    message: "What's the team manager's email address?",
    type: "input",
  },
  {
    name: "manager_office",
    message: "What's the team manager's office number?",
    type: "number",
  },
];

const addMoreEmployees = [
  {
    name: "add_more_list",
    message: "Do you want to add more employees?",
    type: "list",
    choices: ["Add ENGINEER", "Add INTERN", "FINISH"],
    default: "Add ENGINEER",
  },
];

const engineerQuestions = [
  {
    name: "engineer_name",
    message: "What's the engineer's name?",
    type: "input",
  },
  {
    name: "engineer_id",
    message: "What's the engineer's employee ID?",
    type: "number",
  },
  {
    name: "engineer_email",
    message: "What's the engineer's email address?",
    type: "input",
  },
  {
    name: "engineer_github",
    message: "What's the engineer's GitHub username?",
    type: "input",
  },
];

const internQuestions = [
  {
    name: "intern_name",
    message: "What's the intern's name?",
    type: "input",
  },
  {
    name: "intern_id",
    message: "What's the intern's employee ID?",
    type: "number",
  },
  {
    name: "intern_email",
    message: "What's the intern's email address?",
    type: "input",
  },
  {
    name: "intern_school",
    message: "What's the intern's school?",
    type: "input",
  },
];

module.exports = {
  managerQuestions,
  addMoreEmployees,
  engineerQuestions,
  internQuestions,
};
