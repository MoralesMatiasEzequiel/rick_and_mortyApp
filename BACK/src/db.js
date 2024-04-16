require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const { Sequelize } = require('sequelize');
const UserModel = require('./models/User');
const FavoriteModel = require('./models/Favorite');


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, { logging: false, native: false })

UserModel(sequelize);
FavoriteModel(sequelize);   

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: 'UserFavorite', timestamps: false });  
Favorite.belongsToMany(User, { through: 'UserFavorite', timestamps: false });

module.exports = {
    ...sequelize.models,
    sequelize
};