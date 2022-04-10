const express = require("express")
const mysql = require('mysql');

const app = express()

// Setup Database
const dbSetupWithRetry = () => {
  var con = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'example'
  });
  
  con.connect(function(err) {
    if (err) {console.log(err); setTimeout(dbSetupWithRetry, 5000);}
    con.query("CREATE DATABASE IF NOT EXISTS energy_live_database", function (err, result) {
      if (err) {console.log(err); setTimeout(dbSetupWithRetry, 5000);}
      console.log("Database energy_live_database is up and running!");
    });
  });
}

app.get("/", (req, res) => {
  res.send("<h2>Hi There Traveler!!</h2>")
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on port ${port}`))