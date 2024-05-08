var express = require('express');
var router = express.Router();
const { version } = require('../app/config/params');

// Home Page 
router.get('/', function(req, res, next){
    res.render('index', {
        title: 'Test Latihan',
        version: version
    })
})

module.exports = router;