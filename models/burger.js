const orm = require('../config/orm.js');
const {query} = require('express');

let burger = {
    // Select All data from table
    all: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },
    // Create data for table
    create: function (cols, vals, cb) {
        orm.create('burgers', cols, vals, function (res) {
            cb(res);
        });
    },
    // Update table data
    update: function (id, cb) {
        orm.update(id, function (res) {
            cb(res);
        });
    },
    // Delete table data
    delete: function (cond, cb){
        orm.delete('burgers', cond, function(res){
            cb(res);
        })
    }

}

// Exporting burgers code for access
module.exports = burger;