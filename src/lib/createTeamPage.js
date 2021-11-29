const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const createManagerCard = (Manager) => {
  return `<div class="card text-center" style="width: 18rem" id="manager-card">
<div class="card-body">
  <h2 class="card-title mb-2" id="manager-name">${Manager.getName().toUpperCase()}</h2>
  <h4 class="card-title">
    <i class="fas fa-user-secret" id="manager-role"></i>${Manager.getRole()}
  </h4>
  <ul class="list-group list-group-flush mt-4 mb-2">
    <li class="list-group-item text-white" id="manager-id">ID: ${Manager.getId()}</li>
    <li class="list-group-item text-white" id="manager-email">
      Email: ${Manager.getEmail()}
    </li>
    <li class="list-group-item text-white" id="manager-office">
      Office number: ${Manager.getOfficeNumber()}
    </li>
  </ul>
</div>
</div>`;
};

const createEngineersCards = (engineers) => {
  let engineersCardsHTML = ``;
  engineers.forEach((Engineer) => {
    const thisEngineerCard = `<div class="card text-center" style="width: 18rem" id="engineer-card">
      <div class="card-body">
        <h2 class="card-title mb-2" id="engineer-name">${Engineer.getName().toUpperCase()}</h2>
        <h4 class="card-title">
          <i class="fas fa-user-secret" id="engineer-role"></i>${Engineer.getRole()}
        </h4>
        <ul class="list-group list-group-flush mt-4 mb-2">
          <li class="list-group-item text-white" id="engineer-id">ID: ${Engineer.getId()}</li>
          <li class="list-group-item text-white" id="engineer-email">
            Email: ${Engineer.getEmail()}
          </li>
          <li class="list-group-item text-white" id="engineer-github">
            GitHub: ${Engineer.getGithub()}
          </li>
        </ul>
      </div>
      </div>`;
    engineersCardsHTML = `${engineersCardsHTML + thisEngineerCard}`;
  });

  return engineersCardsHTML;
};

const createInternsCards = (interns) => {
  let internsCardsHTML = ``;
  interns.forEach((Intern) => {
    const thisInternCard = `<div class="card text-center" style="width: 18rem" id="intern-card">
    <div class="card-body">
      <h2 class="card-title mb-2" id="intern-name">${Intern.getName().toUpperCase()}</h2>
      <h4 class="card-title">
        <i class="fas fa-user-secret" id="intern-role"></i>${Intern.getRole()}
      </h4>
      <ul class="list-group list-group-flush mt-4 mb-2">
        <li class="list-group-item text-white" id="intern-id">ID: ${Intern.getId()}</li>
        <li class="list-group-item text-white" id="intern-email">
          Email: ${Intern.getEmail()}
        </li>
        <li class="list-group-item text-white" id="intern-github">
          School: ${Intern.getSchool()}
        </li>
      </ul>
    </div>
    </div>`;
    internsCardsHTML = `${internsCardsHTML + thisInternCard}`;
  });

  return internsCardsHTML;
};

const createTeamPage = (manager, engineers, interns) => {
  // Create manager card
  const managerCard = createManagerCard(manager);
  //   Create engineers cards
  const engineersCards = createEngineersCards(engineers);
  //   Create interns cards
  const internsCards = createInternsCards(interns);
  // Create page using the cards
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- Bootstrap CSS framework -->
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <!-- Font awesome icons -->
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossorigin="anonymous"
      />
      <!-- Custom CSS -->
      <link rel="stylesheet" href="./styles.css" />
      <title>Team Profile</title>
    </head>
    <body>
      <!-- Heading title -->
      <h1 class="display-2 text-center text-white mt-4 mb-5">Team Members</h1>
      <!-- Flex container for the cards -->
      <div class="d-flex p-2 justify-content-center mt-5 text-white">
        <!-- Manager card -->
  ${managerCard}
        <!-- Others cards -->
        ${engineersCards ? engineersCards : ""}
        ${internsCards ? internsCards : ""}
      </div>
    </body>
  </html>
  `;
};

module.exports = createTeamPage;
