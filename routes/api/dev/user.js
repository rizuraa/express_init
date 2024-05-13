const {getUsers, addUser, deleteUser, updateUser} = require('../../../app/controllers/UsersController');
var express = require("express");
var router = express.Router();

router.get('/', getUsers);
router.post('/', addUser);
router.delete('/:id', deleteUser);
router.put('/update-user/:id', updateUser);

module.exports = router;