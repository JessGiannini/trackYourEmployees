const inquirer = require("inquirer");
//const fs = require("fs");
//const generateHTML = require("./utils/generateHTML.js");
const mysql = require("mysql2");
const cTable = require("console.table");
const { ConnectionError } = require("./connection/connection");
const {
  initQuestions,
  addDept,
  addRole,
  addEmp,
  updateEmp,
} = require("./questions/questions");

//type: "list",
// message: "Welcome! What would you like to do?",
// name: "welcome",
// choices: [
//   "View All Departments",
//   "Add a Department",
//   "View All Roles",
//   "Add a Role",
//   "View All Employees",
//   "Add an Employee",
//   "Update an Employee",
//   "Exit",

function promptUser() {
  inquirer.prompt(initQuestions).then((answers) => {
    answers = answers.welcome;
    if (answers === "View All Departments") {
      viewDept();
    } else if (answers === "Add a Department") {
      addDept();
    } else if (answers === "View All Roles") {
      viewRoles();
    } else if (answers === "Add a Role") {
      addRole();
    } else if (answers === "View All Employees") {
      viewEmp();
    } else if (answers === "Add an Employee") {
      addEmp();
    } else if (answers === "Update an Employee") {
      updateEmp();
    } else {
      connection.end();
      return;
    }

    //=> writeToFile("generateHTML", answers));
  });
}

//function for displaying department

function viewDept() {
  connection
    .promise()
    .query("SELECT * FROM 'department'")
    .then((rows) => {
      console.log("____________View All Departments____________");
      console.table(rows[0]);
      promptUser();
    })
    .catch((err) => {
      console.log("Error Can't View Departments", err);
    });
}

function addDept() {
  inquirer.prompt(addDept).then((answers) => {
    answers = answer.addDeptName;
    connection.query(
      `INSERT INTO department (dep_name) VALUES ('${answers}')`,
      (err, result, field) => {
        if (err) throw err;
        console.log("____________Department Added____________");
        promptUser();
      }
    );
  });
}

//function for displaying roles

function viewRoles() {
  connection
    .promise()
    .query(
      "SELECT r.id, r.job_title FROM role r inner join department d on r.dep_name=d.id;"
    )
    .then((rows) => {
      console.log("____________View All Roles____________");
      console.table(rows[0]);
    })
    .catch((err) => {
      console.log("Error Can't View Roles", err);
    });
}

//function for displaying employees

// create the connection to database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'test'
// });

// // simple query
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

// // with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );
