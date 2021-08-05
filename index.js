var mysql = require ('mysql');
const express = require ('express');

const app = express();
/*const port = 3000;

app.get('/', (req, res) => {
    res.end('Hello World!');
  });
  
  app.listen(port, () => {
      console.log(`app listening at http://localhost:${port}`)
    });*/


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb_1"
});


/*con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb_1", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });*/

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });
  
  //process.exit();