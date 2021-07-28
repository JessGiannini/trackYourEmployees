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
      viewDepts();
    } else if (answers === "Add a Department") {
      addDepts();
    } else if (answers === "View All Roles") {
      viewRoles();
    } else if (answers === "Add a Role") {
      addRoles();
    } else if (answers === "View All Employees") {
      viewEmps();
    } else if (answers === "Add an Employee") {
      addEmps();
    } else if (answers === "Update an Employee") {
      updateEmps();
    } else {
      connection.end();
      return;
    }

    //=> writeToFile("generateHTML", answers));
  });
}

//function for displaying department

function viewDepts() {
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

function addDepts() {
  inquirer.prompt(addDept).then((answers) => {
    answers = answers.addDeptName;
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
      "SELECT r.id, r.job_title r.salary, FROM role r inner join department d on r.dep_name=d.id;"
    )
    .then((rows) => {
      console.log("____________View All Roles____________");
      console.table(rows[0]);
    })
    .catch((err) => {
      console.log("Error Can't View Roles", err);
    });
}

function addRoles() {
  connection
    .promise()
    .query("SELECT * FROM department")
    .then((row) => {
      var roleDeptChoices = rows[0];
      for (var i = 0; i < roleDeptChoices.length; i++) {
        addRole[2].choices.push(roleDeptChoices[i].dept_name);
      }
      inquirer
        .prompt(addRole)
        .then((answers) => {
          var dept_name = answers.addRoleDept;
          connection
            .promise()
            .query(`SELECT * FROM department WHERE name = '${dept_name}'`)
            .then((rows) => {
              let dept_id = rows[0][0].id;
              connection.query(
                `INSERT INTO role (job_title, salary, dept_id) VALUE ('${
                  answers.addRoleName
                }', ${Number(answers.addRoleSalary)}, ${dept_id})`,
                (err) => {
                  if (err) throw err;
                  console.log("____________Role Added____________");
                  promptUser();
                }
              );
            })
            .catch((err) => {
              console.log("error", err);
            });
        })
        .catch((err) => {
          console.log("error", err);
        });
    })
    .catch((err) => {
      console.log("error", err);
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
