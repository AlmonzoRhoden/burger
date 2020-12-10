// Declaring variables - global scope
const mysql = require('mysql');

// if/else ternary statement  - connection 

var connection = (process.env.JAWSDB_URL)?
    // True, run this
     mysql.createConnection(process.env.JAWSDB_URL)

    //  False, run my mysql database
    :mysql.createConnection
   ({
        host: "localhost",
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'burgers_db'
    })

    // If/else function ternary statment connection check
connection.connect( (err) =>
    (err)? 
    console.error('error connecting' + err.stack)
    :console.log("CONNECTION id: " + connection.threadId)
)
// Exports code to be accessed by other files
module.exports = connection;