const createTeamPageStyling = () => {
  return `body {
    margin: 0;
    box-sizing: border-box;
    background: linear-gradient(318deg, #009d74, #23b8ff);
    background-size: 400% 400%;
  
    -webkit-animation: AnimationName 41s ease infinite;
    -moz-animation: AnimationName 41s ease infinite;
    animation: AnimationName 41s ease infinite;
  }
  
  /* For icons */
  i {
    padding-right: 10px;
  }
  
  /* For the cards */
  .card {
    background-color: rgba(0, 0, 0, 0.3);
  }
  
  .list-group-item {
    background-color: rgba(0, 0, 0, 0);
  }

  /* For links */
  a {
    color: white;
  }
 
  
  @-webkit-keyframes AnimationName {
    0% {
      background-position: 10% 0%;
    }
    50% {
      background-position: 91% 100%;
    }
    100% {
      background-position: 10% 0%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 10% 0%;
    }
    50% {
      background-position: 91% 100%;
    }
    100% {
      background-position: 10% 0%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 10% 0%;
    }
    50% {
      background-position: 91% 100%;
    }
    100% {
      background-position: 10% 0%;
    }
  }
  `;
};

module.exports = createTeamPageStyling;
