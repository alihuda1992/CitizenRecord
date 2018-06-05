var connection = require('./connection');

//obj with methods of things to do with new data

var orm = {
   
    search: function (zip,badgeid,agency,agent_name,cb) {
        connection.query('select * from posts where zip in (?) and badgeid like (?) and agency like (?) and agent_name like (?)',[zip,badgeid,agency,agent_name], function (err,result){
            if (err) throw err;
            cb (result);
        }) 
    },

    submit: function(username,zip,incidentdate,badgeid,agency,race,gender,content,sworncheck,agent_name,cb){
        connection.query('INSERT INTO posts (username,ZIP,incidentdate, badgeid,agency,race,gender,content,sworncheck,agent_name) VALUES (?,?,?,?,?,?,?,?,?,?)', [username,zip,incidentdate,badgeid,agency,race,gender,content,sworncheck,agent_name], function (err,result){
            if (err) throw err;
            cb(result);
        })
    },

}

module.exports = orm;