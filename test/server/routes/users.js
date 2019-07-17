var express = require('express');
var router = express.Router();
var db=require('../db.js')


router.get('/login',function(req,res,next){
  // console.log(req.body)
  db.getConnection(function(err, db){
    if(err){
        console.error('CONNECTION error: ', err);
        res.statusCode = 503;
        res.send({
            result : 'error',
            err :  err.code
        });
    }
    else{
        console.log("CONNECTION SUCCESSFUL!");
        db.query('select * from tour_user' , function(err, rows, fields){
            if(err){
                console.log("Query data ERROR!");
            }
            res.send({
                result: 'success',
                // fields: fields,
                data: rows,
                count : rows.length
            });
            db.release();
        });
    }
  }); 
})

// router.post('/login',function(req,res,next){

// })

module.exports = router;
