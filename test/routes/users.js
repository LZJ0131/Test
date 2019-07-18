var express = require('express');
var router = express.Router();
var db = require('../db.js')


// 登录
router.get('/login', function (req, res, next) {
    var obj = req.query;
    db.query('select * from tour_user where user_phone=' + obj.username + '', function (err, rows, fields) {
        if (rows.length == 0) {
            res.send({
                result: 'success',
                msg: '用户不存在',
                status: false
            })
        } else {
            if (rows[0].user_pwd == obj.password) {
                res.send({
                    result: 'success',
                    status: true
                })
            } else {
                res.send({
                    result: 'success',
                    status: false,
                    msg: '密码错误',
                })
            }
        }
    });
})


router.get('/getuser', function (req, res, next) {
    db.query('select id,user_name,user_phone,user_sex from tour_user where user_status=1', function (err, rows, fields) {
        res.send({
            result: 'success',
            userarray: rows,
            msg: '查询成功'
        })
    })
})

router.get('/changeuser', function (req, res, next) {
    var id = req.query.id
    db.query('update tour_user set user_status=0  where id=' + id + '', function (err, rows, fields) {
        if (err == null) {
            res.send({
                result: 'success',
                msg: '操作成功'
            })
        } else {
            res.send({
                msg: err
            })
        }
    })
})

module.exports = router;
