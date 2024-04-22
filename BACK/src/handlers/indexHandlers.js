const { login }  = require('./loginHandlers');
const { getUsersHandler, getUserIdHandler, postUserHandler, putUserHandler, putUserBannedHandler, deleteUserHandler } = require('./userHandlers');
const { getCharactersHandler, getCharByIdHandler } = require('./charactersHandlers');
const { getCharFavHandlers, postCharFavHandlers, deleteCharFavHandlers } = require('./favoritesHandlers');


module.exports = {
    login, 
    getUsersHandler, 
    getUserIdHandler,
    postUserHandler,
    putUserHandler, 
    putUserBannedHandler,
    deleteUserHandler,
    getCharactersHandler,
    getCharByIdHandler,
    getCharFavHandlers,
    postCharFavHandlers,
    deleteCharFavHandlers
};