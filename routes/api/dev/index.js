var express = require('express');
var router = express.Router();

const userRouter = require('./user');

router.use('/users', userRouter);

module.exports = router;