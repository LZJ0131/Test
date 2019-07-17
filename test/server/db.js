var mysql = require('mysql');


var connnectionPool = mysql.createPool({
  host    : 'localhost',
  user    : 'root',
  password: 'root',
  database: 'tour'
});


module.exports=connnectionPool
