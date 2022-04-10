var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'example'
});

con.connect(function(err) {
  if (err) throw err;
  con.query("CREATE DATABASE IF NOT EXISTS energy_live_database", function (err, result) {
    if (err) throw err;
    console.log("Database energy_live_database is up and running!");
  });
});