const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML.js");

function promptUser() {
  inquirer
    .prompt(questions)
    .then((answers) => writeToFile("generateHTML", answers));
}
