var connection = require('./connection');

//obj with methods of things to do with new data

var orm = {
    all: function (tableInput, cb) {
        //collects all data from selected table ...call back should place data in table to the next file(selectall)
        connection.query(' Select * from ' + tableInput + ';', function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    //updateOne existing data
    update: function (tableInput, condition, cb) {
        //dovoured=true where the id is = to the value that we are sending to routes file
        connection.query(' update ' + tableInput + ' Set devoured =true WHERE id = ' + condition + ';',
            function (err, result) {
                if (err) throw err;
                cb(result);
            })
    },

    //insertOne new data in db
    create: function (tableInput, val, cb) {
        connection.query(' INSERT INTO ' + tableInput + " (burger_name) VALUES ('" + val + "'); ", function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    delete: function (tableInput, val, cb) {
        connection.query("DELETE FROM " + tableInput + ' Set devoured =true WHERE id = ' + condition + ';',
            function (err, result) {
                if (err) throw err;
                cb(result);
            });
    }
}

module.exports = orm;