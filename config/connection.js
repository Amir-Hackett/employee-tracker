const mysql = require('mysql2');

require('dotenv').config();

const connectionProperties = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    // Your MySQL password
    password: 'Ami0799!',
    database: process.env.DB_NAME
};

const connection = mysql.createConnection(connectionProperties);

module.exports = {
    connectionProperties,
    connection
};