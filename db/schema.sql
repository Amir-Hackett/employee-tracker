DROP TABLE IF EXISTS department
DROP TABLE IF EXISTS role
DROP TABLE IF EXISTS employee

CREATE TABLE department (
    id INTEGER NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INTEGER NOT NULL,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL(10,2) NOT NULL,
    department_id INTEGER UNSIGNED NOT NULL REFERENCES department(id),
    PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INTEGER NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER UNSIGNED NOT NULL REFERENCES role(id),
  manager_id INTEGER UNSIGNED REFERENCES manager(id),
  PRIMARY KEY (id)
);
