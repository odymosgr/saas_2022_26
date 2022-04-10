// connection pool for database

var mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 100000,
  host: 'db',
  port: 3306,
  user: 'root',
  password: 'example',
  database: 'energy_live_database',
  debug: false
});

module.exports = pool