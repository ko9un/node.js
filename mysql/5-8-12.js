const express = require('express');
const mysql = require('mysql2');
const app = express();


require('dotenv').config();

app.get('/', function (req, res) {
    const connection = mysql.createConnection({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database,
    });

    let body = '<h1>single row</h1>';
    connection.query(
        "SELECT * FROM topic WHERE id= 1",
        function (err, results, fields) {
            let row = results[0];
            body += row.title;
            console.log(fields);
        });

});

app.listen(3000, function () {
    console.log(process.env)
    console.log('Listening: http://localhost:3000')
});
