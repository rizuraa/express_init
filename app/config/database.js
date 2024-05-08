const Sequelize = require("sequelize");
require("dotenv/config");

const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    timezone: "+07:00",
  }
);

// tes koneksi 
// db.authenticate()
//   .then(() => {
//     console.log('Koneksi database berhasil.');
//   })
//   .catch(err => {
//     console.error('Tidak dapat terhubung ke database:', err);
//   });

module.exports = db;
