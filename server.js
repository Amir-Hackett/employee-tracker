const db = require('./db/connection');
const inquirer = require('inquirer'); 
const cTable = require('console.table'); 
const chalk = require('chalk');
const figlet = require('figlet');
const connection  = require('./db/connection');

db.connection(err => {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log(chalk.yellow.bold(`==============================================================================================`));
    console.log(``);
    console.log(chalk.red.bold(figlet.textSync('Employee Tracker')));
    console.log(``);
    console.log(`                                                                    ` + chalk.blue.bold('Created By: Amir Hackett'));
    console.log(``);
    console.log(chalk.yellow.bold(`==============================================================================================`));    mainMenu();
});
