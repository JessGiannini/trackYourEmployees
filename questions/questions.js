const initQuestions = [
  {
    type: "list",
    message: "Welcome! What would you like to do?",
    name: "welcome",
    choices: [
      "View All Departments",
      "Add a Department",
      "View All Roles",
      "Add a Role",
      "View All Employees",
      "Add an Employee",
      "Update an Employee",
      "Exit",
    ],
  },
];

//View All Departments needs a function to show database
//Add department to the db
const addADept = [
  {
    type: "input",
    message: "What is the name of the Department you would liket to add?",
    name: "addDeptName",
  },
];

//View All Roles needs a function to show database
//Add role to db
const addRole = [
  {
    type: "input",
    message: "What is the name of the Role you would like to add?",
    name: "addRoleName",
  },
];

//View All Employees needs a function to show database
//Add employee to db
const addEmp = [
  {
    type: "input",
    message: "What is the name of the Employee you would like to add?",
    name: "addEmpName",
  },
];
