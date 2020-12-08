// Declaring Variables
const connection = require('./connection.js');
const {query} = require('express');


// Setting up object relational mapping code for sql table
let orm = 
{

    // SelectAll section
    selectAll: function (tableInfo, cb) 
    {
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableInfo], function (err, res) {
            if (err) {throw err };
            console.log('Table query data succesfuly recieved from line 10');
            console.log(tableInfo)
            cb(res);
        })
    },
    
    // Create section
    create: function (tableName, column, value, cb) {
        let queryString = "INSERT INTO " + tableName;

        queryString += "(";
        queryString += column.toString();
        queryString += ") VALUES ('"
        queryString += value.toString();
        queryString += "');"

        console.log(queryString, "from ORM.js line26");
        console.log(column, "ORM line27")
        console.log(value, "ORM line 28")

        connection.query(queryString, value, function (err, res) {
            if (err) {
                throw err;
            }

            cb(res);
        })
    },

    // Update section
    update: function (id, cb) {
        let queryString = `UPDATE burgers SET devoured = true WHERE id = ${id}`
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        })

    },
    
    // Delete section
    delete: function (table, cond, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += cond;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        })
    }

}

// Exporting object relational mapping code
module.exports = orm;