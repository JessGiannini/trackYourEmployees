DROP DATABASE IF EXISTS main_db;
CREATE DATABASE main_db;

USE main_db;

CREATE TABLE department (
  id INT NOT NULL,
  dep_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  job_title VARCHAR(100),  
  id INT NOT NULL,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
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
  PRIMARY KEY (id)
);
