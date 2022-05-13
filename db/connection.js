const mysql = require('mysql2');
require('dotenv').config();

// connect to database
const db = {
  host: '127.0.0.1',
    // Your MySQL username
    user: process.env.DB_USER,
    // Your MySQL password
    password: process.env.DB_PASSWORD,
    database: "employee_db"
}

const connection = mysql.createConnection(db);

module.exports = db, connection