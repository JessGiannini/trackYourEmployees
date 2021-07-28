INSERT INTO department (name)
VALUES ("Engineering"),
       ("Human Resources"),
       ("Accounting"),
       ("Sales");
       
INSERT INTO roles (id, job_title, salary,)
VALUES (001, "Engineer", 150000),
       (002, "HR Representative", 60000),
       (003, "Accountant", 250000),
       (004, "Sales Person", 140000);

INSERT INTO employees (id, first_name, last_name, job_title, dep_name,  manager)
VALUES (001, "Mike", "Bob", "Engineer", "Engineering", "Gato Scatena"),
       (002, "Tim", "Taylor", "HR Representative", "Human Resources", "Jill Taylor"),
       (003, "Dan", "Gia", "Accountant", "Accounting", "Michelle Barbour"),
       (004, "Gary", "Smith", "Sales Person", "Sales", "Gina Montgomery");

SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employees;