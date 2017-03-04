var express = require('express');
var router = express.Router();

/* GET helo page. */
router.get('/', function(req, res, next) {
    var str;
    try {
        str = req.cookies.lastdata;
    } catch(e){}
    res.render('helo5',
        {
            title: 'HELO Page',
            msg: 'please type...',
            cookie: "last:" + str,
            input: ''
        }
    );
});

/* POST helo page. */
router.post('/', function(req, res, next) {
    var str = req.body.input1;
    res.cookie("lastdata",str,
        { expires: new Date(Date.now() + 10000)});
    res.render('helo5',
        {
            title: 'HELO Page',
            msg: "you typed: " + str,
            cookie: str,
            input: str
        }
    );
});

module.exports = router;
