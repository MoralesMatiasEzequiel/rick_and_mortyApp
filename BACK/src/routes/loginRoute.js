const { login } = require('../handlers/indexHandlers');
const loginRouter = require('express').Router();

loginRouter.get('/', login);

module.exports = loginRouter;