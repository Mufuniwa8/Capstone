const mysql = require("mysql");
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPWD,
    database: process.env.dbName
});

module.exports = connection;