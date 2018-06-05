var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "citizenrecord"
});

// if (process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// }else {
//   connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'password',
//     database:'citizenfinder'
//   });
// };



// connection.connect();
// module.exports=connection;



connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT * FROM posts", function (err, result, fields) {
    if (err) throw err;
  });

});

