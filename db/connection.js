const mysql = require('mysql2');
require('dotenv').config();

// connect to database
const db = mysql.createConnection({

  host: 'localhost',
    // Your MySQL username
    user: process.env.DB_USER,
    // Your MySQL password
    password: process.env.DB_PASSWORD,
    database: "employee_db"
},
console.log('Connected to the employee database')
);

module.exports = db;