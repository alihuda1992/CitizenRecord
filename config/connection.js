var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'hacktheplanet',
    database:'citizenfinder'
  })
}

connection.connect();
module.exports=connection;