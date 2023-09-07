const { createPool} = require("mysql2");
require('dotenv').config();

const connection = createPool({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPWD,
    database: process.env.dbName
});

module.exports = connection;