const { login } = require('../handlers/indexHandlers');
const loginRouter = require('express').Router();

loginRouter.get('/', async (req, res) => {
    login(req, res);
});

module.exports = loginRouter;