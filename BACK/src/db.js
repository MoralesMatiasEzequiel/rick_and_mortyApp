require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DB } = process.env;
const { Sequelize } = require('sequelize');
const UserModel = require('./models/User');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DB}`, { logging: false, native: false })

UserModel(sequelize);


module.exports = {sequelize};