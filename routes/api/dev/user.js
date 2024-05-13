const {getUsers, addUser} = require('../../../app/controllers/UsersController');
var express = require("express");
var router = express.Router();

router.get('/', getUsers);
router.post('/', addUser);

module.exports = router;