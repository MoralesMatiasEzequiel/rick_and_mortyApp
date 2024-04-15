const { login } = require('./loginHandlers');
const { getUsersHandler, postUserHandler, putUserHandler, deleteUserHandler} = require('./userHandlers');
const { getCharactersHandler, getCharByIdHandler } = require('./charactersHandlers');
const { getCharFavHandlers, postCharFavHandlers, deleteCharFavHandlers } = require('./favoritesHandlers');


module.exports = {
    login, 
    getUsersHandler, 
    postUserHandler,
    putUserHandler, 
    deleteUserHandler,
    getCharactersHandler,
    getCharByIdHandler,
    getCharFavHandlers,
    postCharFavHandlers,
    deleteCharFavHandlers
};