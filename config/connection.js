// Declaring variables - Global Scope
const mysql = require('mysql');
var connection;

// if/else ternary statement creating connection
(process.env.JAWSDB_URL) ?
    connection = mysql.createConnection(process.env.JAWSDB_URL)
    : connection = mysql.createConnection
        ({
            host: "localhost",
            port: 3306,
            user: 'root',
            password: 'password',
            database: 'burgers_db',
        });

// if-else ternary connection outputing result
connection.connect
    (
        (err) =>
            (err) ?
                console.error('Error detected: ' + err.stack)
                : console.log('Connection id: ' + connection.threadId)
    )

// Exporting connection code
module.exports = connection;