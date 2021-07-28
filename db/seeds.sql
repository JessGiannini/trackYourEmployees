INSERT INTO department (id, dep_name)
VALUES (001, "Engineering"),
       (002, "Human Resources"),
       (003, "Accounting"),
       (004, "Sales");
       
INSERT INTO roles (id, job_title)
VALUES (001, "Engineer"),
       (002, "HR Representative"),
       (003, "Accountant"),
       (004, "Sales Person");

INSERT INTO employees (id, first_name, last_name, job_title, dep_name, salary, manager)
VALUES (001, "Mike", "Bob", "Engineer", "Engineering", 150000, "Gato Scatena"),
       (002, "Tim", "Taylor", "HR Representative", "Human Resources", 60000, "Jill Taylor"),
       (003, "Dan", "Gia", "Accountant", "Accounting", 250000, "Michelle Barbour"),
       (004, "Gary", "Smith", "Sales Person", "Sales", 140000, "Gina Montgomery");
