const managerQuestions = [
  {
    name: "manager_name",
    message: "What's your team manager's name?",
    type: "input",
  },
  {
    name: "manager_id",
    message: "What's your team manager's employee ID?",
    type: "number",
  },
  {
    name: "manager_email",
    message: "What's your team manager's email address?",
    type: "input",
  },
  {
    name: "manager_office",
    message: "What's your team manager's office number?",
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

module.exports = { managerQuestions, addMoreEmployees };
