const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DTBS,
  timezone: 'utc'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
