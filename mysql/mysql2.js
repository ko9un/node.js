// get the client
const mysql = require('mysql2');



// create the connection to database
const connection = mysql.createConnection({
  host: '172.22.160.1',
  user: 'joe',
  password: 'black',
  database: 'opentutorials',
});



// simple query
connection.query(
  'SELECT * FROM topic',
  function(err, results, fields) {
    console.log(err);
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

