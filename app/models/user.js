const Sequelize = require('sequelize');
const db = require('../config/database');

const { DataTypes } = Sequelize;

const User = db.define('users', {
    nama: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            notNull: true,
        },
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
            notNull: true,
        },
    },
    role: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: true,
        },
    },    
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            notNull: true,
        },
    },
    access_token: {
        type: DataTypes.TEXT
    },
    access_token: {
      type: DataTypes.TEXT
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  }, 
    {underscored: true,
    timestamps: true,},     // Mengaktifkan createdAt dan updatedAt
  );

module.exports = User;