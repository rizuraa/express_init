const bcrypt = require('bcrypt');
const { responseWithData, responseWithError, responseWithoutData } = require('../helpers/Responses');
const User = require('../models/user');

//get all datas 
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'nama', 'email', 'role']      
    })
    if (!users[0]) return responseWithoutData(res, 404, " NOT_FOUND", "Users not exist");
    return responseWithData(res, 200, "OK", "Displayed all users", users);
  } catch (error) {
    return responseWithError(res, 400, "BAD_REQUEST", "Failed to display all users", error);
  }
}

// post data
exports.addUser = async (req, res, next) => {
  const {nama, email, role, password, acces_token} = req.body;

    try {
      // bcrypt hash
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(password, salt);

      await User.create({
        nama: nama,
        email: email,
        role: role,
        password: hash,
        acces_token: acces_token,
        created_at: new Date(),
        updated_at: new Date(),
      })
      return responseWithData(res, 201, "CREATED", "User berhasil ditambahkan", req.body);
    } catch (error) {
      return responseWithError(res, 400, "BAD_REQUEST", "Gagal menambahkan data user", error.errors);
    }
}