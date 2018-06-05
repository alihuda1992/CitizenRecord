var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "citizenrecord"
// });
// connection.connect(function(err) {
//   if (err) throw err;
//   connection.query("SELECT * FROM posts", function (err, result, fields) {
//     if (err) throw err;
//   });

// });



// jaws db connection

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = mysql.createConnection({
    host:'nuskkyrsgmn5rw8c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user:'x76czm22hm017jcs',
    password:'puo3aaz0ymiys4tp',
    database:'nttebnq6xpxnjyy4'
  });
};

connection.connect();
module.exports=connection;





