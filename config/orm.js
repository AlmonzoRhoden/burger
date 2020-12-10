// Declaring variables
const connection = require('./connection.js');


let orm = {
    // Selecting data from table
    selectAll: function (tableInfo, cb) {
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableInfo], function (err, res) {
            if (err) { throw err };
            console.log('Successfully sent table from database from orm.js line 10');
            console.log(tableInfo)
            cb(res);
        })


    },
    // Creating data from table
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
    // Updating data from table
    update: function (id, cb) {
        let queryString = `UPDATE burgers SET devoured = true WHERE id = ${id}`
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        })

    },
    // Deleting data from table
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

// Exporting orm code for access
module.exports = orm;