var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Maddough2018!",
  database: "citizenrecord"
});

connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT * FROM posts", function (err, result, fields) {
    if (err) throw err;
  });

});

//connection.connect();
module.exports=connection;