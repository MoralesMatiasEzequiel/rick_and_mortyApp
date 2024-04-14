const { login } = require('./loginHandlers');
const { getUsersHandler, postUserHandler, putUserHandler, deleteUserHandler} = require('./userHandlers');
const charactersHandlers = require('./charactersHandlers');


module.exports = {
    login, 
    getUsersHandler, 
    postUserHandler,
    putUserHandler, 
    deleteUserHandler,
    charactersHandlers
};