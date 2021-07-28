DROP DATABASE IF EXISTS main_db;
CREATE DATABASE main_db;

USE main_db;

CREATE TABLE department (
  id INT NOT NULL,
  dep_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL,
  job_title VARCHAR(100),  
  FOREIGN KEY (job_title),
  REFERENCES department(id),
  ON DELETE SET NULL
);

CREATE TABLE employees (
  id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  job_title VARCHAR(100),
  dep_name VARCHAR(30),
  salary INT NOT NULL,
  manager VARCHAR(80),
  FOREIGN KEY (job_title) REFERENCES role(id),
  FOREIGN KEY (manager) REFERENCES employee(id),
  PRIMARY KEY (id)
);
