require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DB } = process.env;
const { Sequelize } = require('sequelize');
const UserModel = require('./models/User');
const FavoriteModel = require('./models/Favorite');


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DB}`, { logging: false, native: false })

UserModel(sequelize);
FavoriteModel(sequelize);   

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: 'UserFavorite' });
Favorite.belongsToMany(User, { through: 'UserFavorite' });

module.exports = {
    ...sequelize.models,
    sequelize
};