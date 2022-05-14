const mainMenu = require('../server')
const cTable = require('console.table');
const chalk = require('chalk');
const figlet = require('figlet');
const {db, connection}  = require('../db/connection');
console.log(mainMenu)
function viewBudget() {
    console.log(chalk.yellow.bold(`====================================================================================`));
    console.log(`                              ` + chalk.blue.bold(`Budget By Department:`));
    console.log(chalk.yellow.bold(`====================================================================================`));

    const sql =     `SELECT department_id AS id, 
    department.department_name AS department,
              SUM(salary) AS budget
              FROM  role 
              INNER JOIN department ON role.department_id = department.id GROUP BY role.department_id`;
    connection.query(sql, (error, response) => {
        if (error) throw error;
        console.table(response);
        console.log(chalk.yellow.bold(`====================================================================================`));

        mainMenu();
    });
}

module.exports = viewBudget