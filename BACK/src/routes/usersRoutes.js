const { getUsersHandler, postUserHandler, putUserHandler, deleteUserHandler } = require('../handlers/indexHandlers');
const usersRouter = require('express').Router();

usersRouter.get('/', async (req, res) => {
    // const { name } = req.query;
    // const { email } = req.query;
    // const { _id } = req.query;

    // if (name) {
    //     return getUsersByNameHandler(req, res);
    // };
    // if (email) {
    //     return getUserByEmailHandler(req, res);
    // };
    // if (_id) {
    //     return getUserByIdHandler(req, res);
    // };
    return getUsersHandler(req, res);
});

module.exports = usersRouter;